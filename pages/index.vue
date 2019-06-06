<template>
  <section class="container">
    <div>
      <search v-model="query" class="search" />
      <div v-for="char in filteredCharacters" :key="char.id">
        {{ char.name }}
      </div>
    </div>
  </section>
</template>

<script>
import Search from '~/components/SearchBar.vue'

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
      const regex = new RegExp(
        `\b?${Array.from(this.query).join('.*')}\b?`,
        'gi'
      )
      return this.characters.filter(item => item.name.match(regex))
    }
  },
  created: async function() {
    const {
      data: { results, info }
    } = await this.$axios.get(`https://rickandmortyapi.com/api/character/`)
    this.characters = results
    this.pageInfo = info
  }
}
</script>

<style lang="postcss" scoped>
.search {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>
