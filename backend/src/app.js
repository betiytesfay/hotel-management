const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

module.exports = app;
