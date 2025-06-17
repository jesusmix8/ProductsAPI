const VendedorModel = require("../models/vendedores.model");

const VendedorController = {
    getAll: async (req, res) => {
        try {
            const vendedores = await VendedorModel.getAll();
            res.json(vendedores);
        } catch (err) {
            res.status(500).json({
                error: "Error al obtener vendedores",
                detalles: err.message
            });
        }
    },

    getById: async (req, res) => {
        try {
            const vendedor = await VendedorModel.getById(req.params.id);
            if (!vendedor) {
                return res.status(404).json({ error: "Vendedor no encontrado" });
            }
            res.json(vendedor);
        } catch (err) {
            res.status(500).json({
                error: "Error al obtener vendedor",
                detalles: err.message
            });
        }
    },

    create: async (req, res) => {
        try {
            const { id_usuario, nombre_tienda } = req.body;

            if (!id_usuario || !nombre_tienda) {
                return res.status(400).json({
                    error: "id_usuario y nombre_tienda son requeridos"
                });
            }

            const nuevoVendedor = await VendedorModel.create({
                id_usuario,
                nombre_tienda
            });

            res.status(201).json(nuevoVendedor);
        } catch (err) {
            res.status(500).json({
                error: "Error al crear vendedor",
                detalles: err.message
            });
        }
    },

    update: async (req, res) => {
        try {
            const vendedorActualizado = await VendedorModel.update(
                req.params.id,
                req.body
            );

            if (!vendedorActualizado) {
                return res.status(404).json({ error: "Vendedor no encontrado" });
            }

            res.json(vendedorActualizado);
        } catch (err) {
            res.status(500).json({
                error: "Error al actualizar vendedor",
                detalles: err.message
            });
        }
    },

    delete: async (req, res) => {
        try {
            const vendedorEliminado = await VendedorModel.delete(req.params.id);

            if (!vendedorEliminado) {
                return res.status(404).json({ error: "Vendedor no encontrado" });
            }

            res.json(vendedorEliminado);
        } catch (err) {
            res.status(500).json({
                error: "Error al eliminar vendedor",
                detalles: err.message
            });
        }
    },
};

module.exports = VendedorController;