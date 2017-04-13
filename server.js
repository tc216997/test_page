const http = require('http');
const express = require('express');
const path = require('path');
let server = express();

server.use('/', express.static(path.resolve(__dirname, 'public')))

server.listen(5000, () => {
  console.log('so far everything ok at port 5000');
});
