/**
 * Dependencies.
 */
var ItinerariesController = require('../controllers/itineraries');

module.exports =  exports = function(server) {
    console.log('Loading Itineraries routes');
    exports.getItineraries(server);
};



/**
 * GET /Itineraries/{searchTxt}
 * Gets the Itineraries based upon the {searchTxt} parameter.
 *
 * @param server
 */
exports.getItineraries = function(server) {

    server.route({
        method: 'POST',
        path: '/api/itineraries',
        config: {
            handler: ItinerariesController.getItineraries
        }
    });
};

