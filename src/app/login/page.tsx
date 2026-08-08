// The password gate's login form. src/proxy.ts sends anyone without a
// valid cookie here. Submitting calls the `login` Server Action, which
// checks the password and, if correct, sets the cookie and redirects back
// into the app.

import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const { error } = await searchParams;

  return (
    <main style={{ maxWidth: 360, margin: "0 auto", padding: "6rem 1rem" }}>
      <h1>Project Director</h1>

      <form action={login} style={{ marginTop: "1.5rem" }}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            font: "inherit",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "0.75rem",
            width: "100%",
            padding: "0.5rem 1.25rem",
            borderRadius: 4,
            border: "1px solid #333",
            background: "#333",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>

      {error && (
        <p style={{ marginTop: "1rem", color: "#b00020" }}>
          Incorrect password.
        </p>
      )}
    </main>
  );
}
