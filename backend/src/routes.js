const express = require('express');
const Todo = require('./models/Todo');

const router = express.Router();

router.get('/', async (req, res) => {
  // get todos
  const todos = await Todo.find({});

  // json reponse
  res.json(todos);
});

router.get('/add', async (req, res) => {
  // create a new todo
  await Todo.create({
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
