var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"},{slug:"da da da",body:"dobedobedobe"}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Today I Learned' });
});
router.get('/til/',function(req,res,next)){
 rew.render('todayILearned',{title: 'today I learned',entries:entries})
});
module.exports = router;
