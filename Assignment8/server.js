require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Static folder for uploaded images
app.use("/images", express.static(path.join(__dirname, "images")));

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/user", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));