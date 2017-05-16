http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/

var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var col = db.collection('find');
  // Insert a single document
  col.insertMany([{a:1}, {a:2}, {a:1},{a:3}], function(err, r) {
    assert.equal(null, err);
    assert.equal(4, r.insertedCount);

    // Get first  document that match the query
    col.findOne({a:1}, {}).limit(2).toArray(function(err, docs) {
      assert.equal(null, err);
      assert.equal(2, docs.length);
        console.log(docs)
      db.close();
    });
  });
});