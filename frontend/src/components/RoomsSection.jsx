import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

const RoomsSection = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <section style={{ padding: "40px" }}>
      <h2>Available Rooms</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;