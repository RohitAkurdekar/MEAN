

var axios = require('axios');
var mydata = JSON.stringify({
    "dataSource": "RohitAkurdekar",
    "database": "TestDB",
    "collection": "TestCollection",
    "$tag": {
        "_id":3,
        "$set":{
            "temp":100,
            "Humid":100
        }
    }
});
            
var config = {
    method: 'POST',
    url: 'https://data.mongodb-api.com/app/data-qfawu/endpoint/data/v1/action/updateOne',
    headers: {
      'Content-Type': 'application/ejson',
      'Access-Control-Request-Headers': '*',
      'api-key': 'f6NOXo00Voi8xzMNtEJ1AYpadd4VkqStBJAl5HgstDHHCYETjj6OrwDsWAnRX0gy',
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
