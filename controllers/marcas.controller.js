const MarcaModel = require("../models/marcas.model");
console.log("📦 Controller de marcas cargadas");
const MarcaController = {
  getAll: async (req, res) => {
    try {
      const marcas = await MarcaModel.getAll();
      res.json(marcas);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener marcas", detalles: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const marca = await MarcaModel.getById(req.params.id);
      if (!marca) return res.status(404).json({ error: "Marca no encontrada" });
      res.json(marca);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener marca", detalles: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const nueva = await MarcaModel.create(req.body);
      res.status(201).json(nueva);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al crear marca", detalles: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const actualizada = await MarcaModel.update(req.params.id, req.body);
      if (!actualizada)
        return res.status(404).json({ error: "Marca no encontrada" });
      res.json(actualizada);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al actualizar marca", detalles: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const eliminada = await MarcaModel.delete(req.params.id);
      if (!eliminada)
        return res.status(404).json({ error: "Marca no encontrada" });
      res.json(eliminada);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al eliminar marca", detalles: err.message });
    }
  },
};

module.exports = MarcaController;
