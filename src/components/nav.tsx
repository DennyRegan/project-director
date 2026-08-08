// A small top nav bar so you can move between pages on a phone without
// typing URLs. Has to be a Client Component ('use client') because it uses
// usePathname, a hook that reads the current URL — that only exists in the
// browser, not while the page is being rendered on the server.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat" },
];

export function Nav() {
  const pathname = usePathname();

  // Don't show app navigation on the login page — there's nothing to
  // navigate to until you're signed in.
  if (pathname === "/login") return null;

  return (
    <nav
      style={{
        display: "flex",
        gap: "1.25rem",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      {links.map((link) => {
        const active =
          link.href === "/projects"
            ? pathname.startsWith("/projects")
            : pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ fontWeight: active ? 600 : 400 }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
