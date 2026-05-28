import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/lib/mysql";

export async function GET(req) {

  try {

    const token =
      req.cookies.get("token")?.value;

    if (!token) {

      return NextResponse.json({

        success: false,

      });
    }

    const decoded =
      jwt.verify(

        token,
        "karan123secret"
      );

    const [users] =
      await db.query(

        "SELECT id, name, email FROM users WHERE id = ?",

        [decoded.id]
      );

    if (users.length === 0) {

      return NextResponse.json({

        success: false,

      });
    }

    return NextResponse.json({

      success: true,
      user: users[0],

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({

      success: false,

    });
  }
}