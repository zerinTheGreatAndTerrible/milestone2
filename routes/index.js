var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todayILearned', { title: 'Today I Learned' });
});

module.exports = router;
