var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/routes/index.html', function(req, res, next) {
  res.render('index', { title: 'Today I Learned' });
});

module.exports = router;
