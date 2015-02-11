var Hapi = require('hapi'),
	config = require('./src/config/config'),
	routes = require('./src/config/routes');

var server = new Hapi.Server();

server.connection({
	port: config.server.port,
	host: config.server.host
});

module.exports = server;

require('./src/config/plugins');
server.route(routes);;
server.start(function() {
	server.log("Flights-Server started at : "+server.info.uri);
});