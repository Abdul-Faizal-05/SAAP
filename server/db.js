const Pool= require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();
const pool = new Pool({
  user: process.env.db_username,
  host: process.env.db_host,
  database: process.env.db_database,
  password: process.env.db_password,
  port: process.env.db_port
});
module.exports = {database:pool};