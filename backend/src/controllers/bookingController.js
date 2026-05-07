const pool = require("../config/db");

exports.getBookings = async (req, res) => {
  const bookings = await pool.query("SELECT * FROM bookings");
  res.json(bookings.rows);
};

exports.createBooking = async (req, res) => {
  const {
    customer_name,
    customer_phone,
    room_id,
    check_in,
    check_out
  } = req.body;

  const booking = await pool.query(
    "INSERT INTO bookings (customer_name,customer_phone,room_id,check_in,check_out) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [customer_name, customer_phone, room_id, check_in, check_out]
  );

  res.json(booking.rows[0]);
};