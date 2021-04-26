var mysqldb = {};
const dotenv = require('dotenv');
dotenv.config();

var configs = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectTimeout: 50000,
    database: process.env.DB_NAME,
    port: 3306
}

mysqldb.mysql = require('mysql');
 
mysqldb.pool = null;
 
mysqldb.setupPool = function () {
    mysqldb.pool = mysqldb.mysql.createPool(configs);
    console.log('Database connected at ..' + configs.host + `:${configs.port}`)
}
 
mysqldb.setupPool();
 
mysqldb.pool.on('connection', function (connection) {
    //console.log('Connected to mysql Database.');
});
 
 
mysqldb.query = function (query, values, callback) {
    // console.log(`*************************--------------------------------*************************`);
    // console.log(query)
    // console.log(`*************************--------------------------------*************************`);
    mysqldb.pool.query(query, values, function (err, rows, fields) {
        if (err) {
            console.log(err)
            return callback(err, [])
        }
        else {
            return callback(null, rows)
        }
    });
}

 module.exports = mysqldb; 