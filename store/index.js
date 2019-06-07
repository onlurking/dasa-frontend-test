import levenshteinDistance from '~/helpers/levenshteinDistance'

export const state = () => ({
  characters: []
})

export const mutations = {
  setCharacters(state, characters) {
    state.characters = characters
  }
}

export const getters = {
  filterCharactersBy: state => query => {
    const regexPattern = `\b?${Array.from(query).join('.*')}\b?`
    const regex = new RegExp(regexPattern, 'gi')
    return state.characters
      .filter(item => item.name.match(regex))
      .map(char => ({
        ...char,
        distance: levenshteinDistance(query, char.name)
      }))
      .sort((a, b) => a.distance - b.distance)
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
