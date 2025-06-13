// models/producto_etiqueta.model.js
const pool = require("./db");

const ProductoEtiquetaModel = {
  assignEtiquetas: async (id_producto, etiquetas) => {
    // Eliminar asignaciones previas (opcional)
    await pool.query(
      `DELETE FROM producto_etiqueta WHERE id_producto = $1`,
      [id_producto]
    );
    // Insertar nuevas
    const inserts = etiquetas.map((id_etiqueta) => `($1, ${id_etiqueta})`).join(",");
    const query = `INSERT INTO producto_etiqueta (id_producto, id_etiqueta) VALUES ${inserts} RETURNING *`;
    const res = await pool.query(query, [id_producto]);
    return res.rows;
  },

  getByProducto: async (id_producto) => {
    const res = await pool.query(
      `SELECT e.* FROM etiquetas e
       JOIN producto_etiqueta pe ON e.id_etiqueta = pe.id_etiqueta
       WHERE pe.id_producto = $1`,
      [id_producto]
    );
    return res.rows;
  }
};

module.exports = ProductoEtiquetaModel;