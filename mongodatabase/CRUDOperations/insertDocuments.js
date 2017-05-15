http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/

var MongoClient=require("mongodb").MongoClient;
var assert=require("assert");

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(error, db){
    assert.equal(null,error);
      db.collection("inserts").insertOne({a:1}, function(err, result){
          assert.equal(null, err);
          assert.equal(1, result.insertedCount);
          db.close();
      });
});