const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

// read environment variable from .env file
require('dotenv').config();

// connect to mongodb database (create if non-existant)
console.log('Process env:');
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

// rest api
const app = express();
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
