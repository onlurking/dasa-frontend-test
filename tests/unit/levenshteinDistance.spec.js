// Most of the unit tests comes from a production quality implementation
// https://github.com/nickzuber/levenshtein-lite/blob/master/unit/tests.js

import levenshteinDistance from '../../helpers/levenshteinDistance'

describe('levenshtein distance from string', () => {
  test('"kitten" to "sitting"', () => {
    expect(levenshteinDistance('kitten', 'sitting')).toBe(3)
  })

  test('"summertime" to "spring"', () => {
    expect(levenshteinDistance('summertime', 'spring')).toBe(7)
  })

  test('"book" to "back"', () => {
    expect(levenshteinDistance('book', 'back')).toBe(2)
  })

  test('"hoopla" to "hadoop"', () => {
    expect(levenshteinDistance('hoopla', 'hadoop')).toBe(4)
  })

  test('"playground" to "playgoudn"', () => {
    expect(levenshteinDistance('playground', 'playgoudn')).toBe(3)
  })

  test('"granola" to "grandma"', () => {
    expect(levenshteinDistance('granola', 'grandma')).toBe(2)
  })

  test('"levenshtein" to "meilenstein"', () => {
    expect(levenshteinDistance('levenshtein', 'meilenstein')).toBe(4)
  })

  test('"lince" to "Abradolf Lincler"', () => {
    expect(levenshteinDistance('lince', 'Abradolf Lincler')).toBe(11)
  })
})
