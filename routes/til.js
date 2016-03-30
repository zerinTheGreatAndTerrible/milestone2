var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",response:"that I am awesome"}]
/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
/* the create database router*/
router.get('/', function(req, res, next) {
  console.log(req.body);
  entries.push(req.body);
  console.log(entries);
  res.render('CreateData', { title: 'build data here', entries:entries});
});

module.exports = router;
