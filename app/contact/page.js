"use client";

import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("✅ Message Sent Successfully");

    setFormData({

      name: "",
      email: "",
      message: "",

    });

  };

  return (

    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-2xl rounded-[40px] overflow-hidden">

        {/* LEFT SIDE */}

        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#06b6d4] text-white p-12 flex flex-col justify-center">

          <p className="uppercase tracking-[6px] text-cyan-300 font-semibold">

            Contact Us

          </p>

          <h1 className="text-5xl font-extrabold mt-5 leading-tight">

            Let's Build
            <br />

            Something Amazing

          </h1>

          <p className="mt-7 text-lg text-gray-200 leading-relaxed">

            Have questions, ideas or feedback?
            Connect with Moneza and we’ll help
            you start your learning journey.

          </p>

          <div className="mt-10 space-y-4">

            <p className="text-lg">
              📧 support@moneza.com
            </p>

            <p className="text-lg">
              📍 Pune, Maharashtra
            </p>

            <p className="text-lg">
              📞 +91 9876543210
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          className="p-10 md:p-14 space-y-6"
        >

          <h2 className="text-4xl font-bold text-gray-800">

            Send Message

          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 w-full p-4 rounded-2xl outline-none focus:border-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 w-full p-4 rounded-2xl outline-none focus:border-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 w-full p-4 rounded-2xl h-[140px] outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white w-full p-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >

            🚀 Send Message

          </button>

        </form>

      </div>

    </div>
  );
}