// const connection = require('./Models/connection');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var testRouter = require('./Routes/test');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.get("/",(req,res)=>{
    res.status(200).json("Hello Techie");
});

let port = 3000;

app.listen(port,()=>{
    console.log("Server is up and running on "+port);
});

app.use("/test",testRouter);

