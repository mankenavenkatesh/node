var MongoClient = require("mongodb").MongoClient;
var assert=require("assert");

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(error, db){
    assert.equal(null, error);
    console.log("");
    db.collections("updates").insertOne({a:1},function(error, result){
        assert.equal(null, error);
        console.log("Document Inserted");
        assert.equal(1, result.insertedCount);

    });

});