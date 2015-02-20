var mongoose = require('mongoose');
var db = require('./../config/db');
var config = require('./../config/config');

var airportData = require('./../data/airportData.json');
var airport = require('./../models/airport');
var Airport = mongoose.model('airport');

var userData = require('./../data/userData.json');
var user = require('./../models/user');
var User = mongoose.model('user');


//Change it to map
var modelArray = [Airport, User];
var jsonFilesArray = [airportData, userData];


loadJsonDataCollection = function(fileCount) {
	if(fileCount < jsonFilesArray.length) {

		model = modelArray[fileCount];
		jsonData = jsonFilesArray[fileCount];
		model.find().remove(function(err) {
			if(err) {
				console.log("failed to remove document");
				return;
			}
			console.log("Removing data of "+fileCount);
			loadRecordData(0, fileCount);	
		});
	} else {
		console.log("finished saving all");
  		gracefulExit();
	}
}


loadRecordData = function(recordCount, fileCount) {
	if(recordCount < jsonData.length ) {
    	saveRecord( jsonData[recordCount], function(err) {
	      if( err ) {
	        console.log('error: '+err);
	      }
	      else {
	        loadRecordData(recordCount+1, fileCount);
	      }
    	})
  	} else {
  		console.log("finished saving...."+fileCount);
  		loadJsonDataCollection(fileCount+1);
  	}
}


saveRecord = function(record, next) {
	new  model(record).save(function(err) {
		if(err) {
			throw err;
		} else {
			next();
		}
	});
}

var gracefulExit = function() {
mongoose.connection.close(function () {
	console.log('Mongoose default connection with DB :' + config.database.db + ' is disconnected. ');
	process.exit(0);
});
}
 
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit); 

start = function(){
    mongoose.connect('mongodb://'+config.database.host+'/'+config.database.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error opening database '+config.database.db));
    db.once('open', function(callback) {
        console.log('Connection with database succeeded');
    });
};
start();
loadJsonDataCollection(0);

