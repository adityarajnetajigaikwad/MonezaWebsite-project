import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import db from "@/lib/mysql";

import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {

  try {

    const { name, email, password } = await req.json();

    const [users] = await db.query(

      "SELECT * FROM users WHERE email = ?",

      [email]

    );

    if (users.length > 0) {

      return NextResponse.json({

        success: false,

        message: "User already exists",

      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(

      100000 + Math.random() * 900000

    ).toString();

    const otpExpiry = new Date(

      Date.now() + 5 * 60 * 1000

    );

    await db.query(

      `INSERT INTO users
      (name,email,password,otp,otpExpiry,isVerified)
      VALUES (?,?,?,?,?,?)`,

      [

        name,
        email,
        hashedPassword,
        otp,
        otpExpiry,
        false,

      ]

    );

    await sendEmail(email, otp);

    return NextResponse.json({

      success: true,

      message: "OTP Sent",

    });

  } catch (error) {

    console.log("REGISTER ERROR:", error);

    return NextResponse.json({

      success: false,

      message: error.message,

    });

  }

}