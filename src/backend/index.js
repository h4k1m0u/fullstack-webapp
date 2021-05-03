const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

// read environment variable from .env file
require('dotenv').config();

// connect to mongodb database (create if non-existant)
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log(`${error}: Cannot connect to database, make sure Mongod service is running`);
      process.exit(1);
    }
  });

// rest api
const app = express();
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
