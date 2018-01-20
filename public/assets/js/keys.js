var zomato = require('zomato');

var client = zomato.createClient({
    userKey: '1a9d3c7e82a5c874f2f569af9f7c7d3b', //as obtained from [Zomato API](https://developers.zomato.com/apis) 
});

module.exports = client;