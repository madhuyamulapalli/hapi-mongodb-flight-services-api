var itineraries = require('../handlers/itineraries');
     
/** @module Controller for Itineraries */

/** get all Itineraries from QPX Express API for the search request */
exports.getItineraries = function(request, reply) {

    return itineraries.getItineraries(request, reply);
};



