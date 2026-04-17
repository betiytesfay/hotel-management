const pool = require("../config/db");

const getRooms = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        rooms.id,
        rooms.room_number,
        rooms.floor,
        rooms.status,
        rooms.notes,

        room_types.name AS type_name,
        room_types.description,
        room_types.base_price,
        room_types.max_guests,

        COALESCE(
          json_agg(DISTINCT amenities.name),
          '[]'
        ) AS amenities,

        COALESCE(
          json_agg(DISTINCT room_images.image_url),
          '[]'
        ) AS images

      FROM rooms

      JOIN room_types 
        ON rooms.room_type_id = room_types.id

      LEFT JOIN room_type_amenities rta
        ON room_types.id = rta.room_type_id

      LEFT JOIN amenities
        ON rta.amenity_id = amenities.id

      LEFT JOIN room_images
        ON rooms.id = room_images.room_id

      GROUP BY 
        rooms.id,
        room_types.id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch rooms" });
  }
};

module.exports = { getRooms };