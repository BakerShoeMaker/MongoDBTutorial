const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
var db;

const uri = "mongodb://dbAdminBakerShoeMaker:6352641Football@ds133796.mlab.com:33796/tutuorialtest_db";

MongoClient.connect(uri, (err, database) => {
    if(err) return console.log("There is problem: ", err);
    db = database;

    app.listen(port, ()=> {
        console.log('listening on: ' +port);
    });
});


app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');

});

app.post('/quotes', (req, res)=>{
    db.collection('quotes').save(req.body, (err,result) =>{
        if(err) return console.log(err);
        console.log('saved to database');
        res.redirect('/');

    });
});

