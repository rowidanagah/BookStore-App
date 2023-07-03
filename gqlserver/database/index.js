const { Pool } = require('pg');

// Load environment variables from .env file
require('dotenv').config();

console.log(process.env.DB_CONNECTION_STRING)
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING, // PostgreSQL connection string
});

module.exports = pool;
