"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch(
      "/api/auth/forgot-password",

      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email }),

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
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border w-full p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-3 rounded"
        >
          Send OTP
        </button>

      </form>

    </div>
  );
}