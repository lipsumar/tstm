/* jshint node:true  */

/*
	A dead simple syncronous storage system
 */

var fs = require('fs');

var homeDirectory = '.';//process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
var path = homeDirectory+'/.tstm-persist/';


// make sure we have a home directory
if(!fs.existsSync(homeDirectory)){
	console.log('It appears you don’t have a home directiry. I need it to store stuff.');
	process.exit(0);
}

// make sure the dir exists
if (!fs.existsSync(path)) {
	fs.mkdirSync(path);
}


exports.set = function(key, value){
	var data = JSON.stringify(value);
	fs.writeFileSync(path+key, data);
};


exports.get = function(key){
	var data;
	try{
		data = fs.readFileSync(path+key);
	}catch(err){
		return undefined;
	}
	return JSON.parse(data);
};