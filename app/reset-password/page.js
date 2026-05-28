"use client";

import { useState } from "react";

export default function ResetPasswordPage() {

  const [formData, setFormData] =
    useState({

      email: "",
      otp: "",
      newPassword: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch(
      "/api/auth/reset-password",

      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      }
    );

    const data = await res.json();

    alert(data.message);

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[400px] space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Reset Password
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-3 rounded"
        >
          Reset Password
        </button>

      </form>

    </div>
  );
}