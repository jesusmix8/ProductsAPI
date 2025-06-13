// routes/producto_etiquetas.routes.js
const express = require("express");
const router = express.Router({ mergeParams: true });
const ProductoEtiquetasController = require("../controllers/producto_etiquetas.controller");

router.post("/", ProductoEtiquetasController.assign);
router.get("/", ProductoEtiquetasController.listByProducto);


module.exports = router;

