const express = require("express");
const router = express.Router();
const VendedorController = require("../controllers/vendedores.controller");

/**
 * @swagger
 * tags:
 *   name: Vendedores
 *   description: Gestión de vendedores
 */

/**
 * @swagger
 * /vendedores:
 *   get:
 *     summary: Obtener todos los vendedores
 *     tags: [Vendedores]
 *     responses:
 *       200:
 *         description: Lista de vendedores
 */
router.get("/", VendedorController.getAll);

/**
 * @swagger
 * /vendedores/{id}:
 *   get:
 *     summary: Obtener un vendedor por ID
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vendedor encontrado
 *       404:
 *         description: Vendedor no encontrado
 */
router.get("/:id", VendedorController.getById);

/**
 * @swagger
 * /vendedores:
 *   post:
 *     summary: Crear un nuevo vendedor
 *     tags: [Vendedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_usuario
 *               - nombre_tienda
 *             properties:
 *               id_usuario:
 *                 type: integer
 *               nombre_tienda:
 *                 type: string
 *     responses:
 *       201:
 *         description: Vendedor creado
 *       400:
 *         description: Datos inválidos
 */
router.post("/", VendedorController.create);

/**
 * @swagger
 * /vendedores/{id}:
 *   put:
 *     summary: Actualizar un vendedor
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_tienda:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vendedor actualizado
 *       404:
 *         description: Vendedor no encontrado
 */
router.put("/:id", VendedorController.update);

/**
 * @swagger
 * /vendedores/{id}:
 *   delete:
 *     summary: Eliminar un vendedor
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vendedor eliminado
 *       404:
 *         description: Vendedor no encontrado
 */
router.delete("/:id", VendedorController.delete);

module.exports = router;