const pool = require("../config/db");

exports.getUsers = async (req, res) => {
  const users = await pool.query("SELECT id,name,email,role FROM users");
  res.json(users.rows);
};