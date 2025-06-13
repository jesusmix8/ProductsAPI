// controllers/productos.controller.js
const ProductoModel = require("../models/productos.model");

const ProductoController = {
  getAll: async (req, res) => {
    try {
      const productos = await ProductoModel.getAll();
      res.json(productos);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener productos", detalles: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const producto = await ProductoModel.getById(req.params.id);
      if (!producto)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.json(producto);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al obtener producto", detalles: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoProducto = await ProductoModel.create(req.body);
      res.status(201).json(nuevoProducto);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al crear producto", detalles: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const actualizado = await ProductoModel.update(req.params.id, req.body);
      if (!actualizado)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.json(actualizado);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al actualizar producto", detalles: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const eliminado = await ProductoModel.delete(req.params.id);
      if (!eliminado)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.json(eliminado);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error al eliminar producto", detalles: err.message });
    }
  },
};

module.exports = ProductoController;
