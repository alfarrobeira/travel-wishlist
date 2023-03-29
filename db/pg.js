//import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

// create new connection pool
const connPool = new Pool({
    // todo: save connection string to ENV variable
    connectionString: "postgres://mdemxigo:qNAkWiH9xHlvfDMrNILEY7t6tpg2hYXc@surus.db.elephantsql.com/mdemxigo"
});

export default connPool;