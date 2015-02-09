var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var airportSchema = new Schema({
	code : {type: String, required: true, trim: true},
	name : {type: String, required: true, trim: true},
	city : {type: String, required: true, trim: true},
	state : {type: String, required: true, trim: true},
	country : {type: String, required: true, trim: true}
});

var airport = Mongoose.model('airport', airportSchema);

exports.airport  = airport;
	
