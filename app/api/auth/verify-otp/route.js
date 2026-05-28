import { NextResponse } from "next/server";

import db from "@/lib/mysql";

export async function POST(req) {

  try {

    const { email, otp } = await req.json();

    console.log("EMAIL:", email);
    console.log("OTP:", otp);

    // FIND USER

    const [users] = await db.query(

      "SELECT * FROM users WHERE email = ?",

      [email]

    );

    // USER NOT FOUND

    if (users.length === 0) {

      return NextResponse.json({

        success: false,

        message: "User not found",

      });

    }

    const user = users[0];

    console.log("DATABASE OTP:", user.otp);

    // CHECK OTP

    if (String(user.otp) !== String(otp)) {

      return NextResponse.json({

        success: false,

        message: "Invalid OTP",

      });

    }

    // VERIFY USER

    await db.query(

      `UPDATE users 
       SET isVerified = ?, otp = NULL, otpExpiry = NULL
       WHERE email = ?`,

      [true, email]

    );

    return NextResponse.json({

      success: true,

      message: "Verification Successful",

    });

  } catch (error) {

    console.log("VERIFY ERROR:", error);

    return NextResponse.json({

      success: false,

      message: error.message,

    });

  }

}