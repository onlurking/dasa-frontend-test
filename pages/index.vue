<template>
  <section class="container">
    <div>
      <search v-model="query" class="search" />
      <div v-for="char in filteredCharacters" :key="char.id">
        {{ char.name }}
        {{ char.distance }}
      </div>
    </div>
  </section>
</template>

<script>
import Search from '~/components/SearchBar.vue'
import levenshteinDistance from '~/helpers/levenshteinDistance.js'

export default {
  components: {
    Search
  },
  data: function() {
    return {
      query: '',
      characters: [],
      pageInfo: {}
    }
  },
  computed: {
    filteredCharacters: function() {
      const { query, characters } = this
      const regexPattern = `\b?${Array.from(query).join('.*')}\b?`
      const regex = new RegExp(regexPattern, 'gi')

      return characters
        .filter(item => item.name.match(regex))
        .map(char => ({
          ...char,
          distance: levenshteinDistance(this.query, char.name)
        }))
        .sort((a, b) => a.distance - b.distance)
    }
  },
  async created() {
    const {
      data: { results, info }
    } = await this.$axios.get(`https://rickandmortyapi.com/api/character/`)
    this.characters = results
    this.pageInfo = info
  },
  methods: {
    levenshteinDistance: levenshteinDistance
  }
}
</script>

<style lang="postcss" scoped>
.search {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>
