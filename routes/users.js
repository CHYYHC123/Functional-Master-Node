var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function (req, res, next) {
  let obj = {
    name: 'chy',
    age: 18
  };
  res.send(obj);
});

module.exports = router;
