const express = require("express");
const router = express.Router();
const ProductosEtiquetasAggregateController = require(
  "../controllers/productos_etiquetas_aggregate.controller"
);

router.get("/", ProductosEtiquetasAggregateController.listAll);

module.exports = router;