# Rick and Morty Frontend Test

This is a project for the [Dasa Frontend Code Interview](https://github.com/baesso/frontend-simple-test), it relies on the [Rick and Morty REST API](https://rickandmortyapi.com) and features advanced custom search(which is a mix of regex and the levenshtein distance algorithm for sorting results).

## Architecture

The project is a SPA built with [Nuxt.js](https://nuxtjs.org).

The application logic relies on the [store](https://github.com/onlurking/dasa-frontend-test/blob/master/store/index.js), from fetching the data from [API](https://rickandmortyapi.com/api/character) to the search.

### Folder Structure

- `assets/css/reset.css` provides the CSS reset for browser consistency.
- `components/` have the application components, named the **navbar**, **searchbar**, and the characters **card**.
- `helpers/` provides generic javascript functions, it only have the `levenshteinDistance.js` which is a [algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) that calculates the distance from two strings, is used in this project because the string `"lince"` is more similar to `"Abradolf Lincler"` than `"Abadango Cluster Princess"` for example.
- `layouts/` provides a default template for all the pages.
- `pages/` contains all the application pages(for now it only have index).
- `static/` folder have all the static files, it only have the logo image.
- `store/` have all the data and the logic of the application.
- `test/` contains all the application test, is currently **WIP**.

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
```
