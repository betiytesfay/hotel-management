import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Wake up in the heart of Bergen",
    "Experience calm luxury by the sea",
    "Relax in modern elegance"
  ];
  const slides = [
    {
      text: "Wake up in  the heart of Addis Ababa  ",
      image: " https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80"
    },
    {
      text: "Experience calm luxury by the sea  ",
      image: " https://images.unsplash.com/photo-1521782462922-9318be1cfd04?auto=format&fit=crop&w=2000&q=80"
    },
    {
      text: "Relax in modern elegance ",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80"
    }
  ]

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">

      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#C8A96A]/20" />

      {/* content */}
      <div className="relative z-10 text-center max-w-3xl px-4">

        {/* rating */}
        <div className="text-[#C8A96A] text-lg tracking-widest mb-4">
          ★ 4.8 / 5 Exceptional
        </div>

        {/* title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
          {slides[index].text}
        </h1>

        {/* subtitle */}
        <p className="text-[#F7F3EA] text-base md:text-lg mb-8">
          A refined hotel experience designed for comfort, silence and elegance.
        </p>

        {/* buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#C8A96A] px-6 py-3 text-white hover:opacity-90 transition">
            Book Now
          </button>

          <button className="border border-[#F7F3EA] px-6 py-3 text-[#F7F3EA] hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

        {/* stats */}
        <div className="mt-10 flex justify-center gap-10 text-[#F7F3EA]">
          <div className="text-center">
            <h3 className="text-[#C8A96A] text-xl font-semibold">10+</h3>
            <p className="text-sm">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-[#C8A96A] text-xl font-semibold">120</h3>
            <p className="text-sm">Luxury Rooms</p>
          </div>

          <div className="text-center">
            <h3 className="text-[#C8A96A] text-xl font-semibold">24/7</h3>
            <p className="text-sm">Service</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;