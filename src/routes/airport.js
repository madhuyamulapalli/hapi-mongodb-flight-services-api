/**
 * Dependencies.
 */
var AirportController = require('../controllers/airport');

module.exports =  exports = function(server) {
    console.log('Loading Airport routes');
    exports.show(server);
};



/**
 * GET /airport/{searchTxt}
 * Gets the Airports based upon the {searchTxt} parameter.
 *
 * @param server
 */
exports.show = function(server) {

    server.route({
        method: 'GET',
        path: '/airport/{searchTxt}',
        config: {
            handler: AirportController.getAirport
        }
    })
};