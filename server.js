const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');

});
app.post('/quotes', (req, res)=>{

    console.log("You clicked on quotes!!!!");
});

app.listen(port, ()=> {
    console.log('listening on: ' +port);
})