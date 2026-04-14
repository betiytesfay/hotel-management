import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HotelStory from "../components/HotelStory";
const Home = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <HotelStory />
      <Footer />
    </div>
  );
};

export default Home;