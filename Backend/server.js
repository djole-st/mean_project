var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// mongo db connection
mongoose.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo db @ 27017");
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log(err);
    }
});

const port = 3100;

//cors middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) =>{
    res.send("Djes ba");
});

app.listen(port,() =>{
    console.log("Server started at port: "+port);
});