const pool = require("./db");

const UsuarioModel = {
    getAll: async () => {
        const res = await pool.query("SELECT id_usuario, nombre, correo, rol, fecha_creacion FROM usuarios ORDER BY id_usuario");
        return res.rows;
    },

    getById: async (id) => {
        const res = await pool.query(
            "SELECT id_usuario, nombre, correo, rol, fecha_creacion FROM usuarios WHERE id_usuario = $1",
            [id]
        );
        return res.rows[0];
    },

    getByEmail: async (email) => {
        const res = await pool.query(
            "SELECT * FROM usuarios WHERE correo = $1",
            [email]
        );
        return res.rows[0];
    },

    create: async ({ nombre, correo, contrasena, rol }) => {
        const res = await pool.query(
            "INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING id_usuario, nombre, correo, rol, fecha_creacion",
            [nombre, correo, contrasena, rol || 'CLIENTE']
        );
        return res.rows[0];
    },

    update: async (id, { nombre, correo, rol }) => {
        const res = await pool.query(
            "UPDATE usuarios SET nombre = $1, correo = $2, rol = $3 WHERE id_usuario = $4 RETURNING id_usuario, nombre, correo, rol, fecha_creacion",
            [nombre, correo, rol, id]
        );
        return res.rows[0];
    },

    delete: async (id) => {
        const res = await pool.query(
            "DELETE FROM usuarios WHERE id_usuario = $1 RETURNING id_usuario, nombre, correo",
            [id]
        );
        return res.rows[0];
    },
};

module.exports = UsuarioModel;