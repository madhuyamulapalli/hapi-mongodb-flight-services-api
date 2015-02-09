var Hapi = require('hapi'),
	config = require('./src/config/config');

var server = new Hapi.Server();

server.connection({
	port: config.server.port,
	host: config.server.host
});

module.exports = server;

require('./src/config/plugins');


server.start(function() {
	server.log("Flights-Server started at : "+server.info.uri);
});