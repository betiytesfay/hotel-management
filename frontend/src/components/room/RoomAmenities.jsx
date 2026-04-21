const RoomAmenities = ({ amenities = [] }) => {
  return (
    <div className="space-y-2">

      <h2 className="text-lg font-semibold">Amenities</h2>

      <div className="flex flex-wrap gap-2">
        {amenities.length === 0 ? (
          <p className="text-gray-400 text-sm">No amenities available</p>
        ) : (
          amenities.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))
        )}
      </div>

    </div>
  );
};

export default RoomAmenities;