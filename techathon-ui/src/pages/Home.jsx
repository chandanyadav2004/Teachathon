import React, { useEffect, useState } from "react";
import MatrixBackground from "../components/MatrixBackground";
import Hero from "../components/Hero";
import Games from "./Games";
import About from "./About";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Footer from "./Footer";
// decorative overlay (your uploaded mockup texture)
const OVERLAY_IMG = "/mnt/data/c86c9975-8809-4a4a-9533-635312aec55a.png";

export default function Home() {
  const nav = ["Home", "Games", "Sponsors", "About", "Contact", 'Login/SignUp'];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll while menu is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerHeight = 72; // adjust if header style changes
  const extraOffset = 12; // breathing room so content not flush with header

  useEffect(() => {
    // scroll to the hash with offset
    function scrollToHash() {
      const hash = window.location.hash; // e.g. "#contact"
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          // compute top with header offset
          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - headerHeight - extraOffset;
          // use smooth scroll; fallback to immediate if unsupported
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
      } else {
        // no hash: optionally scroll to top (commented out)
        // window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    // If user navigates directly to /contact (path != "/") convert to "/#contact"
    function normalizePathToHash() {
      const pathname = window.location.pathname || "/";
      // If pathname is like "/contact" or "/about" and there is no hash, rewrite to "/#contact"
      if (pathname !== "/" && pathname !== "" && window.location.hash === "") {
        const section = pathname.replace(/^\/+/, "").toLowerCase();
        if (section) {
          // Replace history entry to avoid a real redirect/reload
          window.history.replaceState(null, "", "/#" + section);
        }
      }
    }

    // initial normalization + scroll
    normalizePathToHash();
    // slight delay to allow layout/images to settle
    setTimeout(scrollToHash, 60);

    // handle future hash changes (links, back/forward)
    window.addEventListener("hashchange", scrollToHash);
    // handle history navigation that may not trigger hashchange (defensive)
    window.addEventListener("popstate", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return (
    <div className="min-h-screen mt-8 ms:mt-0 lg:mt-2 bg-black relative overflow-hidden text-green-200" id="home">
      {/* optional animated matrix background (uncomment if you have MatrixBackground) */}
      <MatrixBackground padding={70} fontSize={18} speed={0.35} color="#003300" />

      {/* decorative overlay texture — keeps the matrix feel from your mockups */}
      <img
        src={OVERLAY_IMG}
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply"
      />

      {/* Header (fixed) */}
      <header className="fixed top-10 left-0 right-0 z-50">
        <div
          className={`mx-auto max-w-[1100px] w-[calc(100%-1rem)] flex items-center justify-between
            px-4 py-3 rounded-b-xl backdrop-blur-md transition-all ${
              scrolled ? "bg-black/40 border border-green-400/40 shadow-lg" : "bg-black/30 border border-green-400/30"
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 select-none">
              <div className="px-2 py-1 rounded-md border border-green-300/10 flex items-center">
                <span className="text-green-200 font-bold">&gt;_</span>
              </div>
              <a href="/#hero" className="text-base font-bold tracking-wide text-green-300">TECHATHON 2025</a>
            </div>
            <div className="sm:hidden text-green-300 font-medium font-mono">TECHATHON</div>
          </div>

          {/* nav: visible on desktop (lg) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-mono">
            {nav.map((n) => (
              // ensure we use root-hash ("/#...") so direct /contact URLs behave consistently
              <a
                key={n}
                href={"/#" + n.toLowerCase()}
                className="text-green-300 hover:text-green-100 px-2 py-1 transition"
              >
                {n}
              </a>
            ))}
          </nav>

          {/* hamburger: visible on tablet+mobile (below lg) */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="p-2 rounded-md border border-green-500/10 bg-black/20 text-green-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* spacer so main doesn't hide under fixed header */}
      <div style={{ height: headerHeight }} aria-hidden />

      {/* slide-over drawer for mobile & tablet (below lg) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        style={{ background: "rgba(0,0,0,0.5)" }}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[86%] max-w-[380px] bg-black/95 backdrop-blur-md transform transition-transform lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-green-400/10">
          <div className="text-green-300 font-bold font-mono">TECHATHON 2025</div>
          <button onClick={() => setOpen(false)} className="p-2 rounded-md border border-green-400/10">
            ✕
          </button>
        </div>

        <nav className="px-5 py-6 flex flex-col gap-4 text-green-200">
          {nav.map((n) => (
            <a
              key={n}
              href={"/#" + n.toLowerCase()}
              className="px-3 py-3 rounded-md hover:bg-green-900/10"
              onClick={() => setOpen(false)}
            >
              {n}
            </a>
          ))}

          <div className="mt-4 border-t border-green-400/10 pt-4">
            <a
              href="/#register"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md border border-green-400/40 text-green-100"
            >
              Register
            </a>
          </div>
        </nav>
      </aside>

      {/* MAIN PAGE */}
      <main className="relative z-20 pt-[72px] pb-[144px]">
        <Hero />
        {/* ensure each page component contains an element with the matching id (lowercase),
            for example <section id="games"> inside Games component */}
        <Games />
        <About />
        <Sponsors />
        <Contact />
      </main>
        
      
     
    </div>
  );
}
