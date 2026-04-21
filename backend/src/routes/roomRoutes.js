const express = require("express");
const router = express.Router();
const { getRooms } = require("../controllers/roomController");
const { getRoomById } = require("../controllers/roomController")
router.get("/", getRooms);
router.get("/:id", getRoomById)
module.exports = router;