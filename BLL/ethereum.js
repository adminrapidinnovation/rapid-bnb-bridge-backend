const { reject } = require('async');
const { resolve } = require('path');
const db = require('../CustomModules/connection');
const errModel = require('../CustomModules/errObj');

class ethereumService{

    //Select data from table
    ethereumLastMessage(){
        let query = `select * from ethereummessages order by id desc limit 1`;

        return new Promise((resolve, reject) => {
            db.query(query, (err, data) => {
                if (err)
                    reject(new errModel(err.code, err));
                else
                    resolve(data)
            })
        })
    }

    //insert data in table
    insertEthereumLog(obj){
        let query = `insert into ethereummessages set ?`;

        return new Promise((resolve, reject) => {
            db.query(query, obj, (err, suc) => {
                if (err)
                    reject(new errModel(err.code, err));
                else
                    resolve(true);
            })
        })
    }

    //insert into cronlogs
    createCronLogs(obj){
        let query = `insert into cronlogs set ?`;

        return new Promise((resolve,reject)=>{
            db.query(query, obj, (err,suc) => {
                if(err){
                    reject(new errModel(err.code, err))
                }else{
                    resolve(true);
                }
            });
        });
    }
}

module.exports = ethereumService;