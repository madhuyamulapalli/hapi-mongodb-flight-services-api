exports.init = function(server) {
  console.log('Loading routes');
  require('../routes/airport')(server);
  require('../routes/itineraries')(server);
 };