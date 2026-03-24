const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
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
  
  res.send({
    items: users
  });
});

module.exports = router;