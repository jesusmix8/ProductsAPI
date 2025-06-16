// controllers/categorias.controller.js
const CategoriaModel = require("../models/categorias.model");

const CategoriaController = {
  getAll: async (req, res) => {
    try {
      const categorias = await CategoriaModel.getAll();
      res.json(categorias);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener categorías", detalles: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const categoria = await CategoriaModel.getById(req.params.id);
      if (!categoria)
        return res.status(404).json({ error: "Categoría no encontrada" });
      res.json(categoria);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener categoría", detalles: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const nuevaCategoria = await CategoriaModel.create(req.body);
      res.status(201).json(nuevaCategoria);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al crear categoría", detalles: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const actualizada = await CategoriaModel.update(req.params.id, req.body);
      if (!actualizada)
        return res.status(404).json({ error: "Categoría no encontrada" });
      res.json(actualizada);
    } catch (err) {
      res
        .status(500)
        .json({
          error: "Error al actualizar categoría",
          detalles: err.message,
        });
    }
  },

  delete: async (req, res) => {
    try {
      const eliminada = await CategoriaModel.delete(req.params.id);
      if (!eliminada)
        return res.status(404).json({ error: "Categoría no encontrada" });
      res.json(eliminada);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al eliminar categoría", detalles: err.message });
    }
  },
};

module.exports = CategoriaController;
