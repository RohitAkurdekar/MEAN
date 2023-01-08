

var axios = require('axios');
var mydata = JSON.stringify({
    "dataSource": "RohitAkurdekar",
    "database": "TestDB",
    "collection": "TestCollection",
    "projection":3
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qfawu/endpoint/data/v1/action/deleteOne',
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
