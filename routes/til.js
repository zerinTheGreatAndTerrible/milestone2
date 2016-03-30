var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"}]
/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
/* the create database router*/
router.get('/add', function(req, res, next) {
  console.log(req.body);
  entries.push(req.body);
  res.render('add', { title: 'build data here', entries:entries});
});

module.exports = router;
