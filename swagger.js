// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Tienda en Línea",
      version: "1.0.0",
      description:
        "Documentación de la API de productos, marcas, categorías, etc.",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // Aquí busca los comentarios tipo Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
