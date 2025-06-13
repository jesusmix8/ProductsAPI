require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", require("./routes/productos.routes"));
/*
app.use("/api/categorias", require("./routes/categorias.routes"));
app.use("/api/etiquetas", require("./routes/etiquetas.routes"));
app.use("/api/imagenes", require("./routes/imagenes.routes"));
app.use("/api/marcas", require("./routes/marcas.routes"));
app.use("/api/usuarios", require("./routes/usuarios.routes"));
app.use("/api/vendedores", require("./routes/vendedores.routes"));
app.use("/api/variaciones", require("./routes/variaciones.routes"));
*/

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
