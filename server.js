const http = require('http');
const express = require('express');
const path = require('path');
let server = express();

server.use('/', express.static(path.resolve(__dirname, 'public')))

server.listen(3000, () => {
  console.log('server running at port 3000');
});
