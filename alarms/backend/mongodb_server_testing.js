const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

console.log("client:",client);

client.connect().then(function(response){
    console.log("connected to mongodb successfully");
})
.catch(function(err){
    console.log("failed to connect to mongodb err:", err);
})
// success
// f

// console.log('Connected successfully to server');
// // Database Name
const dbName = 'alarmdb';
const db = client.db(dbName);
const alarmCollection = db.collection('alarms');

function insertAlarm(){
    const doc = {
        title: "Wake up alarm",
        time: "5am",
    }
    alarmCollection.insertOne(doc).then(function(result){
        console.log("successfully created alarm");
    })
    .catch(function(err){
        console.log("failed to create alarm", err);
    });
}

function getAlarmDoc(){
    // Query for a movie that has the title 'The Room'
    const query = { title: "Wake up alarm" };
    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    alarmCollection.findOne(query, {})
    .then(function(result){
        console.log("found a match ,result:", result);
    })
    .catch(function(err){
        console.log("failed to get alarm doc", err);
    })
}

getAlarmDoc()