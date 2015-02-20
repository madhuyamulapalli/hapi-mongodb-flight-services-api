var Boom = require('boom'),
    Airport = require('../models/airport').airport; 
/** @module Controller for Airport */

/** get all airport details for the searchTxt */
exports.getAirport = function(request, reply) {
  var queryTxt = new RegExp(request.params.searchTxt, 'i');
  Airport.find({ $or: [{code: queryTxt}, {name: queryTxt}, {city: queryTxt}, {state: queryTxt}, {country: queryTxt}] }, function(err, airports) {
        if (!err) {
            console.log("Query text for airports: "+queryTxt);
            reply(airports);
        } else {
            reply(Boom.badImplementation(err)); // 500 error
        }
    });
};