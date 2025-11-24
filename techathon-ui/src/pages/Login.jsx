// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Login.jsx
 * - Tailwind-based neon login card (desktop/mobile).
 * - Uses uploaded image as page background texture.
 * - Simple client-side validation and mock submit handler.
 *
 * Usage: import Login from "./pages/Login"; <Login />
 */

const BG_IMG = "/mnt/data/cfdaa6a7-f76e-4957-bdd9-84cc6d465214.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/#games" },
  { label: "Sponsors", to: "/#sponsors" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
  { label: "Signup", to: "/signup" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // mobile nav open state
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function validate() {
    if (!email) return "Email is required";
    // simple email check
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email";
    if (!password) return "Password is required";
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
      // mock login delay - replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      // success (replace with actual auth)
      alert("Logged in (demo)");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ---------- HEADER ---------- */}
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

      {/* ---------- LOGIN SECTION ---------- */}
      <div
        id="login"
        className="min-h-screen flex items-center justify-center bg-black text-green-200 sm:mt-10" 
        style={{
          // subtle background texture using your uploaded file
          backgroundImage: `url(${BG_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-sm mx-4">
          {/* Card frame */}
          <div
            className="border border-green-400/40 rounded-md p-6 bg-black/60 backdrop-blur-sm"
            role="region"
            aria-labelledby="login-title"
          >
            <h2 id="login-title" className="font-mono text-xl text-green-300 mb-4 tracking-wider">
              LOGIN
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-green-200/70 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full bg-transparent border border-green-400/20 rounded px-3 py-2 font-mono text-green-100 placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                  aria-required="true"
                  aria-invalid={!!error && error.toLowerCase().includes("email")}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-green-200/70 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full bg-transparent border border-green-400/20 rounded px-3 py-2 font-mono text-green-100 placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                  aria-required="true"
                  aria-invalid={!!error && error.toLowerCase().includes("password")}
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
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 border border-green-400/40 rounded font-mono text-sm bg-black/10 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-green-400/40 transition"
                aria-busy={submitting}
              >
                {/* little caret icon like screenshot */}
                <span className="inline-block px-2 py-1 border border-green-400/20 rounded-sm text-green-200/90">›</span>
                <span>{submitting ? "Logging in..." : "Login"}</span>
              </button>
            </form>

            {/* Signup + Forgot Password */}
            <div className="mt-4 flex flex-col items-center font-mono text-sm">
              <Link
                to="/signup"
                className="text-green-300 hover:text-green-100 transition"
              >
                Create an Account
              </Link>

              <Link
                to="/forgot-password"
                className="mt-2 text-green-200/70 hover:text-green-100 transition"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* decorative outer border (to match screenshot thicker frame) */}
          <div className="mt-4 pointer-events-none">
            <div className="w-full border border-green-400/20 rounded-md h-0" />
          </div>
        </div>
      </div>
    </>
  );
}
