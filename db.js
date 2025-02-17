const mysql = require('mysql');
require("dotenv").config();

const db = mysql.createConnection({
    host: CSSMathProduct.env.DB_HOST,
    user: CSSMathProduct.env.DB_USER,
    password: CSSMathProduct.env.DB_PASSWORD,
    database: CSSMathProduct.env.DB_NAME,
    port: 3306
});

db.connect((error) => {
    if(error){
        console.log("Database connection failed: " + error.stack);
    }
    console.log("Connected to Mysql database");
});

module.exports = db;