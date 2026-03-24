const express = require('express');
const router = express.Router();

const users = [
  {
    id: 1,
    name: "Темнякова Анна"
  },
  {
    id: 2,
    name: "Мартемьянова Вера"
  }
];

router.get('/', function(req, res, next) {
  res.send({ items: users });
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404);
  }
  res.json(user);
})

router.post('/', function(req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
})
module.exports = router;

