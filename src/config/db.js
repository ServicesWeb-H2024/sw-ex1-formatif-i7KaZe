const mysql = require("mysql"); 
const dotenv = require("dotenv"); 
dotenv.config(); 
// Crée un pool de connexions MySQL en utilisant les variables d'environnement 
const pool = mysql.createPool({ 
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT, 
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASSWORD, 
    database: process.env.MYSQL_DATABASE,  
    port: process.env.MYSQL_PORT 
}); 
module.exports = pool; 
