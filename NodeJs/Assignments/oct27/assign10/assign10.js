// import json file
let my_file = require("./customer.json");

// loop through every array elements
for(cust_det of my_file.cust_details)
{
    console.log("\n----------------------------------------")
    console.log("Cust name: ",String(cust_det.cust_name),
                "\nContact det: ",String(cust_det.ph_no));
}