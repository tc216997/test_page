const http = require('http');
const express = require('express');
const path = require('path');
let server = express();

server.set('port', process.env.PORT || 3000 )

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
  let publicPath = path.resolve(__dirname, 'public');
  let indexFile = path.resolve(publicPath, 'index.html')
  res.sendFile(indexFile);
});

server.listen(server.get('port'), () => {
  console.log('so far everything ok at port ' + server.get('port'));
});
