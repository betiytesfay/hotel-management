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

    <nav className={`top-0 left-0 w-full z-50 transition-all duration-300 ${scroll ? " flex justify-between items-end px-10 py-2 bg-white/10 backdrop-blur-lg border-b border-white/10 text-white" : "w-full flex justify-between items-end px-10 py-2 bg-transparent absolute top-0 left-0 z-50 text-white"}`}>

      {/* LOGO */}
      < h1 className="text-xl tracking-[3px] font-light" >
        HOTEL
      </h1 >

      {/* LINKS */}
      < div className="flex gap-8 font-bold font-light " >
        <a href="#" className="hover:text-[#C8A96A] transition">Home</a>
        <a href="#" className="hover:text-[#C8A96A] transition">Rooms</a>
        <a href="#" className="hover:text-[#C8A96A] transition">Food</a>
        <a href="#" className="hover:text-[#C8A96A] transition">Contact</a>


        {/* BUTTON */}
        <button className=" hover:border-[#C8A96A] hover:text-[#C8A96A] color-[#fff] px-4 py-2 bg-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition rounded-sm">
          Book Now
        </button>
      </div >

    </nav >
  );
};

export default Navbar;