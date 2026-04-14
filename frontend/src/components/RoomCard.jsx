const RoomCard = ({ room }) => {
  return (
    <div style={{
      borderRadius: "10px",
      overflow: "hidden",
      width: "250px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <div style={{ height: "150px", background: "#ddd" }}></div>

      <div style={{ padding: "15px" }}>
        <h3>Room {room.room_number}</h3>
        <p>{room.name}</p>
        <p>${room.base_price}</p>
        <p>{room.status}</p>
      </div>
    </div>
  );
};

export default RoomCard;