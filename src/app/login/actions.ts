// Server Action for the login form. Runs on the server when the password
// form on /login is submitted: checks the password against
// SITE_PASSWORD, and if it matches, sets the signed cookie src/proxy.ts
// checks on every later request.

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, isCorrectPassword, signAuthCookie } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string" || !isCorrectPassword(password)) {
    redirect("/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, signAuthCookie(), {
    httpOnly: true, // client-side JS can't read it
    secure: process.env.NODE_ENV === "production", // only sent over https in prod
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days, then you'll need to log in again
  });

  redirect("/");
}
