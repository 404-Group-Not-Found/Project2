import { FORMERR } from "dns";

var keys = require("./keys.js");

var zomato = require('zomato');

var client = zomato.createClient({
    userKey: keys.zomatoKey
});

var Zomato = {

    getCategories: function () {
        client.getCategories(null, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getCities: function (query, latitude, longitude, city_ids, count) {
        client.getCities({
            q: query, //query by city name 
            lat: latitude, //latitude 
            lon: longitude, //longitude 
            city_ids: city_ids, //comma separated city_ids value 
            count: count // number of maximum result to display 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getCollections: function (city_ids, latitude, longitude, count) {
        client.getCollections({
            city_id: city_ids, //id of the city for which collections are needed 
            lat: latitude, //latitude 
            lon: longitude, //longitude 
            count: count // number of maximum result to display 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getCuisines: function (city_ids, latitude, longitude) {
        client.getCuisines({
            city_id: city_ids, //id of the city for which collections are needed 
            lat: latitude, //latitude 
            lon: longitude //longitude 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getEstablishments: function (city_id, latitude, longitude) {
        client.getEstablishments({
            city_id: city_id, //id of the city for which collections are needed 
            lat: latitude, //latitude 
            lon: longitude //longitude 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getGeocode: function (latitude, longitude) {
        client.getGeocode({
            lat: latitude, //latitude 
            lon: longitude //longitude 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getLocationDetails: function (entity_id, entity_type) {
        client.getLocationDetails({
            entity_id: entity_id, //location id obtained from locations api 
            entity_type: entity_type //location type obtained from locations api 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getLocations: function (query, latitude, longitude, count) {
        client.getLocations({
            query: query, // suggestion for location name 
            lat: latitude, //latitude 
            lon: longitude, //longitude 
            count: count // number of maximum result to fetch 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getDailyMenu: function (restaurant_id) {
        client.getDailyMenu({
            res_id: restaurant_id // id of restaurant whose details are requested 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getRestaurant: function (restaurant_id) {
        client.getRestaurant({
            res_id: restaurant_id // id of restaurant whose details are requested 
        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    getReviews: function (restaurant_id, start, count) {
        client.getReviews({
            res_id: restaurant_id, // id of restaurant whose details are requested 
            start: start, //fetch results after this offset (Integer) 
            count: count, //max number of results to retrieve

        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    },

    search: function (entity_id, entity_type, query, latitude, longitude, count, start, radius, cuisines, establishment_type, collection_id, category, sort, order) {
        client.search({
            entity_id: entity_id, //location id 
            entity_type: entity_type, // location type (city,subzone,zone , landmark, metro,group) 
            q: query, //Search Keyword 
            lat: latitude, //latitude 
            lon: longitude, //longitude 
            count: count, // number of maximum result to display 
            start: start, //fetch results after offset 
            radius: radius, //radius around (lat,lon); to define search area, defined in meters(M) 
            cuisines: cuisines, //list of cuisine id's separated by comma 
            establishment_type: establishment_type, //estblishment id obtained from establishments call 
            collection_id: collection_id, //collection id obtained from collections call 
            category: category, //	category ids obtained from categories call 
            sort: sort, //choose any one out of these available choices 
            order: order //	used with 'sort' parameter to define ascending(asc )/ descending(desc) 

        }, function (err, result) {
            if (!err) {
                console.log(JSON.parse(result));
            } else {
                console.log(err);
            }
        });
    }
}
module.exports = Zomato;