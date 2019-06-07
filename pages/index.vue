<template>
  <section class="container">
    <div>
      <search v-model="query" class="search" />
      <div class="results">
        <div v-for="char in filteredCharacters" :key="char.id">
          <CharacterCard :char="char" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from '~/components/SearchBar'
import CharacterCard from '~/components/CharacterCard'
import levenshteinDistance from '~/helpers/levenshteinDistance'

export default {
  components: {
    Search,
    CharacterCard
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

.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
