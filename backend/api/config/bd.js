const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

//set des variable de config pour la connexion a la DB
const connectionConfig = {
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
}

//connexion a la database
const connection = mysql.createConnection(connectionConfig);
connection.connect((err) =>{
    if (err) {
        console.log('error creating connection to database')
        return
    }
    console.log('connection establised with database')
});

module.exports = connection;