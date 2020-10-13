const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// start of meaningcloud api
var https = require('follow-redirects').https;
var fs = require('fs');
var url = require('url');

let lang = "en";
let model = "general";
let text = "In the country of Sokovia, the Avengers – Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton – raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments – twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy – and apprehend Strucker, while Stark retrieves Loki's scepter.".URL;
var options = {
  'method': 'POST',
  'hostname': 'api.meaningcloud.com',
  'path': '/sentiment-2.1?key='+`${process.env.API_KEY}`+'&of=json&txt='+text+'&model='+model+'&lang='+lang+'',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
    console.log(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    console.log(chunks);

  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();