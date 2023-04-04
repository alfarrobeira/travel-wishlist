import * as dotenv from 'dotenv';
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

// create new connection pool
const connPool = new Pool({
    connectionString: process.env.DB_CONNECTION
});

export default connPool;