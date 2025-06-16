require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares
app.use(cors());
app.use(express.json());

const productosEtiquetasAggRoutes = require("./routes/productos_etiquetas_aggregate.routes");
app.use("/api/productos/etiquetas", productosEtiquetasAggRoutes);

// Rutas
app.use("/api/productos", require("./routes/productos.routes"));
app.use("/api/etiquetas", require("./routes/etiquetas.routes"));
app.use(
  "/api/productos/:id/etiquetas",
  require("./routes/producto_etiquetas.routes")
);
app.use("/api/categorias", require("./routes/categorias.routes"));
app.use("/api/marcas", require("./routes/marcas.routes"));

/*
app.use("/api/imagenes", require("./routes/imagenes.routes"));
app.use("/api/usuarios", require("./routes/usuarios.routes"));
app.use("/api/vendedores", require("./routes/vendedores.routes"));
app.use("/api/variaciones", require("./routes/variaciones.routes"));
*/

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
