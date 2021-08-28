const express = require('express');
const http = require('http');

const app = express();

// template engine
app.set('view engine', 'pug');
app.set('views', './templates');

// serve static css/js files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  // get todos by http request to server
  http.get('http://localhost:8000', (message) => {
    let data = '';
    message.on('data', (buffer) => {
      data += buffer;
    });

    message.on('end', () => {
      const dataObj = JSON.parse(data);

      res.render('index', { todo: dataObj[0] });
    });
  });
});

// start server
const port = 9000;
app.listen(port, () => {
  console.log(`Client running on port ${port}`);
});
