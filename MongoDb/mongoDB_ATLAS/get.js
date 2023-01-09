
var axios = require('axios');
var mydata = JSON.stringify({
    "dataSource": "<Your_User_Access_Name>",
    "database": "<Your_Database_name>",
    "collection": "<Your_collection_name>",
    "projection": {

    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qfawu/endpoint/data/v1/action/find',            // findOne
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '<Your_API_key>',
    },
    data: mydata
};
            
axios(config)
    .then(function (response) {
        console.log((response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
