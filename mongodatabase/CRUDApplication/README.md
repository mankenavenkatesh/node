Simple list application 

What are we building?
1. Simple list application that allows you to keep track of things within a list.


How to Start?
1. npm run dev 
2. http://localhost:3000

Building the server.
1. Create server.js file and initialize with express module.
2. use express module to listen on port 3000.
3. Make a get endpoint, which looks for url which matches / and return an html page using response.sendFile()

Using NodeMon
1. npm install nodemon --save-dev
2. We are using -dev above as this will be using only in development. So in package.json, it will be created as devdependency.
3. we can run with nodemon server.js.
4. If anyfiles are changes, nodemon will automatically take the changes.


Creating custom scripts.
1. in package.json file, add scripts field. 
2. For Eg. {
  // ...
  "scripts": {
    "dev": "nodemon server.js"
  }
  // ...
}
3. Above script can be run using npm run dev. It will execute the command present in that script. 



Redirecting response to separate URL.
1. USE response.redirect


Use Mongo Api find method on collection to get All the documents in the collections.



How to get Input values using express?
1. npm install body-parser --save
2. call urlencoded method. It will get the form fields and adds them to the request body.

Mongo Database
1. npm install mongodb --save
2. Connect to mongodb using MongoClient Library.
3. 

Use Template Engine to dynamically create html from the data.
1.  Jade, Embedded JavaScript and Nunjucks.
2. npm install ejs --save


Reference
https://zellwk.com/blog/crud-express-mongodb/
