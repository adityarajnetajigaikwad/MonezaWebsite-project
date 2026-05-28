import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

import { connectDB } from "@/lib/mysql";

export async function POST(req) {
  try {
    await connectDB();

    const { email, otp, newPassword } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // check otp
    if (user.otp !== otp) {
      return NextResponse.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // check expiry
    if (new Date() > user.otpExpiry) {
      return NextResponse.json({
        success: false,
        message: "OTP Expired",
      });
    }


    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // update password
    user.password = hashedPassword;
    user.otp = "";
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password Reset Successful",
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}