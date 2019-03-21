import { Pool, Client } from 'pg'
const connectionString = 
'postgresql://dbuser:1234567890@database.server.com:5432/dbindex'

const pool = new Pool({
  connectionString: process.env.PGURL 
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('Database connected successfully...')
  pool.end()
})

// pool.connect();

pool.on('connect',() => {
    console.log(`Database connected successfully...`);
  })


// import {Pool} from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// const pool = new Pool({
//     host: process.env.PGHOST,
//     user: process.env.PGUSER,
//     database: process.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT
// });

// pool.connect();

// pool.on('connect',() => {
//     console.log(`Database connected successfully...`);
//   })

// export default pool;