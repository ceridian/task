var path = require('path');
var async = require('async');
var request = require('request');
var fs = require('fs');
var io = require(path.join(__dirname, '..', 'lib', 'io.js'));
var models = require(path.join(__dirname, '..', 'models'));

exports.log = function(obj, fun, desc, broad){
	console.log(obj, fun, desc);
	if(broad){
		io.broadcast('notice', obj);
	}
};