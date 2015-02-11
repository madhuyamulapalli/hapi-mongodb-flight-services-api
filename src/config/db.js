var Mongoose = require('mongoose');
var config = require('./config');

module.exports = exports = function(server){

    return {
        startup: function() {
            Mongoose.connect('mongodb://'+config.database.host+'/'+config.database.db);
            var db = Mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error opening database '+config.database.db));
            db.once('open', function(callback) {
                server.log('Connection with database succeeded');
            });
        },

        closeDB: function () {
            mongoose.disconnect();
        }
    };
}
