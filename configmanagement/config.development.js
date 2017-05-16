var config = require('./config.global');
 
config.env = 'dev';
config.hostname = 'localhost';
config.mongo.db = 'quotes';
 
module.exports = config;