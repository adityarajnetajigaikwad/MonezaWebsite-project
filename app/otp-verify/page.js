"use client";

import { useState } from "react";

export default function OTPVerifyPage() {

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const handleVerify =
    async (e) => {

      e.preventDefault();

      try {

        const res = await fetch(
          "/api/auth/verify-otp",
          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              email,
              otp,

            }),

          }
        );

        const data =
          await res.json();

        alert(data.message);

        if (data.success) {

          window.location.href =
            "/login";

        }

      } catch (error) {

        console.log(error);

        alert("Something went wrong");

      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-white px-6">

      <form
        onSubmit={handleVerify}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 border"
      >

        <h1 className="text-4xl font-extrabold text-center text-gray-800">

          OTP Verification

        </h1>

        <p className="text-center text-gray-500 mt-4">

          Enter OTP sent to your email

        </p>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-8 p-4 rounded-2xl border outline-none"
          required
        />

        {/* OTP */}

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value)
          }
          className="w-full mt-5 p-4 rounded-2xl border outline-none"
          required
        />

        <button
          type="submit"
          className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
        >

          Verify OTP

        </button>

      </form>

    </div>
  );
}