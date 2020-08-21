'use strict';
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (request, response) => {
     response.sendFile(`${process.cwd()}/views/index.html`);
});

app.get('/hello',  (request, response) => {
  response.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});