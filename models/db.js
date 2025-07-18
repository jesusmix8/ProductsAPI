// models/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => {
    console.log("✅ Conexión exitosa a PostgreSQL");
  })
  .catch((err) => {
    console.error("❌ Error de conexión a PostgreSQL:", err);
  });

module.exports = pool;
