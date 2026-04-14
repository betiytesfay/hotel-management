const HotelStory = () => {
  return (
    <section className="bg-[#F7F3EA] py-24 px-10 md:px-20 flex flex-col md:flex-row items-center gap-12">

      {/* IMAGE */}
      <div
        className="w-full md:w-1/2 h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521782462922-9318be1cfd04?auto=format&fit=crop&w=2000&q=80')"
        }}
      />

      {/* TEXT */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-light text-gray-900 mb-6">
          A Place of Calm Luxury
        </h2>

        <p className="text-gray-600 leading-8 mb-8">
          Our hotel blends modern comfort with timeless elegance.
          Every detail is designed to give you a peaceful stay
          in the heart of the city.
        </p>

        <button className="border border-[#C8A96A] text-[#C8A96A] px-6 py-3 hover:bg-[#C8A96A] hover:text-white transition">
          Learn More
        </button>
      </div>

    </section>
  );
};

export default HotelStory;