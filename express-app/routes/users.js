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

router.post('/', function(req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
})
module.exports = router;

