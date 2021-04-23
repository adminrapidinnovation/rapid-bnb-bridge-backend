const db = require('../custom_modules/mysql_connection/index');
const errModel = require('../custom_modules/errObj');

class testService{

    //Select data from table
    fetchData(query){
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
    insertData(query,values){
        return new Promise((resolve, reject) => {
            db.query(query, values, (err, suc) => {
                if (err)
                    reject(new errModel(err.code, err))
                else
                    resolve(true);
            })
        })
    }
}

module.exports = testService;