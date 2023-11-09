const express = require("express");

const app = express();
const PORT = 5000;

// const { Pool } = require("pg");

// // Configure the database connection
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "dvd-rental",
//   password: "265941783",
//   port: 5432, // PostgreSQL default port
// });

// async function queryExample() {
//   const client = await pool.connect();
//   try {
//     const result = await client.query("SELECT COUNT(amount) FROM payment");
//     console.log(result.rows);
//   } finally {
//     client.release();
//   }
// }

// queryExample().catch(console.error);

// pool
//   .end()
//   .then(() => console.log("Pool has ended"))
//   .catch((err) => console.error("Error closing pool", err));

//------------------------------------------------------

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "dvd-rental",
  password: "265941783",
  port: 5432,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected to Postgresql Database!");
});

console.log(
  client.query("SELECT * FROM unknown", (err, res) => {
    console.log(res.rows);

    client.end(); // Close the client connection when done
  })
);

// client.query("SELECT * FROM payment", (err, result) => {
//   console.log(result.rows[0]); // Handle the result

//   client.end(); // Close the client connection when done
// });

app.listen(PORT, () => {
  console.log(`Server is connected to port:${PORT}`);
});
