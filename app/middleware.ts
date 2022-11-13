import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { app } from "../lib/mongodb";

const Middleware = (request: NextRequest) => {
  //@ts-ignore
  if (!app.currentUser || app.currentUser?.identities.length < 1) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: "/notes",
};

export default Middleware;
