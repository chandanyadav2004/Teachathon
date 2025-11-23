import React from "react";

/**
 * Hero component with left large title + CTAs and right code box.
 * Accepts optional children; desktop layout only.
 */
export default function Hero() {
  return (
    <section className="w-full flex justify-center mt-8 px-6">
      <div className="max-w-[1400px] w-full grid grid-cols-12 gap-8 items-start">
        {/* LEFT: big heading + details */}
        <div className="col-span-7">
          <h2 className="font-mono text-[64px] leading-[1.02] text-green-300 font-bold mb-6 drop-shadow-[0_6px_30px_rgba(0,255,150,0.06)]">
            <div>Welcome to</div>
            <div className="mt-2">Techathon 2025</div>
          </h2>

          <p className="text-green-200/90 font-mono text-lg mb-6">
            48 Hours. 12 Challenges. ₹1,00,000 Prize Pool.
          </p>

          <div className="flex gap-6">
            <button className="px-6 py-3 rounded-md border border-green-400/50 text-green-100 font-medium
                               hover:bg-green-900/10 transition">
              Register Now
            </button>

            <button className="px-6 py-3 rounded-md border border-green-400/40 text-green-100 font-medium
                               hover:bg-green-900/10 transition">
              View Challenges
            </button>
          </div>
        </div>

        {/* RIGHT: neon code box */}
        <div className="col-span-5">
          <div className="w-full max-w-md border border-green-400/40 rounded-md p-4 bg-black/30">
            <div className="h-10 border-b border-green-400/10 flex items-center px-3">
              <span className="text-green-200">&gt;</span>
            </div>

            <div className="py-4 px-3 font-mono text-green-200 text-sm space-y-2">
              <div className="text-green-300">&gt; challenge.start()</div>
              <div className="text-green-400/70">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
