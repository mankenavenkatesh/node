#Experiments with mongodb and nodejs

Installing mongod server and starting
http://treehouse.github.io/installation-guides/mac/mongo-mac.html


Installing nodejs mongodb driver 
https://docs.mongodb.com/getting-started/node/client/
http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/

UI client for mongodb
https://robomongo.org/


Getting Started with MongoDB
https://docs.mongodb.com/getting-started/shell/


What is MongoDb?
1. open source document database
2. provides high performance, high availability, and automatic scaling.
3. MongoDb removes need for ORM to facilitate development.

Documents
1. A record in Mongodb is a document.
2. MongoDb documents are similar to JSON Objects.
3. Document is a datastructure composed of fields and value pairs.

Collections
1. MongoDB stores documents in collections.
2. Collections are analogous to tables in relational database.
3. Unlike table, however, a collection does not require its documents to have in same schema.
4. In Mongodb, document stored in collection should have unique _id field that acts as primary key.


Collations

1. Collation provides set of rules when comparing strings.
2. If MongoDb needs to store strings in sorted order, it has to compare the strings and sort them.
3. By Default Mongodb will do binary comparisions.
4. Instead of binary comparision, if we want to compare with last accent, then we have to define collation in mongodb.
5. You can specify default collation for collections and indexes when they are created.
6. or specify a collation for CRUD operations and aggregations.
7. Reference - http://mongodb.github.io/node-mongodb-native/2.2/tutorials/collations/




Commands

Reference
1. https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm
2. 