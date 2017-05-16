const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const MongoClient = require('mongodb').MongoClient
config=require('./config/index.js')
app.set('view engine', 'ejs')


// urlencoded method will tell bodyparser to extract data from form element and add them to body property in the request object.
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    db.collection('quotes').find().toArray((err, results)=>{
        if(err) return console.log(err)
        console.log(results)
        res.render('index.ejs', {quotes:results})    
    })    
})

app.post("/quotes", (req, res)=>{
    console.log(req.body)
    db.collection("quotes").save(req.body, (err, result)=>{
        if(err) return console.log(err)
        console.log("saved to db")
         res.redirect('/allquotes')
    })
})

var db
var hostname=config.hostname
var database=config.mongo.db
console.log(hostname)
console.log(database)

var linkToMongoDb = 'mongodb://'+hostname+':27017/'+database
MongoClient.connect(linkToMongoDb, (err, database)=>{
   if(err) return console.log(err)
    db=database
    app.listen(3000, function(){
        console.log('listenting on 3000')
    })
});
