// models/etiquetas.model.js
const pool = require("./db");

const EtiquetaModel = {
  getAll: async () => {
    const res = await pool.query("SELECT * FROM etiquetas");
    return res.rows;
  },

  getById: async (id) => {
    const res = await pool.query(
      "SELECT * FROM etiquetas WHERE id_etiqueta = $1",
      [id]
    );
    return res.rows[0];
  },

  create: async ({ nombre }) => {
    const res = await pool.query(
      `INSERT INTO etiquetas (nombre) VALUES ($1) RETURNING *`,
      [nombre]
    );
    return res.rows[0];
  },

  update: async (id, { nombre }) => {
    const res = await pool.query(
      `UPDATE etiquetas SET nombre = $1 WHERE id_etiqueta = $2 RETURNING *`,
      [nombre, id]
    );
    return res.rows[0];
  },

  delete: async (id) => {
    const res = await pool.query(
      `DELETE FROM etiquetas WHERE id_etiqueta = $1 RETURNING *`,
      [id]
    );
    return res.rows[0];
  }
};

module.exports = EtiquetaModel;