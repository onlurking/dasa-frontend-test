# Rick and Morty Frontend Test

This is a project for the [Dasa Frontend Code Interview](https://github.com/baesso/frontend-simple-test), it relies on the [Rick and Morty REST API](https://rickandmortyapi.com) and features advanced custom search(which is a mix of regex and the levenshtein distance algorithm for sorting results).

## Architecture

The project is a SPA built with [Nuxt.js](https://nuxtjs.org).

The application logic relies on the [store](https://github.com/onlurking/dasa-frontend-test/blob/master/store/index.js), from fetching the data from [API](https://rickandmortyapi.com/api/character) to the search.

### Folder Structure

- `assets/css/reset.css` provides the CSS reset for browser consistency.
- `components/` have the application components, named the **navbar**, **searchbar**, and the characters **card**.
- `helpers/` provides generic javascript functions. There you'll find the `levenshteinDistance.js` which is a [algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) that calculates the distance for two strings, is used for sorting the results¹.
- `layouts/` provides a default template for all the pages.
- `pages/` contains all the application pages(for now it only have index).
- `static/` folder have all the static files, it only have the logo image.
- `store/` have all the data and the logic of the application.
- `tests/` contains all the tests, `e2e` folder have [Cypress](https://cypress.io/) End to End tests, the `unit` folder contain [Jest](https://jestjs.io) unit tests for functions.

¹ eg. the string `"lince"` is more similar to `"Abradolf Lincler"` than `"Abadango Cluster Princess"` so it will be displayed first.

## Project Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# generate static project
$ yarn run generate

# build for production and launch server
$ yarn run build
$ yarn start

# run e2e tests
$ yarn e2e

```

## Styleguide

Javascript is linted by [eslint](https://eslint.org/docs/user-guide/getting-started) with the [JavaScript Standard Style](https://standardjs.com) rules. <br>
CSS is linted by [stylelint](https://stylelint.io) with [lintheus](https://github.com/onlurking/stylelint-config-lintheus) rules, which is based on my former co-worker 😂👌. <br>
Git commits follow the [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

## Roadmap

- [x] [Figma Design](https://www.figma.com/file/PXCF8qcmalLIQhjVFDAPVvo9/Dasa)
- [x] Advanced search
- [x] Testing
  - [ ] Unit tests (Jest) [doc](https://vue-test-utils.vuejs.org/guides/using-with-vuex.html)
  - [x] End to End tests (Cypress)
