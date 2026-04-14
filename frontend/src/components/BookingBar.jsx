const BookingBar = () => {
  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      padding: "20px",
      backgroundColor: "#fff",
      marginTop: "-40px"
    }}>
      <input type="date" />
      <input type="date" />
      <input type="number" placeholder="Guests" />
      <button>Check</button>
    </section>
  );
};

export default BookingBar;