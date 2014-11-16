var express = require('express');

router = express.Router();

//APIs
router.use('/testr', require('./testr')); //test.r

//Logs API requests.
router.use(function(req,res,next){
	console.log('API: %s %s %s', req.method, req.url, req.path);
	next();
});

router.get('/', function(req,res,next){
		res.send("api = {Hej! There's not much to see here..}");
		next();
});

module.exports = router;