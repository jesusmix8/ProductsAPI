const pool = require("./db");

const ProductosEtiquetasAggregateModel = {
  getAllWithEtiquetas: async () => {
    const res = await pool.query(
      `SELECT
         p.id_producto,
         p.nombre AS producto,
         COALESCE(
           array_agg(e.nombre ORDER BY e.nombre)
           FILTER (WHERE e.nombre IS NOT NULL),
           '{}'
         ) AS etiquetas
       FROM public.productos p
       LEFT JOIN public.producto_etiqueta pe
         ON p.id_producto = pe.id_producto
       LEFT JOIN public.etiquetas e
         ON pe.id_etiqueta = e.id_etiqueta
       GROUP BY p.id_producto, p.nombre
       ORDER BY p.id_producto;`
    );
    return res.rows;
  }
};

module.exports = ProductosEtiquetasAggregateModel;
