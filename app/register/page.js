"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async (e) => {

      e.preventDefault();

      try {

        const res = await fetch(
          "/api/auth/register",
          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              name,
              email,
              password,

            }),

          }
        );

        const data =
          await res.json();

        alert(data.message);

        // OTP PAGE REDIRECT

        if (data.success) {

          window.location.href =
            "/otp-verify";

        }

      } catch (error) {

        console.log(error);

        alert("Something went wrong");

      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-white px-6">

      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 border"
      >

        <h1 className="text-4xl font-extrabold text-center text-gray-800">

          Register

        </h1>

        {/* NAME */}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full mt-8 p-4 rounded-2xl border outline-none"
          required
        />

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-5 p-4 rounded-2xl border outline-none"
          required
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mt-5 p-4 rounded-2xl border outline-none"
          required
        />

        {/* BUTTON */}

        <button
          type="submit"
          className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
        >

          Register

        </button>

      </form>

    </div>
  );
}