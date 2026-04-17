const RoomCard = ({ room }) => {
  return (
    <div onClick={() => navigate(`/rooms/${room.id}`)}
      className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition">

      {/* IMAGE */}
      <img
        src={room.images?.[0] || "https://via.placeholder.com/400"}
        alt="room"
        className="h-40 w-full object-cover"
      />

      <div className="p-4">

        {/* TOP ROW */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            Room {room.room_number}
          </h3>

          <span className={`text-xs px-2 py-1 rounded-full ${room.status === "available"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
            }`}>
            {room.status}
          </span>
        </div>

        {/* TYPE */}
        <p className="text-sm text-gray-500">
          {room.type_name}
        </p>

        {/* PRICE */}
        <p className="text-[#C8A96A] font-bold mt-2">
          ${room.base_price} / night
        </p>

        {/* GUESTS */}
        <p className="text-sm mt-1">
          Guests: {room.max_guests}
        </p>

        {/* AMENITIES */}
        <div className="flex flex-wrap gap-1 mt-2">
          {room.amenities?.map((a, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {a}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RoomCard;