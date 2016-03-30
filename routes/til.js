var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"},{slug:"da da da",body:"dobedobedobe"}]
/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
/* the create database router*/
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'build data here', entries:entries});
});
/*when you hit submit*/
router.post('/create', function(req, res, next) {
  console.log(req.param);
  entries.push(req.param);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
module.exports = router;
