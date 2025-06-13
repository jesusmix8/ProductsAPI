// controllers/etiquetas.controller.js
const EtiquetaModel = require("../models/etiquetas.model");

const EtiquetasController = {
  getAll: async (req, res) => {
    try {
      const etiquetas = await EtiquetaModel.getAll();
      res.json(etiquetas);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener etiquetas", detalles: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const etiqueta = await EtiquetaModel.getById(req.params.id);
      if (!etiqueta) return res.status(404).json({ error: "Etiqueta no encontrada" });
      res.json(etiqueta);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener etiqueta", detalles: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const nueva = await EtiquetaModel.create(req.body);
      res.status(201).json(nueva);
    } catch (err) {
      res.status(500).json({ error: "Error al crear etiqueta", detalles: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await EtiquetaModel.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: "Etiqueta no encontrada" });
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Error al actualizar etiqueta", detalles: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await EtiquetaModel.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Etiqueta no encontrada" });
      res.json({ message: "Etiqueta eliminada" });
    } catch (err) {
      res.status(500).json({ error: "Error al eliminar etiqueta", detalles: err.message });
    }
  }
};

module.exports = EtiquetasController;