import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/lib/mysql";

export async function POST(req) {

  try {

    // TOKEN

    const token =
      req.cookies.get("token")?.value;

    if (!token) {

      return NextResponse.json({

        success: false,
        message: "Please login first",

      });
    }

    // VERIFY TOKEN

    const decoded =
      jwt.verify(

        token,
        "karan123secret"
      );

    // GET COURSE ID

    const { courseId } =
      await req.json();

    // CHECK ALREADY ENROLLED

    const [existing] =
      await db.query(

        "SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?",

        [

          decoded.id,
          courseId,

        ]
      );

    if (existing.length > 0) {

      return NextResponse.json({

        success: false,
        message:
          "Already enrolled",

      });
    }

    // INSERT

    await db.query(

      "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)",

      [

        decoded.id,
        courseId,

      ]
    );

    return NextResponse.json({

      success: true,
      message:
        "Course enrolled successfully",

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({

      success: false,
      message:
        "Something went wrong",

    });
  }
}