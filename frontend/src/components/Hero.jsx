const Hero = () => {
  return (
    <section style={{
      height: "90vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff"
    }}>
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "10px", textAlign: "center" }}>
        <h1>Luxury Stay Experience</h1>
        <p>Book your perfect room today</p>
        <button>Explore Rooms</button>
      </div>
    </section>
  );
};

export default Hero;