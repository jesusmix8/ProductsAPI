const ProductosEtiquetasAggregateModel = require("../models/productos_etiquetas_aggregate.model");

const ProductosEtiquetasAggregateController = {
  listAll: async (req, res) => {
    try {
      const rows = await ProductosEtiquetasAggregateModel.getAllWithEtiquetas();
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener productos con etiquetas", detalles: err.message });
    }
  }
};

module.exports = ProductosEtiquetasAggregateController;