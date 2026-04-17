import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        setRoom(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoom();
  }, [id]);

  if (!room) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Room {room.room_number}
      </h1>

      <img
        src={room.images?.[0]}
        className="w-full h-80 object-cover mt-4 rounded"
      />

      <p className="mt-4">{room.type_name}</p>
      <p>${room.base_price}</p>

      <div className="mt-4">
        {room.amenities?.map((a, i) => (
          <span key={i} className="mr-2 bg-gray-200 px-2 py-1 rounded">
            {a}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RoomDetailsPage;