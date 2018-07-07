# Maukerja Project

## How to simply Run

for a simplify reason, .env is provided, just copy and then enter a line of the following command:

```
$ git checkout develop && yarn && npm run dev
```

## Note

Due to the mock API server is not complete for live interactive REST interaction, some of business logic is just a simulation, for instance: in searching feature, it's only filtered at client side. also for the pagination, its total is hard-coded for 35 records.

## Description

This is just a little an incomplete project to solve aJobThing test.

### Stacks

- React
- Redux
- Redux Saga
- Babel
- Webpack
- Yarn
- NodeJs & NPM
- Ant Design

### Webpack plugins that I implemented:

- dotenv to keep env variable
- html generator to generate index.html
- minify indes.html file
- hash .js name
- uglify to mangle the code
- dist folder cleaner
- assets copier
- code-splitter
- hot reload (live UI reload once .js file been changed)
- hot module replacement (live UI's style changes once .less or .css file been changed)

## Prerequisites

- [NodeJs](https://nodejs.org) & [npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com)

## Installation

```
$ yarn
```

## Test

```
$ npm test
```

## Run Development Version

```
$ npm run dev
```

## Build for Production

```
$ npm run prod
```

and then host a **dist** folder as a static file in a certain folder/bucket.

## Preferences
this project is created from scratch based on my codebase which I hosted in this [Github](https://github.com/burhanmubarok/react-redux-saga-babel-webpack)

***
