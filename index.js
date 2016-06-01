var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;
api.get('/',function(req,res,next){
	res.send('Hello world');
});

var port = process.env.PORT || DEFAULT_PORT
console.log('server start port '+port);
api.listen(port);

module.exports = api;