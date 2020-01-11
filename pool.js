const mysql = require("mysql");
let pool = mysql.createPool({
  host : "localhost",
  port : 3306,
  user : "root",
  password : '',
  database : "wldb",
  connectionLimit : 15
});
module.exports = pool;