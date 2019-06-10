import { mutations } from '../../store/index'

test('setCharacters works correctly', () => {
  const state = {
    characters: []
  }

  mutations.setCharacters(state, [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    }
  ])
  expect(state.characters[0].name).toBe('Rick Sanchez')
})
