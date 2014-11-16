var testr= require('./api')('testr');

testr.get('/', function(req,res, next){
	res.send("Welcome to the test.r API. To test a string, api/testr/:string:");
	next();
});


testr.get('/:string', function(req,res, next){
	res.send(req.params.string.toUpperCase());
	next();
});

module.exports = testr;