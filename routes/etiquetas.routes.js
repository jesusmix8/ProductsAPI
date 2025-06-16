// routes/etiquetas.routes.js
const express = require("express");
const router = express.Router();
const EtiquetasController = require("../controllers/etiquetas.controller");

/**
 * @swagger
 * tags:
 *   name: Etiquetas
 *   description: Gestión de etiquetas
 */
/**
 * @swagger
 * /etiquetas:
 *   get:
 *     summary: Obtener todas las etiquetas
 *     tags: [Etiquetas]
 *     responses:
 *       200:
 *         description: Lista de etiquetas
 */
router.get("/", EtiquetasController.getAll);
/**
 * @swagger
 * /etiquetas/{id}:
 *   get:
 *     summary: Obtener una etiqueta por ID
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Etiqueta encontrada
 *       404:
 *         description: Etiqueta no encontrada
 */
router.get("/:id", EtiquetasController.getById);

/**
 * @swagger
 * /etiquetas:
 *   post:
 *     summary: Crear una etiqueta
 *     tags: [Etiquetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Etiqueta creada
 */
router.post("/", EtiquetasController.create);

/**
 * @swagger
 * /etiquetas/{id}:
 *   put:
 *     summary: Actualizar una etiqueta
 *     tags: [Etiquetas]
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
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Etiqueta actualizada
 */
router.put("/:id", EtiquetasController.update);

/**
 * @swagger
 * /etiquetas/{id}:
 *   delete:
 *     summary: Eliminar una etiqueta
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Etiqueta eliminada
 */
router.delete("/:id", EtiquetasController.delete);

module.exports = router;
