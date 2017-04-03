var path = require('path');
//var l = require(path.join(__dirname, '..', 'lib', 'lib.js'));

module.exports = function(app){

}


function response(err, result, req, res){
	if(err){
		var obj = {};
		obj.type = 'error';
		obj.alert = err;
		l.log(obj, null, null, true);
		res.status(500).end();
	}else{
		res.status(200).json(result);
	}
}