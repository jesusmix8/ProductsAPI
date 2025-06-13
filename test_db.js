// test-db.js
const pool = require("./models/db");

async function probarConexion() {
  try {
    const res = await pool.query("SELECT * from marcas LIMIT 1");
    if (res.rows.length === 0) {
      console.log("⚠️ No se encontraron marcas en la base de datos.");
      process.exit(0);
    }
    console.log(
      "✅ Conexión exitosa a PostgreSQL y marcas encontradas:",
      res.rows
    );
  } catch (err) {
    console.error("❌ Error al ejecutar consulta:", err);
    process.exit(1);
  }
}

probarConexion();
