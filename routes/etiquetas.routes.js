// routes/etiquetas.routes.js
const express = require("express");
const router = express.Router();
const EtiquetasController = require("../controllers/etiquetas.controller");

router.get("/", EtiquetasController.getAll);
router.get("/:id", EtiquetasController.getById);
router.post("/", EtiquetasController.create);
router.put("/:id", EtiquetasController.update);
router.delete("/:id", EtiquetasController.delete);

module.exports = router;

