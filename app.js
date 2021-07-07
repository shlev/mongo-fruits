const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';

const dbName = 'fruitsDB';
// const dbName = 'peoplesDB';

mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
     name: {
        type: String,
        required: [true, "Please check your data entry no name specified" ]
     },
    score: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const peopleSchema = new mongoose.Schema({
     name: {
        type: String,
        required: [true, "Please check your data entry no name specified" ]
     },
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("People", peopleSchema);

// const john = new People({ name: "John", age: 37})
// const strew = new Fruit({ name: "Strawberry", score: 9, review: "Juicy and Red"})

// strew.save();

// Person.updateOne(
//     {_id: "60e56e8253f5cad037b6fa6b" },
//     {favoriteFruit: strew},
//     function(err) {
//         if ( err ) {
//             console.log(err);
//         } else {
//             console.log("WOOHOO updated John Strew");
//         }
//     });


// const apple = new Fruit({
//             score: 8,
//             review: "Sneaky one!"
//         });

// const kiwi = new Fruit({
//             name: "Kiwi",
//             score: 8,
//             review: "The best fruit!"
//         });


// const orange = new Fruit({
//             name: "Orange",
//             score: 4,
//             review: "Too sour for me"
//         });

// const banana = new Fruit({
//             name: "Banana",
//             score: 3,
//             review: "Weird texture"
//         });

// Fruit.insertMany([apple], function(err) {
//     if ( err ) {
//         console.log(err);
//     } else {
//         mongoose.connection.close()
//         console.log("Successfully saved all the fruits to FruitDB");
//     }
// })



// const insertDocuments = function(db, callback) {
//     const collection = db.collection('fruits');

//     collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great Fruit"
//         }, 
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kinda sour Fruit"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Good Stuff"
//         }
//     ], 
//         function (err, result) {
//             assert.equal(err, null);
//             assert.equal(3, result.result.n);
//             assert.equal(3, result.ops.length);
//             console.log("Inserted 3 documents into the collection");
//             callback(result);
//         })
// }

// Fruit.find({}, function (err, fruits) {
//     if ( err ) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

// Fruit.updateOne({_id: "60e5534e037629ac0ae9a419"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully updated");
//     }
// });

// Fruit.deleteOne({ name: "Orang"}, function(err) {
//     if ( err) {
//         console.log(err);
//     } else {
//         console.log("Deleted kiwi's")
//     }

//     mongoose.connection.close();
// })




// const findDocuments = function(db, callback) {
//     //Get The document collection
//     const collection = db.collection('fruits');
//     collection.find({}).toArray(function (err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits);
//         callback(fruits);
//     })
// }