import React from "react";
import { Link, NavLink } from "react-router-dom";

const nav = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/#games" },
  { label: "Sponsors", to: "/#sponsors" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
  { label: "Login", to: "/login" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1100px] w-[calc(100%-1rem)] px-4 py-3 rounded-b-xl backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-mono font-bold text-green-300">TECHATHON 2025</Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  "text-green-300 px-2 py-1 font-mono " + (isActive ? "text-green-100" : "")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
