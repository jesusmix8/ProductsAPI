const pool = require("./db");

const CategoriaModel = {
  getAll: async () => {
    const res = await pool.query(
      "SELECT * FROM categorias ORDER BY id_categoria"
    );
    return res.rows;
  },

  getById: async (id) => {
    const res = await pool.query(
      "SELECT * FROM categorias WHERE id_categoria = $1",
      [id]
    );
    return res.rows[0];
  },

  create: async ({ nombre, id_padre = null }) => {
    const res = await pool.query(
      "INSERT INTO categorias (nombre, id_padre) VALUES ($1, $2) RETURNING *",
      [nombre, id_padre]
    );
    return res.rows[0];
  },

  update: async (id, { nombre, id_padre }) => {
    const res = await pool.query(
      "UPDATE categorias SET nombre = $1, id_padre = $2 WHERE id_categoria = $3 RETURNING *",
      [nombre, id_padre, id]
    );
    return res.rows[0];
  },

  delete: async (id) => {
    const res = await pool.query(
      "DELETE FROM categorias WHERE id_categoria = $1 RETURNING *",
      [id]
    );
    return res.rows[0];
  },
};

module.exports = CategoriaModel;
