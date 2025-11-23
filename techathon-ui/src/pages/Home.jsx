import React, { useEffect, useState } from "react";

// Uploaded logo path (will be transformed to a usable URL by your environment)
const LOGO = "/mnt/data/782e13f5-03f0-478e-59d7b75021c6.png";

export default function Home() {
  const nav = ["Home", "Games", "Sponsors", "About", "Contact", "Login"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header height: use this value in your page wrapper as padding-top (example below)
  const headerHeight = 72; // px (adjust if you change padding/py)

  return (
    <>
      {/* Fixed header: always visible at top */}
      <header
        className="fixed top-10 left-0 right-0 z-50 pointer-events-auto"
        role="banner"
        aria-label="Main header"
      >
        <div
          className={
            `mx-auto max-w-[1200px] w-[calc(100%-1rem)] 
             flex items-center justify-between px-6 py-3 rounded-b-xl
             bg-black/30 backdrop-blur-md transition-all
             ` +
            (scrolled
              ? " border border-green-400/45 shadow-[0_10px_30px_rgba(0,255,150,0.08)]"
              : " border border-green-400/30")
          }
          style={{ margin: "0 auto" }}
        >
          {/* Left: logo/prompt + title */}
          <div className="flex items-center gap-4">
            <img
              src={LOGO}
              alt="logo"
              className="w-10 h-10 object-contain rounded-md border border-green-400/10"
              draggable={false}
            />

            <div className="flex items-center gap-3 select-none">
              <div className="px-2 py-1 rounded-md border border-green-300/10 flex items-center">
                <span className="text-green-200 font-bold">&gt;_</span>
              </div>
              <div className="text-xl font-bold tracking-wider text-green-300">
                TECHATHON 2025
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-10 text-lg" aria-label="Primary">
            {nav.map((n) => (
              <a
                key={n}
                href={"#" + n.toLowerCase()}
                className="text-green-300 hover:text-green-100 transition-transform transform hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-green-400/20 rounded"
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* IMPORTANT: Add top spacing so your page content doesn't sit behind the fixed header.
          Example usage: put <div style={{paddingTop: headerHeight}}> as root wrapper for the page content.
          You can also use Tailwind: <div className="pt-[72px]"> ... </div>
       */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}
