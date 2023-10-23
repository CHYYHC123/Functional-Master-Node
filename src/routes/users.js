var express = require('express');
var router = express.Router();

var { userLogin, userInfo } = require('../services/user');

router.get('/user/info', function (req, res, next) {
  const name = req.header.Authorization;
  console.log('name1', name);
  const messages = userInfo(name);
  res.send(messages);
});

router.post('/auth/login', function (req, res, next) {
  const { name, password } = req.body;
  const messages = userLogin(name, password);
  res.send(messages);
});

module.exports = router;
