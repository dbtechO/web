var express = require('express');
//Creates the convenient API rapper for future node apps.
module.exports = function(name){
	return{
		name: name,
		router: express.Router(),
		get: function(dir, func) {
			console.log("/" + name + "/")
			return router.get("/" + name + dir, func);
		},
		use: function(dir, func){
			return router.use("/" + name + dir, func);
		}
	}
}