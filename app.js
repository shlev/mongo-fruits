const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url, ({ useUnifiedTopology: true }));

client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    // insertDocuments(db, function() {
    //         client.close();
    // })

    findDocuments(db, function() {
        client.close();
    })

    
})

const insertDocuments = function(db, callback) {
    const collection = db.collection('fruits');

    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great Fruit"
        }, 
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour Fruit"
        },
        {
            name: "Banana",
            score: 9,
            review: "Good Stuff"
        }
    ], 
        function (err, result) {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        })
}

const findDocuments = function(db, callback) {
    //Get The document collection
    const collection = db.collection('fruits');
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    })
}

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri =
//   "mongodb://localhost:27017/"
// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS:5000
// });
// async function run() {
//   try {
//     // Connect the client to the server
//     console.log("Attemp to connect DB")
//     await client.connect();
    
//     // Establish and verify connection
//     await client.db("fruitsDB").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);