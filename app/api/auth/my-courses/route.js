import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/lib/mysql";

export async function GET(req) {

  try {

    // TOKEN

    const token =
      req.cookies.get("token")?.value;

    if (!token) {

      return NextResponse.json({

        success: false,
        courses: [],

      });
    }

    // VERIFY

    const decoded =
      jwt.verify(

        token,
        "karan123secret"
      );

    // GET COURSES

    const [courses] =
      await db.query(

        `SELECT courses.*
         FROM enrollments
         JOIN courses
         ON enrollments.course_id = courses.id
         WHERE enrollments.user_id = ?`,

        [decoded.id]
      );

    return NextResponse.json({

      success: true,
      courses,

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({

      success: false,
      courses: [],

    });
  }
}