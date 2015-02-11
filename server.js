var Hapi = require('hapi'),
	config = require('./src/config/config'),
    routes = require('./src/config/routes');

var server = new Hapi.Server();

server.connection({
	port: config.server.port,
	host: config.server.host
});

db = require('./src/config/db')(server),
db.startup();
routes.init(server);

server.start(function() {
	server.log("Flights-Server started at : "+server.info.uri);
});


module.exports = server;
