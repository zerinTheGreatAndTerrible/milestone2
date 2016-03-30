var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",response:"that I am awesome"}]
/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('todayILearned', { title: 'Today I Learned', entries:todayILearned});
});

module.exports = router;
