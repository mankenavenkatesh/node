// Index Operations. http://mongodb.github.io/node-mongodb-native/2.2/tutorials/create-indexes/

var MongoClient=require("mongodb").MongoClient;
var assert=require("assert");
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(error, db){
    assert.equal(null, error);
    console.log("connected to db");
    createIndex(db, function(result){
        console.log("Index Created - "+result);
    });
});

var createIndex = function(db, callback){
    db.createCollection("contacts", function(error, results){
            assert.equal(null, error);
            var collection=db.collection('contacts');
            // Create Index.
            collection.createIndex({dateOfBirth : 1}, function(error, result){
                assert.equal(null, error);
                callback(result);
            });
    });
}


