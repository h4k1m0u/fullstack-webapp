const express = require('express');
const Todo = require('./models/Todo');

const router = express.Router();
router.get('/', (req, res) => {
  // create a new todo
  Todo.create({
    title: 'Todo 1',
    date: Date(),
  });

  // json reponse
  res.json({
    response: 'Todo saved successfully',
  });
});

// export router to index.js
module.exports = router;
