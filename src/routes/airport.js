/**
 * Dependencies.
 */
var AirportController = require('../controllers/airport');

module.exports =  exports = function(server) {
    console.log('Loading Airport routes');
    exports.getAirports(server);
};



/**
 * GET /airport/{searchTxt}
 * Gets the Airports based upon the {searchTxt} parameter.
 *
 * @param server
 */
exports.getAirports = function(server) {

    server.route({
        method: 'GET',
        path: '/api/airport/{searchTxt}',
        config: {
            handler: AirportController.getAirport
        }
    })
};
