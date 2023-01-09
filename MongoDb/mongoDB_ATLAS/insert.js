

var axios = require('axios');
var mydata = JSON.stringify({
    "dataSource": "<Your_User_Access_Name>",
    "database": "<Your_Database_name>",
    "collection": "<Your_collection_name>",
    "document": {
      "_id":"<Unique_ID>",
      "field1": "parameter",
      "fieldN": "parameter",
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/<Your_data>/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/ejson',
      'Access-Control-Request-Headers': '*',
      'api-key': '<Your_API_key>',
    },
    data: mydata
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
