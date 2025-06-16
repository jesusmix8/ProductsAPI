const express = require("express");
const router = express.Router();
const MarcaController = require("../controllers/marcas.controller");
/**
 * @swagger
 * tags:
 *   name: Marcas
 *   description: Endpoints para gestión de marcas
 */

/**
 * @swagger
 * /marcas:
 *   get:
 *     summary: Obtener todas las marcas
 *     tags: [Marcas]
 *     responses:
 *       200:
 *         description: Lista de marcas
 */
router.get("/", MarcaController.getAll);

/**
 * @swagger
 * /marcas/{id}:
 *   get:
 *     summary: Obtener una marca por ID
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca encontrada
 *       404:
 *         description: Marca no encontrada
 */
router.get("/:id", MarcaController.getById);

/**
 * @swagger
 * /marcas:
 *   post:
 *     summary: Crear una nueva marca
 *     tags: [Marcas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombre]
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Marca creada
 */
router.post("/", MarcaController.create);

/**
 * @swagger
 * /marcas/{id}:
 *   put:
 *     summary: Actualizar una marca
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Marca actualizada
 *       404:
 *         description: Marca no encontrada
 */
router.put("/:id", MarcaController.update);

/**
 * @swagger
 * /marcas/{id}:
 *   delete:
 *     summary: Eliminar una marca
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Marca eliminada
 *       404:
 *         description: Marca no encontrada
 */

router.delete("/:id", MarcaController.delete);

module.exports = router;
