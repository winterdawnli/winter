var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.json({
  	name:'xiaoming',
  	height:177,
  	friend:['a','b','c']



  });
});

module.exports = router;
