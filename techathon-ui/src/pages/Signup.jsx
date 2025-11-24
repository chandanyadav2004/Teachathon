// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
/**
 * Signup.jsx
 * - Tailwind-based neon signup card (desktop/mobile).
 * - Uses uploaded image as page background texture.
 * - Simple client-side validation and mock submit handler.
 *
 * Usage: import Signup from "./pages/Signup"; <Signup />
 */

const BG_IMG = "/mnt/data/Screenshot 2025-11-24 052233.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/#games" },
  { label: "Sponsors", to: "/#sponsors" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
  { label: "login", to: "/login" },
];


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // mobile nav open state
    const [open, setOpen] = useState(false);

  function validate() {
    if (!name.trim()) return "Name is required";
    if (!email) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setSubmitting(true);
    try {
      // mock submit (replace with real API)
      await new Promise((r) => setTimeout(r, 700));
      alert("Signed up (demo) — replace with real signup flow");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
    <header className="fixed top-10 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1100px] w-[calc(100%-1rem)] px-4 py-3 rounded-b-xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="font-mono font-bold text-green-300">
                TECHATHON 2025
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
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

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="text-green-300 text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-green-400/40 rounded"
              >
                {/* simple hamburger icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile overlay (semi-transparent) */}
        {/* show only on small screens when open */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!open}
        />

        {/* Mobile slide menu */}
        <aside
          className={`fixed top-0 right-0 h-full w-64 max-w-[80%] bg-black/95 backdrop-blur-md border-l border-green-400/20 transform transition-transform duration-300 ease-in-out lg:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!open}
        >
          <div className="relative h-full">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-green-300 text-3xl absolute top-4 right-4 p-2 focus:outline-none focus:ring-2 focus:ring-green-400/40 rounded"
            >
              {/* close icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <nav className="flex flex-col mt-20 px-6 space-y-4" aria-label="Mobile primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    "text-green-300 font-mono text-lg pb-2 border-b border-green-400/10 " + (isActive ? "text-green-100" : "")
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>
      </header>


    <div
      className="min-h-screen flex items-center sm:mt-10 justify-center bg-black text-green-200 px-4"
      style={{
        backgroundImage: `url(${BG_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-xs">
        {/* outer neon frame */}
        <div className="border border-green-400/30 rounded-sm p-5">
          {/* inner card */}
          <div className="border border-green-400/20 rounded-sm p-5 bg-black/60 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-green-300 mb-4 tracking-wider text-center">SIGN UP</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-green-200/70 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border border-green-400/20 rounded px-3 py-2 font-mono text-green-100 placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-green-200/70 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-green-400/20 rounded px-3 py-2 font-mono text-green-100 placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-mono text-green-200/70 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border border-green-400/20 rounded px-3 py-2 font-mono text-green-100 placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                  placeholder="••••••"
                  autoComplete="new-password"
                  aria-required="true"
                />
              </div>

              {error && (
                <div className="text-sm text-rose-400 font-mono mt-1" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 mt-1 border border-green-400/40 rounded font-mono text-sm bg-black/10 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-green-400/30 transition"
                aria-busy={submitting}
              >
                <span className="inline-block px-2 py-1 border border-green-400/20 rounded-sm text-green-200/90">›</span>
                <span>{submitting ? "Signing up..." : "Sign Up"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* thin decorative baseline to match screenshot */}
        <div className="mt-4 pointer-events-none">
          <div className="w-full border border-green-400/20 rounded-md h-0" />
        </div>
      </div>
    </div>
    </>
  );
}
