const express = require("express");
const router = express.Router();
const MarcaController = require("../controllers/marcas.controller");

router.get("/", MarcaController.getAll);
router.get("/:id", MarcaController.getById);
router.post("/", MarcaController.create);
router.put("/:id", MarcaController.update);
router.delete("/:id", MarcaController.delete);
console.log("📦 Rutas de marcas cargadas");
module.exports = router;
