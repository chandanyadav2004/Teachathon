import React from "react";

export default function DesktopHeader() {
  const nav = ["Home", "Games", "Sponsors", "About", "Contact", "Login"];

  return (
    <header className="w-full flex justify-center py-5 z-40 pointer-events-auto">
      <div
        className="max-w-[1200px] w-full mx-2 px-6 py-3 rounded-lg
                   border border-green-400/30 bg-black/30 backdrop-blur-md
                   flex items-center justify-between font-mono text-green-300"
      >
        <div className="flex items-center gap-4">
          <div className="px-2 py-1 rounded-md border border-green-300/10 flex items-center">
            <span className="text-green-200 font-bold">&gt;_</span>
          </div>

          <div className="text-xl font-bold tracking-wider select-none">
            TECHATHON 2025
          </div>
        </div>

        <nav className="flex items-center gap-10 text-lg">
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
