const express = require('express');
const path = require('path');
const server = express();

server.set('port', process.env.PORT || 3000 )

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
/**  let publicPath = path.resolve(__dirname, 'public');
  let indexFile = path.resolve(publicPath, 'index.html')
  res.sendFile(indexFile);
  **/
  res.sendFile(pathFile('index'))
});

server.get('/science/', (req, res) => {
  res.sendFile(pathFile('science'))
});

server.get('/testimonials/', (req, res) => {
  res.sendFile(pathFile('testimonials'))
});

server.get('/demo/', (req, res) => {
  res.sendFile(pathFile('demo'))
});

server.get('/shop/', (req, res) => {
  res.sendFile(pathFile('shop'))
});

server.get('/contact/', (req, res) => {
  res.sendFile(pathFile('contact'))
});

server.get('*', (req, res) => {
  res.status(404).sendFile("404.html", {"root": path.resolve(__dirname, 'public')});
});

server.listen(server.get('port'), () => {
  console.log('so far everything ok at port ' + server.get('port'));
});

function pathFile(pathname) {
  let publicPath = path.resolve(__dirname, 'public');
  let file = path.resolve(publicPath, pathname +'.html');
  return file;
}
