import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const RoomsSection = () => {

  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/rooms")
      return response.data
    }
    catch (err) {
      console.error("error getting rooms", err);
      return []
    }

  }
  const { isLoading, error, data: rooms = [] } = useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms
  })

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
