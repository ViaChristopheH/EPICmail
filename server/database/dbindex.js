import {Pool} from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGPORT: process.env.PGPORT
});

pool.connect();

pool.on('connect',() => {
    console.log(`Database connected successfully...`);
  })

export default pool;