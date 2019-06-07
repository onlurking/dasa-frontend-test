<template>
  <section class="container">
    <div>
      <search v-model="query" class="search" />
      <div class="results">
        <div v-for="char in filterCharactersBy(query)" :key="char.id">
          <CharacterCard :char="char" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from '~/components/SearchBar'
import CharacterCard from '~/components/CharacterCard'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  components: {
    Search,
    CharacterCard
  },
  data: () => ({
    query: ''
  }),
  computed: {
    ...mapState(['characters']),
    ...mapGetters(['filterCharactersBy'])
  },
  created() {
    this.populateCharacters()
  },
  methods: {
    ...mapActions(['populateCharacters'])
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
