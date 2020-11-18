# Evaluate A News Article with Natural Language Processing
Description: on this website you insert a link into the input field and hit the generate button. The app makes a call to the meaningcloud api with the text of the link and responds with the api generated answers: score tags, irony, confidence, subjectivity and the original text

## Table of Contents

* [Technologies](#technologies)
* [Installation](#installation)
* [Bugs](#bugs)
* [Build](#build)
* [Credits](#credits)

## Technologies
* HTML5
* CSS3
* Javascript ES6
* node.js
* express
    * cors
    * bodyparser
    * dotenv
    * node-fetch
* webpack
    * @babel/core
    * @babel/plugin-transform-runtime
    * @babel/preset-env
    * babel-loader
    * clean-webpack-plugin
    * css-loader
    * file-loader
    * html-webpack-plugin
    * mini-css-extract-plugin
    * sass-loader
    * style-loader
    * webpack-dev-server
* meaningcloud api

## Installation
`npm install`

## Bugs

## Build
`npm run start` starts express server
`npm run dev` spins up dev server
`npm run prod` minimizes the project

## Credits
project by udacity