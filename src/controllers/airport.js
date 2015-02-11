var Boom = require('boom'),
    Airport = require('../models/airport').airport; 
/** @module Controller for Customer Group */

/** get all airport details for the searchTxt */
exports.getAirport = function(request, reply) {
  var queryTxt = request.params.searchTxt;
  Airport.find({ $or: [{code: queryTxt}, {name: queryTxt}, {city: queryTxt}, {state: queryTxt}, {country: queryTxt}] }, function(err, airport) {
        if (!err) {
            reply(airport);
        } else {
            reply(Boom.badImplementation(err)); // 500 error
        }
    });
};