/* 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rakurdekar:Rohit1996@rohitakurdekar.gcqicqv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */


var axios = require('axios');
var mydata = JSON.stringify({
    "dataSource": "RohitAkurdekar",
    "database": "TestDB",
    "collection": "TestCollection",
    "projection": {
    //   "document":{"_id":3}
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qfawu/endpoint/data/v1/action/find',            // findOne
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'f6NOXo00Voi8xzMNtEJ1AYpadd4VkqStBJAl5HgstDHHCYETjj6OrwDsWAnRX0gy',
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
