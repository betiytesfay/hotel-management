const pool = require("../config/db");

const getRooms = async (req, res) => {
  const result = await pool.query("SELECT * FROM rooms");
  res.json(result.rows);
};

const createRoom = async (req, res) => {
  const { room_number, type, price, description } = req.body;

  const result = await pool.query(
    "INSERT INTO rooms (room_number, type, price, description) VALUES ($1, $2, $3, $4) RETURNING *",
    [room_number, type, price, description]
  );

  res.json(result.rows[0]);
};

module.exports = { getRooms, createRoom };