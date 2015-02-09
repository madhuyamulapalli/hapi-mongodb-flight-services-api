var config = require('./config');
var server = require(config.rootpath+'/server');
var Good = require('good');

var goodOpts = {
	reporters: [{
		reporter: require('good-console'),
		args:[{log: '*', response: '*'}]
	}]
};

server.register([{
		register: Good,
		options: goodOpts
	}], function(err) {
		if(err) {
			server.log("failed to load plugin: "+err);
			throw err;
		}
});