const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description:
        "RESTful API for managing users with bcrypt password hashing and image uploads",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [path.join(__dirname, "./routes/userRoutes.js")],
};

module.exports = swaggerJsdoc(options);