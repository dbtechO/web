var express = require('express');

router = express.Router();

router.get('/testr/', function(req,res, next){
	res.send("Welcome to the test.r API. To test a string, api/testr/:string:");
	next();
});


router.get('/testr/:string', function(req,res, next){
	res.send(req.params.string.toUpperCase());
	next();
});



module.exports = router;