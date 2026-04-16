const express = require("express");
const cors = require("cors");
require("dotenv").config();

const roomRoutes = require("./routes/roomRoutes");

const app = express();
app.use(cors());
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json());

app.use("/api/rooms", roomRoutes);

module.exports = app;