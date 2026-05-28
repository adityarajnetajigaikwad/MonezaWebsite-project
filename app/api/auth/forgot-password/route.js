import { NextResponse } from "next/server";

import User from "@/models/User";

import { connectDB } from "@/lib/db";

import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {

  try {

    await connectDB();

    const { email } =
      await req.json();

    // find user
    const user =
      await User.findOne({ email });

    if (!user) {

      return NextResponse.json({

        success: false,
        message: "User not found",

      });

    }

    // generate otp
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // save otp
    user.otp = otp;

    user.otpExpiry =
      new Date(Date.now() + 5 * 60 * 1000);

    await user.save();

    // send email
    await sendEmail(email, otp);

    return NextResponse.json({

      success: true,
      message: "Reset OTP Sent",

    });

  } catch (error) {

    return NextResponse.json({

      success: false,
      message: error.message,

    });

  }
}