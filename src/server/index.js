const dotenv = require('dotenv');
dotenv.config();

// express to run server and routes
const express = require('express');

/* include dependencies */
// bodyparser as middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');

const app = express()

const mockAPIResponse = require('./mockAPI.js')

/* Initializing the main project folder */

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
  // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
  // res.send('hello test')
  res.send(mockAPIResponse)
})

const sendData = async (req, res) => {
  let input = req.body.url;
  let text = encodeURI(input);
  console.log(`You entered: ${input}`);

  const url = "https://api.meaningcloud.com/sentiment-2.1?key=";
  const api = process.env.API_KEY;
  const model = 'general';
  const lang = 'en';

  const response = await fetch(`${url}${api}&lang=${lang}&url=${text}&model=${model}`);
  console.log(`${url}${api}&lang=${lang}&url=${text}&model=${model}`);
  try {
    const data = await response.json();
    console.log(data)

    const projectData = {
      score_tag: data.score_tag,
      confidence: data.confidence,
      irony: data.irony,
      subjectivity: data.subjectivity,
      url: req.body.url

    }
    console.log('project data log', projectData.confidence);
    console.log('server', projectData);
    console.log('text neu', projectData.url);
    res.send(projectData);

  } catch (error) {
    console.log('error from index.js', error);
  }
}

// post route
app.post('/sentiment', function (req, res) {
  sendData(req, res);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})