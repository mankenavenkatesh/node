var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connect to server
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("connected successfully");
    db.close();
});




