// const connection = require('./Models/connection');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./CustomModules/connection');
var ethereumRouter = require('./Routes/ethereum');
var binanceRouter = require('./Routes/binance');
var schedule = require('node-schedule');
const ethereumController = require('./Controllers/ethereum');

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

app.use("/ethereum",ethereumRouter);

app.use("/binance",binanceRouter);

schedule.scheduleJob('*/1 * * * *', async(req, res) => {
    if(process.env.APP_ENV != 'local'){
        console.log("Schedular Called");
        let value = await ethereumController.balanceOfContract();
        console.log("Value in schedular",value);
    }
})

schedule.scheduleJob('*/5 * * * *', async(req, res) => {
    if(process.env.APP_ENV != 'local'){
        console.log("binanceCron in Every 5 Minutes");
        let binanceResponse = await ethereumController.checkBinanceEntry();
        await testController.updateCronLogs("binanceCron",binanceResponse);
    }
});

schedule.scheduleJob('*/5 * * * *', async(req, res) => {
    if(process.env.APP_ENV != 'local'){
        console.log("EthereumCron in Every 5 Minutes");
        let ethereumResponse = await ethereumController.checkEthereumEntry();
        await testController.updateCronLogs("EthereumCron",ethereumResponse);
    }
});
