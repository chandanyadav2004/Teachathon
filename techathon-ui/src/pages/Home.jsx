import React from "react";

const nav = ["Home", "Games", "Sponsors", "About", "Contact", "Login"];

export default function Home() {
  return (
    <header className="w-full flex justify-center py-5 z-40 pointer-events-auto">
      <div
        className="max-w-[1400px] w-full mx-4 px-8 py-3 rounded-lg
                   border border-green-400/30 bg-black/30 backdrop-blur-md
                   flex items-center justify-between font-mono text-green-300"
      >
        {/* Left: logo-like prompt and title */}
        <div className="flex items-center gap-4">
          {/* prompt icon */}
          <div className="px-2 py-1 rounded-md border border-green-300/10 flex items-center">
            <span className="text-green-200 font-bold">&gt;_</span>
          </div>

          <div className="text-xl font-bold tracking-wider select-none">
            TECHATHON 2025
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-12 text-lg">
          {nav.map((n) => (
            <a
              key={n}
              href={"#" + n.toLowerCase()}
              className="hover:text-green-100 transition-transform transform hover:-translate-y-[2px]"
            >
              {n}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
