require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "dsep-db.c0osl5naewss.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "Helkobug123!",
    database: "dsep-db",
    port: 3306
});

module.exports = connection;