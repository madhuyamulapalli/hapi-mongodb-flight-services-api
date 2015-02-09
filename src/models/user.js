var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
	userId : {type: String, required: true, trim: true},
	password : {type: String, required: true, trim: true}
});

var user = Mongoose.model('user', userSchema);

exports.user  = user;