const UsuarioModel = require("../models/usuarios.model");

const UsuarioController = {
    getAll: async (req, res) => {
        try {
            const usuarios = await UsuarioModel.getAll();
            res.json(usuarios);
        } catch (err) {
            res.status(500).json({ error: "Error al obtener usuarios", detalles: err.message });
        }
    },

    getById: async (req, res) => {
        try {
            const usuario = await UsuarioModel.getById(req.params.id);
            if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
            res.json(usuario);
        } catch (err) {
            res.status(500).json({ error: "Error al obtener usuario", detalles: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const { nombre, correo, contrasena, rol } = req.body;

            // Verificación simple de campos requeridos
            if (!nombre || !correo || !contrasena) {
                return res.status(400).json({ error: "Nombre, correo y contraseña son requeridos" });
            }

            const nuevoUsuario = await UsuarioModel.create({
                nombre,
                correo,
                contrasena, // Sin encriptar
                rol
            });

            res.status(201).json(nuevoUsuario);
        } catch (err) {
            res.status(500).json({ error: "Error al crear usuario", detalles: err.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, correo, rol } = req.body;

            const usuarioActualizado = await UsuarioModel.update(id, {
                nombre,
                correo,
                rol
            });

            if (!usuarioActualizado) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            res.json(usuarioActualizado);
        } catch (err) {
            res.status(500).json({ error: "Error al actualizar usuario", detalles: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            const eliminado = await UsuarioModel.delete(req.params.id);
            if (!eliminado) return res.status(404).json({ error: "Usuario no encontrado" });
            res.json(eliminado);
        } catch (err) {
            res.status(500).json({ error: "Error al eliminar usuario", detalles: err.message });
        }
    },
};

module.exports = UsuarioController;