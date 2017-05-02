require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const request = require('request');
const server = express();
server.set('port', process.env.PORT || 3000 );
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
  res.sendFile(getFile('index'));
});

server.get('/science/', (req, res) => {
  res.sendFile(getFile('science'));
});

server.get('/testimonials/', (req, res) => {
  res.sendFile(getFile('testimonials'));
});

server.get('/demo/', (req, res) => {
  res.sendFile(getFile('demo'));
});

server.get('/shop/', (req, res) => {
  res.sendFile(getFile('shop'));
});

server.get('/contact/', (req, res) => {
  res.sendFile(getFile('contact'));
});

server.get('/email-sent', (req, res) => {
  res.status(200).sendFile(getFile('email-sent'));
});

server.post('/send-email', (req, res) => {
/**
  console.log(req.body.email);
  console.log(req.body.name);
  console.log(req.body.subject);
  console.log(req.body.message);
  **/
  let googleRes = req.body['g-recaptcha-response'];
  let secret = process.env.SECRET;
  let url = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secret + "&response=" + googleRes //+ "&remoteip=" + req.connection.remoteAddress;
  if (!req.body['g-recaptcha-response']) {
    return res.sendFile(getFile('invalid-captcha'));
  } else {
    request.get({
      url: url,
      json: true,
      headers: {'User-Agent': 'request'}
    }, (error, response, data) => {
      if (error) {
        console.log('Error: ', error );
      } else if (response.statusCode !== 200) {
        console.log('Status: ', response.statusCode);
      } else {
        (!data.success)?
          res.status(403).sendFile(getFile('invalid-captcha')) :
          res.status(200).redirect('/email-sent');
      }
    });
  }

});

// 404 and 500 status error handling
server.use((req, res) => {
  res.status(400).sendFile("404.html", {"root": path.resolve(__dirname, 'public')});
});
server.use((error, req, res, next) => {
  res.status(500).sendFile("500.html", {"root": path.resolve(__dirname, 'public')});;
});

server.listen(server.get('port'), () => {
  console.log('so far everything ok at port ' + server.get('port'));
});

function getFile(pathname) {
  let publicPath = path.resolve(__dirname, 'public');
  let file = path.resolve(publicPath, pathname +'.html');
  return file;
}
