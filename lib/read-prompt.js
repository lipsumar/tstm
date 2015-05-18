/* jshint node:true  */
var read = require('read');


/**
 * Wrapper function to handle errors
 * @param  {object}   options
 * @param  {Function} callback
 * @return {void}
 */
module.exports = function readPrompt(options, callback){
	if(typeof options === 'string'){
		options = {prompt: options};
	}

	read(options, function(err, input){
		if(err){
			if(err.message==='canceled'){
				console.log('Cancelled by user');
				process.exit(0);
			}else{
				console.log('Unhandled error');
				process.exit(0);
			}
		}

		callback(input);
	});

};