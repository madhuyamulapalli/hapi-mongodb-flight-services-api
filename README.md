# hapi-mongodb-flight-services-api

This is a server api application written in Hapijs (nodejs) to search Flights using Google QPX flights api. 
MongoDB is the NOSQL database being used and mongoose is the npm driver to connect mongodb

Steps to Install:

1. Make sure node and npm are installed.
	http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm

2. Install mongodb
	http://docs.mongodb.org/manual/installation/

	after successful installation, always 
	run mongod 
	to make sure database is up for the application


3. run npm install at the root directory of the project folder

4. Register with google developers api to get api key for qpx express
	https://developers.google.com/qpx-express/

	once regsitered update hapi-mongodb-flight-services-api/src/config/config.js file

	key value, replace QPX_API_KEY_GOES_HERE with the google developer api key

	qpx : {
		endpoint : ' https://www.googleapis.com/qpxExpress/v1/trips',
		key : 'QPX_API_KEY_GOES_HERE',
		count: 20,
		search: '/search'
	}

	For testing purposes with out QPX API Key, i have created tripSearchData.json which has json result from QPX search.
	Just go to hapi-mongodb-flight-services-api/src/handlers/itineraries.js file
	and comment the following lines
		req.post(
		config.qpx.endpoint+config.qpx.search+'?key='+config.qpx.key,
             {headers: {'content-type': 'application/json'},
             body: JSON.stringify(requestData) },
        function(err, res, data) {
	       	if (!err) {
	            reply(data);
	        } else {
	            reply(Boom.badImplementation(err)); // 500 error
	        }
		});

	and uncomment the reply(tripData);

	This is useful becuase QPX Express API has a daily 50 requests limit for free and then its paid.
	So when working on UI part, fake QPX result helps not to consume the free limit.

	Please get your own QPX API

5. 
	run node hapi-mongodb-flight-services-api/src/scripts/initialDBLoad.js
	This script takes care of creating flights db and inserting airports info

6. start server at the root of the project by using
   node server 


Flight Search API's:

1. access the airport api from browser or POSTMAN 
	It lists all the airports with character passed http://localhost:3000/api/airport/{}, i am using this for auto fill in my front end.
	This is a HTTP GET
		Example:
		http://localhost:3000/api/airport/a
		lists all the airports which has letter 'a'

2. To get itineraries for the flight search.
	This is HTTP POST.
	Example:
	To Test in POSTMAN, give url as
	http://localhost:3000/api/itineraries

	and form data key value pairs as below

	farePrefrence: "Economy",
	fromAirport: "ATL",
	fromDate: "2015-03-25",
	passengers: "1",
	toAirport: "ANC",
	toDate: "2015-03-31",
	travelType: "Round-trip"

	Which returns the flight info from QPX API which called in hapijs by /api/itineraries






