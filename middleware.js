import { NextResponse }
from "next/server";

export function middleware(req) {

  const token =
    req.cookies.get("token");

  // PROTECT DASHBOARD

  if (

    req.nextUrl.pathname
    === "/dashboard"

  ) {

    if (!token) {

      return NextResponse.redirect(

        new URL(

          "/login",

          req.url
        )
      );
    }
  }

  return NextResponse.next();
}