const pool = require("./db");
console.log("📦 Model  de marcas cargadas");

const MarcaModel = {
  getAll: async () => {
    const res = await pool.query("SELECT * FROM marcas ORDER BY id_marca");
    return res.rows;
  },

  getById: async (id) => {
    const res = await pool.query("SELECT * FROM marcas WHERE id_marca = $1", [
      id,
    ]);
    return res.rows[0];
  },

  create: async ({ nombre }) => {
    const res = await pool.query(
      "INSERT INTO marcas (nombre) VALUES ($1) RETURNING *",
      [nombre]
    );
    return res.rows[0];
  },

  update: async (id, { nombre }) => {
    const res = await pool.query(
      "UPDATE marcas SET nombre = $1 WHERE id_marca = $2 RETURNING *",
      [nombre, id]
    );
    return res.rows[0];
  },

  delete: async (id) => {
    const res = await pool.query(
      "DELETE FROM marcas WHERE id_marca = $1 RETURNING *",
      [id]
    );
    return res.rows[0];
  },
};

module.exports = MarcaModel;
