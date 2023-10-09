import { NextResponse } from "next/server"

export function middleware(req, event) {
  const res = {
    isSignedIn: true,
    session: { firstName: "something", lastName: "else" },
  } // This "simulates" a response from an auth provider
  if (res.isSignedIn) {
    // Continue to /app/index.js
    return NextResponse.next().cookie("cookie_key", "cookie_value") // <--- SET COOKIE
  } else {
    // Redirect user
    return NextResponse.redirect("/signin")
  }
}
