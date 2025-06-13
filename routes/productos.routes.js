// routes/productos.routes.js
const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/productos.controller");

router.get("/", ProductoController.getAll);
router.get("/:id", ProductoController.getById);
router.post("/", ProductoController.create);
router.put("/:id", ProductoController.update);
router.delete("/:id", ProductoController.delete);

module.exports = router;
