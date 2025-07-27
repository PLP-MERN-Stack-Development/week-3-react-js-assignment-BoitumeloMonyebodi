const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");
const connectDb = require("./config/connectionDb");

const userRoutes = require("./routes/user");
const recipeRoutes = require("./routes/recipe");

const app = express();

// Connect to MongoDB
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('✅ Server running on http://localhost:${PORT}');
});