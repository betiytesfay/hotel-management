import { useEffect, useState } from 'react'
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scroll
        ? "bg-white/10 backdrop-blur-lg border-b border-white/10 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="flex justify-between items-center px-10">
        {/* LOGO */}
        <h1 className="text-2xl tracking-[6px] font-light text-[#C8A96A]">
          HOTEL
        </h1>

        {/* LINKS */}
        < div className="flex gap-4  font-light  " >
          <a href="/#" className="text-[#C8A96A] font-bold hover:bg-[#C8A96A] hover:text-[#fff] p-2 transition rounded-b-sm">Home</a>
          <a href="/rooms" className="text-[#C8A96A] font-bold hover:bg-[#C8A96A] hover:text-[#fff] px-2 py-2 rounded-sm  transition ">Rooms</a>
          <a href="#" className="text-[#C8A96A] font-bold hover:bg-[#C8A96A] hover:text-[#fff] px-2 py-2 rounded-sm transition">Food</a>
          <a href="/contact" className="text-[#C8A96A] font-bold hover:bg-[#C8A96A] hover:text-[#fff] p-2 rounded-sm transition">Contact</a>


          {/* BUTTON */}
          <button className=" hover:border-[#C8A96A] hover:text-[#C8A96A] text-[#fff] px-4 py-2 bg-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition rounded-sm">
            Book Now
          </button>
        </div >
      </div>

    </nav >
  );
};

export default Navbar;