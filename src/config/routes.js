exports.init = function(server) {
  server.log('Loading routes');
  require('./routes/airport')(server);
  //require('./routes/customers')(server);
 };