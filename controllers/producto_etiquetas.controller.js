// controllers/producto_etiquetas.controller.js
const ProductoEtiquetaModel = require("../models/producto_etiqueta.model");

const ProductoEtiquetasController = {
  assign: async (req, res) => {
    try {
      const { etiquetas } = req.body; // [1,2,3]
      const rows = await ProductoEtiquetaModel.assignEtiquetas(
        req.params.id,
        etiquetas
      );
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: "Error al asignar etiquetas", detalles: err.message });
    }
  },

  listByProducto: async (req, res) => {
    try {
      const etiquetas = await ProductoEtiquetaModel.getByProducto(req.params.id);
      res.json(etiquetas);
    } catch (err) {
      res.status(500).json({ error: "Error al listar etiquetas", detalles: err.message });
    }
  }
};

module.exports = ProductoEtiquetasController;