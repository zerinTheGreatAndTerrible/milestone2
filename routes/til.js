var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"},{slug:"da da da",body:"dobedobedobe"}];
router.get('/',function(req,res,next)){
 rew.render('todayILearned',{title: 'today I learned'})
});

module.exports = router;
