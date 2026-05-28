import { NextResponse } from "next/server";
import db from "@/lib/mysql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {

  try {

    const { email, password } =
      await req.json();

    const [users] =
      await db.query(

        "SELECT * FROM users WHERE email = ?",

        [email]
      );

    if (users.length === 0) {

      return NextResponse.json({

        success: false,
        message: "User not found",

      });
    }

    const user = users[0];

    if (user.is_verified !== 1) {

      return NextResponse.json({

        success: false,
        message:
          "Please verify your account first",

      });
    }

    const match =
      await bcrypt.compare(

        password,
        user.password
      );

    if (!match) {

      return NextResponse.json({

        success: false,
        message: "Wrong password",

      });
    }

    // TOKEN

    const token =
      jwt.sign(

        {

          id: user.id,

        },

        "karan123secret",

        {

          expiresIn: "7d",

        }
      );

    const response =
      NextResponse.json({

        success: true,
        message: "Login successful",

      });

    response.cookies.set(

      "token",
      token,

      {

        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",

      }
    );

    return response;

  } catch (error) {

    console.log(error);

    return NextResponse.json({

      success: false,
      message: "Server error",

    });
  }
}