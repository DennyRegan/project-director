// The site password gate. Project Director is public on Vercel now, so
// every request needs to prove it knows the password before it reaches a
// page or Server Action. This file only holds that logic — the request
// handling that actually uses it lives in src/proxy.ts (the check) and
// src/app/login/actions.ts (the login form).

import { createHmac, timingSafeEqual } from "crypto";

export const AUTH_COOKIE = "pd_auth";

function getPassword(): string {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    throw new Error("SITE_PASSWORD environment variable is not set");
  }
  return password;
}

// Turns the password into the value we put in the cookie. We never store
// the password itself in the cookie — only this derived signature. It's an
// HMAC (a keyed hash) of a fixed string, keyed by SITE_PASSWORD, so only
// someone who knows the password could have produced it, and having the
// cookie value doesn't reveal the password.
export function signAuthCookie(): string {
  return createHmac("sha256", getPassword())
    .update(AUTH_COOKIE)
    .digest("hex");
}

// Checks a password typed into the login form.
export function isCorrectPassword(candidate: string): boolean {
  return timingSafeCompare(candidate, getPassword());
}

// Checks a cookie value sent back by the browser on a later request.
export function isValidAuthCookie(candidate: string | undefined): boolean {
  if (!candidate) return false;
  return timingSafeCompare(candidate, signAuthCookie());
}

// A plain `===` string comparison exits as soon as it finds a mismatched
// character, so how long it takes leaks how many leading characters an
// attacker guessed correctly. timingSafeEqual always takes the same time,
// but only works on equal-length buffers, so we check length first — a
// length mismatch is safe to leak, since password/cookie lengths aren't
// secret.
function timingSafeCompare(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}
