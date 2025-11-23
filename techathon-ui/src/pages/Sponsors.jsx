// src/components/Sponsors.jsx
import React from "react";

/**
 * Sponsors.jsx
 *
 * - Desktop-first neon sponsors grid (3 columns × 2 rows)
 * - Centered, monospace neon title
 * - Framed rounded container with thin neon border
 * - Uses the uploaded image as a placeholder/logo source; your environment will map this local path:
 *
 *   /mnt/data/79dab2c9-2a94-4234-adc8-4d41f9b81973.png
 *
 * - Accepts an optional `sponsors` prop (array of { id, name, logo }) to render custom logos.
 *
 * Usage:
 *   import Sponsors from "./components/Sponsors";
 *   <Sponsors />
 */

const DEFAULT_LOGO = "logo-sponsers";

export default function Sponsors({ sponsors }) {
  // default sample sponsors (6 slots)
  const list = sponsors ?? [
    { id: 1, name: "SPONSOR 1", logo: DEFAULT_LOGO },
    { id: 2, name: "SPONSOR 2", logo: DEFAULT_LOGO },
    { id: 3, name: "SPONSOR 3", logo: DEFAULT_LOGO },
    { id: 4, name: "SPONSOR 4", logo: DEFAULT_LOGO },
    { id: 5, name: "SPONSOR 5", logo: DEFAULT_LOGO },
    { id: 6, name: "SPONSOR 6", logo: DEFAULT_LOGO },
  ];

  return (
    <section className="w-full py-12 relative z-20 px-6" id="sponsors">
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-mono text-green-300 text-left mb-6">Sponsors</h2>

        {/* Framed container */}
        <div
          className="w-full rounded-md p-6 border border-green-400/40 bg-black/30"
          role="region"
          aria-label="Sponsors"
        >
          {/* Grid: 3 columns x 2 rows on desktop, responsive collapse on smaller screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {list.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-center h-28 md:h-32 rounded-md bg-black/20 border border-transparent
                           transition-all hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,255,150,0.06)]"
                title={s.name}
              >
                {/* Logo (if available) — keeps aspect ratio and provides fallback to name */}
                {s.logo ? (
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-20 md:max-h-24 object-contain opacity-90"
                  />
                ) : (
                  <div className="font-mono text-lg md:text-xl text-green-200 tracking-wider">
                    {s.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
