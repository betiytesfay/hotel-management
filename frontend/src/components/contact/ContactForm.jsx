import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 space-y-6"
      >

        {/* TITLE */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-light text-gray-800">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-500">
            We usually respond within 24 hours
          </p>
        </div>

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#C8A96A] text-black py-3 rounded-md hover:opacity-90 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default ContactForm;