const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
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

  console.log(req.body.email);
  console.log(req.body.name);
  console.log(req.body.subject);
  console.log(req.body.message);
  res.status(200).redirect('/email-sent');

});

// 404 and 500 status error handling
server.use((req, res) => {
  res.status(400).sendFile("404.html", {"root": path.resolve(__dirname, 'public')});
});
server.use((error, req, res, next) => {
  res.status(500).send('uh oh something went wrong');
});

server.listen(server.get('port'), () => {
  console.log('so far everything ok at port ' + server.get('port'));
});

function getFile(pathname) {
  let publicPath = path.resolve(__dirname, 'public');
  let file = path.resolve(publicPath, pathname +'.html');
  return file;
}
