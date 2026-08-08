// Runs on the server before every page and Server Action reaches the app.
// If the request doesn't carry a valid signed cookie, it's redirected to
// /login. In Next.js 16 this file (and the exported `proxy` function) is
// what used to be called "middleware" — see
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md
//
// Server Actions (like the chat page's askProjectDirector) aren't separate
// routes — they're POST requests to the page that defines them. Since this
// file has no matcher excluding any app page, a Server Action call without
// the cookie gets redirected exactly like a page visit would, with nothing
// extra to configure.

import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, isValidAuthCookie } from "@/lib/auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login page (and the Server Action it submits to) must stay
  // reachable without the cookie — otherwise nobody could ever log in.
  if (pathname === "/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(AUTH_COOKIE)?.value;
  if (isValidAuthCookie(cookie)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

// Skip the gate only for Next's own static assets. Everything else —
// every page, every Server Action — goes through the check above.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
