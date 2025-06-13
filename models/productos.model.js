// models/productos.model.js
const pool = require("./db");

const ProductoModel = {
  getAll: async () => {
    const res = await pool.query("SELECT * FROM productos LIMIT 100");
    return res.rows;
  },

  getById: async (id) => {
    const res = await pool.query(
      "SELECT * FROM productos WHERE id_producto = $1",
      [id]
    );
    return res.rows[0];
  },

  create: async (producto) => {
    const {
      nombre,
      descripcion,
      precio,
      precio_descuento,
      stock,
      sku,
      id_marca,
      id_categoria,
      id_vendedor,
      estado,
    } = producto;

    const res = await pool.query(
      `INSERT INTO productos 
        (nombre, descripcion, precio, precio_descuento, stock, sku, id_marca, id_categoria, id_vendedor, estado)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING *`,
      [
        nombre,
        descripcion,
        precio,
        precio_descuento,
        stock,
        sku,
        id_marca,
        id_categoria,
        id_vendedor,
        estado || "ACTIVO",
      ]
    );

    return res.rows[0];
  },

  update: async (id, producto) => {
    const {
      nombre,
      descripcion,
      precio,
      precio_descuento,
      stock,
      sku,
      id_marca,
      id_categoria,
      id_vendedor,
      estado,
    } = producto;

    const res = await pool.query(
      `UPDATE productos SET
         nombre = $1,
         descripcion = $2,
         precio = $3,
         precio_descuento = $4,
         stock = $5,
         sku = $6,
         id_marca = $7,
         id_categoria = $8,
         id_vendedor = $9,
         estado = $10,
         fecha_actualizacion = CURRENT_TIMESTAMP
       WHERE id_producto = $11
       RETURNING *`,
      [
        nombre,
        descripcion,
        precio,
        precio_descuento,
        stock,
        sku,
        id_marca,
        id_categoria,
        id_vendedor,
        estado,
        id,
      ]
    );

    return res.rows[0];
  },

  delete: async (id) => {
    const res = await pool.query(
      "DELETE FROM productos WHERE id_producto = $1 RETURNING *",
      [id]
    );
    return res.rows[0];
  },
};

module.exports = ProductoModel;
