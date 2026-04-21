const RoomGallery = ({ images = [] }) => {
  return (
    <div className="space-y-3">

      {/* MAIN IMAGE */}
      <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden">
        <img
          src={images?.[0] || "https://via.placeholder.com/800"}
          alt="room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-2">
        {images?.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-80"
          />
        ))}
      </div>

    </div>
  );
};

export default RoomGallery;