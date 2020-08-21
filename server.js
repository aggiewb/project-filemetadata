'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

const multer = require('multer');
const upload = multer();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (request, response) => {
     response.sendFile(`${process.cwd()}/views/index.html`);
});

app.get('/hello', (request, response) => {
  response.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), (request, response) => {
  const file = request.file;
  response.json({file: file.originalname, size: file.size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});