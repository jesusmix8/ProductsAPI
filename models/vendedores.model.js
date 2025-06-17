const pool = require("./db");

const VendedorModel = {
    getAll: async () => {
        const res = await pool.query(`
        SELECT v.*, u.nombre as nombre_usuario, u.correo 
        FROM vendedores v
        JOIN usuarios u ON v.id_usuario = u.id_usuario
        ORDER BY v.id_vendedor
        `);
        return res.rows;
    },

    getById: async (id) => {
        const res = await pool.query(
            `SELECT v.*, u.nombre as nombre_usuario, u.correo 
            FROM vendedores v
            JOIN usuarios u ON v.id_usuario = u.id_usuario
            WHERE v.id_vendedor = $1`,
            [id]
        );
        return res.rows[0];
    },

    create: async ({ id_usuario, nombre_tienda }) => {
        const res = await pool.query(
            "INSERT INTO vendedores (id_usuario, nombre_tienda) VALUES ($1, $2) RETURNING *",
            [id_usuario, nombre_tienda]
        );
        return res.rows[0];
    },

    update: async (id, { nombre_tienda }) => {
        const res = await pool.query(
            "UPDATE vendedores SET nombre_tienda = $1 WHERE id_vendedor = $2 RETURNING *",
            [nombre_tienda, id]
        );
        return res.rows[0];
    },

    delete: async (id) => {
        const res = await pool.query(
            "DELETE FROM vendedores WHERE id_vendedor = $1 RETURNING *",
            [id]
        );
        return res.rows[0];
    },
};

module.exports = VendedorModel;