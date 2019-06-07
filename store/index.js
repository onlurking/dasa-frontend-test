export const state = () => ({
  characters: []
})

export const mutations = {
  setCharacters(state, characters) {
    state.characters = characters
  }
}
export const actions = {
  async populateCharacters({ commit }) {
    const {
      data: { results }
    } = await this.$axios.get(`https://rickandmortyapi.com/api/character/`)

    commit('setCharacters', results)
  }
}
