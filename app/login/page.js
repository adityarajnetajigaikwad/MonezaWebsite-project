"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const res = await fetch(

          "/api/auth/login",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

            },

            body: JSON.stringify({

              email,
              password,

            }),

          }
        );

        const data =
          await res.json();

        // SUCCESS

        if (data.success) {

          alert("Login Successful");

          // REDIRECT

          window.location.href =
            "/dashboard";

        } else {

          alert(data.message);
        }

      } catch (error) {

        console.log(error);

        alert("Something went wrong");

      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-white px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 border"
      >

        <h1 className="text-4xl font-extrabold text-center text-gray-800">

          Login

        </h1>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-8 p-4 rounded-2xl border outline-none"
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

          Login

        </button>

      </form>

    </div>
  );
}