function RoomInfo({ room }) {
  return (
    <div className="space-y-3">

      <h1 className="text-2xl font-bold">
        Room {room.room_number}
      </h1>

      <p className="text-gray-500">
        {room.type_name}
      </p>

      <p className="text-xl text-[#C8A96A] font-bold">
        ${room.base_price} / night
      </p>

      <div className="flex gap-4 text-sm text-gray-600">
        <span>Guests: {room.max_guests}</span>
        <span>Status: {room.status}</span>
      </div>

    </div>
  );
};

export default RoomInfo;