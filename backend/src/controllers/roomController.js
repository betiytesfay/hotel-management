const pool = require("../config/db");

const getRooms = async (req, res) => {
  const result = await pool.query(`
    SELECT rooms.*, room_types.name, room_types.base_price
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
  `);

  res.json(result.rows);
};

const createRoom = async (req, res) => {
  const { room_number, room_type_id, floor, status, notes } = req.body;

  const result = await pool.query(
    "INSERT INTO rooms (room_number, room_type_id, floor, status, notes) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [room_number, room_type_id, floor, status, notes]
  );

  res.json(result.rows[0]);
};

module.exports = { getRooms, createRoom };