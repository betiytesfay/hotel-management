const RoomBookingCard = ({ room }) => {
  return (
    <div className="border rounded-xl p-5 shadow-md sticky top-10">

      <p className="text-2xl font-bold text-[#C8A96A]">
        ${room.base_price}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        per night
      </p>

      <button className="w-full bg-[#C8A96A] text-white py-2 rounded-md hover:bg-black transition">
        Book Now
      </button>

    </div>
  );
};

export default RoomBookingCard;