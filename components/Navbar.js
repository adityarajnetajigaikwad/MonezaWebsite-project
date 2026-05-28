"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#162d8f]/100 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* LOGO */}

        <h1 className="text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">

          Moneza

        </h1>

        {/* MENU */}

        <div className="flex gap-10 text-white font-medium text-lg">

          <Link
            href="/"
            className="hover:text-cyan-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-cyan-300 transition duration-300"
          >
            About
          </Link>

          <Link
            href="/courses"
            className="hover:text-cyan-300 transition duration-300"
          >
            Courses
          </Link>

          <Link
            href="/contact"
            className="hover:text-cyan-300 transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-4">

          <Link href="/login">

            <button className="border border-white/30 px-5 py-2 rounded-xl text-white hover:bg-white/10 transition duration-300">

              Login

            </button>

          </Link>

          <Link href="/register">

            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition duration-300">

              Register

            </button>

          </Link>

        </div>

      </div>

    </nav>
  );
}