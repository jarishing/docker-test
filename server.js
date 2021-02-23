'use strict';

const express = require('express');
const helmet = require("helmet");
// const fs = require('fs');
// const https = require('https');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// const credentials = {
//   key: fs.readFileSync(__dirname + '/ssl/key.pem'),
//   cert: fs.readFileSync(__dirname + '/ssl/cert.pem')
// };


// App
const app = express();
app.use(helmet());
app.get('/', (req, res) => {
  res.send('Hello World');
});

//https
// var httpsServer = https.createServer(credentials, app);

// httpsServer.listen(PORT, () => {
//   console.log("Https server listing on port : " + PORT)
// });


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);