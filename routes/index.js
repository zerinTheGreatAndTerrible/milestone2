var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(''index', { <h1><%= title %></h1>

<p>Welcome to <%= title %></p>
<!DOCTYPE html>

<html lang="en">

<head>

  <title>CS2610</title>
</head>
<body>


<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

a:hover:not(.active) {
    background-color: #111;
}

.active {
background-color:#4CAF50;
}
</style>
<ul>
  
<li><a href="index.html">Home</a></li>
 
 <li><a href="todayILearned1.html">today I learned</a></li>
 

</ul>

Welcome to zerin's stuff<br> 
do you want to hear what I learned today
</body>

</html> });
});

module.exports = router;
