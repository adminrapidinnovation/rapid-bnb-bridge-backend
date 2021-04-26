const db = require('../CustomModules/connection');
const errModel = require('../CustomModules/errObj');

class binanceService{
    //Select the binance records;
    binanceLastMessage(){
        let query = `select * from binancemessages order by id desc limit 1`;
        
        return new Promise((resolve, reject) => {
            db.query(query, (err, data) => {
                if (err)
                    reject(new errModel(err.code, err));
                else
                    resolve(data)
            })
        })
    }

    //Update the binance records
    insertBinanceLog(obj){
        let query  = `insert into binancemessages set ?`;
        
        return new Promise((resolve, reject) => {
            db.query(query, obj, (err, data) => {
                if (err)
                    reject(new errModel(err.code, err));
                else
                    resolve(data)
            })
        })
    }
}

module.exports = binanceService;