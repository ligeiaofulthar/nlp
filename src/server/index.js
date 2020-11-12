// express to run server and routes
const express = require('express')
const app = express()

/* include dependencies */
// bodyparser as middleware
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const fetch = require('node-fetch');

const dotenv = require('dotenv')
dotenv.config()

const mockAPIResponse = require('./mockAPI.js')
// const { response } = require('express')

/* Initializing the main project folder */

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))
// app.use(express.static(views))
console.log(__dirname)

let projectData = {};
console.log(projectData);

app.get('/', function (req, res) {
    // res.sendFile(path.resolve('dist/index.html'))
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
  // res.send('hello test')
  res.send(mockAPIResponse)
})

// const getSentiment = async (req,response)=>{

//   let text = req.body.text
//   const url ="https://api.meaningcloud.com/sentiment-2.1?key=";
//   const api ='`${process.env.API_KEY}`';
//   const model = 'general';
//   const lang = 'en';

//   const res = await fetch(url+api+'&of=json&txt='+text+'&model='+model+'&lang='+lang+'');
//   try {

//     const data = await res.json();
//     console.log(data)

//     response.send(data);
//   }  catch(error) {
//     console.log("error", error);
//     // appropriately handle the error
//   }
// }



const sendData = async (req, response)=>{
  let input = req.body.text
  let text = input.URL
  const url ="https://api.meaningcloud.com/sentiment-2.1?key=";
  const api = process.env.API_KEY;
  const model = 'general';
  const lang = 'en';

  const res = await fetch(`${url}${api}&of=json&txt=${text}&model=${model}&lang=${lang}`);
console.log(`${url}${api}&of=json&txt=${text}&model=${model}&lang=${lang}`);
  try {
    const data = await res.json();

    // data.confidence = req.body.confidence;
    // var token = req.body.subjectivity;
    // var geo = req.body.irony;

  
    projectData['text'] = req.body.text;

    console.log('try', data);
    console.log('text', projectData);
    response.send(data);
  } catch(error) {
    console.log('error', error);
  }
}

// app.post('/sentiment', sendData);


// let text = "In the country of Sokovia, the Avengers – Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton – raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments – twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy – and apprehend Strucker, while Stark retrieves Loki's scepter.".URL;

// post route
app.post('/sentiment', function (req, res) {
  sendData(req, res);
  // projectData['text'] = req.body.text;
    // projectData['text'] = req.body.title;
    // res.send(projectData);
  // console.log(projectData);
})

// app.get("/all", (req, res) => {
//   res.send(projectData);
//   console.log(projectData);
// });

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})



// var https = require('follow-redirects').https;
// var fs = require('fs');
// var url = require('url');

// let lang = "en";
// let model = "general";
// let text = "In the country of Sokovia, the Avengers – Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton – raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments – twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy – and apprehend Strucker, while Stark retrieves Loki's scepter.".URL;
// var options = {
//   'method': 'POST',
//   'hostname': 'api.meaningcloud.com',
//   'path': '/sentiment-2.1?key='+`${process.env.API_KEY}`+'&of=json&txt='+text+'&model='+model+'&lang='+lang+'',
//   'headers': {
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//     console.log(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//     // console.log(chunks);

//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();

// get route
// app.get('/test', function (req, res) {
//   res.send('test route');
// })


