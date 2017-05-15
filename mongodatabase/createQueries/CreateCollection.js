var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connect to server
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("connected successfully");
    createCollection(db, function(){
        db.close();
    });

});

var createCollection=function(db, callback){

    db.createCollection("contacts",
        {'validator': {'$or':[
            {'phone':{'$type':"string"}},
            {'email':{'$regex':/@mongodb\.com$/}},
            {'status':{'$in':["Unknown","Incomplete"]}}
        ]}},
        function(error, results){
            assert.equal(null, error);
            console.log("Collections Created");
            callback();
        });
}









