var Hapi = require('hapi'),
	config = require('./src/config/config'),
    routes = require('./src/config/routes');


var server = new Hapi.Server();
server.connection({
    host: config.server.host,
	port: config.server.port,
    routes: {
        cors: {
            methods : ['GET', 'HEAD', 'POST', 'PUT', 'OPTIONS'],
            headers : ['Authorization', 'Content-type', 'If-None-Match','Access-Control-Allow-Origin']
        }
    }
});

db = require('./src/config/db')(server),
db.startup();

routes.init(server);

server.start(function() {
	server.log("Flights-Server started at : "+server.info.uri);
});


module.exports = server;
