import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Hero.jsx (updated)
 *
 * - Fixes duplicated right-side content (now rendered only once)
 * - Keeps looping typing for title and right code box
 * - Responsive: mobile stacks (left then right), tablet/desktop two-column
 * - Includes overlay image path (your uploaded file) as a constant for easy use
 *
 * If you previously saw the right column twice, that was caused by rendering
 * two separate right-side blocks — this file consolidates everything into a
 * single right column.
 */

// Decorative overlay path (from your uploads). The environment will map this path.
const OVERLAY_IMG = "/mnt/data/c86c9975-8809-4a4a-9533-635312aec55a.png";

export default function Hero() {
  const fullTitle = "TECHATHON 2025";
  const [titleText, setTitleText] = useState("");
  const mountedRef = useRef(true);

  // Title typing loop (type -> pause -> delete -> pause -> repeat)
  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;

    async function loopTitle() {
      while (!cancelled && mountedRef.current) {
        // type
        for (let i = 1; i <= fullTitle.length; i++) {
          if (cancelled || !mountedRef.current) return;
          setTitleText(fullTitle.slice(0, i));
          await new Promise((r) => setTimeout(r, 110));
        }
        // pause fully typed
        await new Promise((r) => setTimeout(r, 900));
        // delete
        for (let i = fullTitle.length - 1; i >= 0; i--) {
          if (cancelled || !mountedRef.current) return;
          setTitleText(fullTitle.slice(0, i));
          await new Promise((r) => setTimeout(r, 60));
        }
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    loopTitle();
    return () => {
      cancelled = true;
      mountedRef.current = false;
    };
  }, []);

  // Right-box typing loop (single instance)
  const lines = ["> challenge.start()", "Loading..."];
  const [boxLines, setBoxLines] = useState(["", ""]);
  const boxMounted = useRef(true);

  useEffect(() => {
    boxMounted.current = true;
    let cancelled = false;

    async function boxLoop() {
      while (!cancelled && boxMounted.current) {
        // type first line
        let s = "";
        for (let i = 0; i <= lines[0].length; i++) {
          if (cancelled || !boxMounted.current) return;
          s = lines[0].slice(0, i);
          setBoxLines([s, ""]);
          await new Promise((r) => setTimeout(r, 70));
        }

        // short pause
        await new Promise((r) => setTimeout(r, 500));

        // type second line
        let t = "";
        for (let j = 0; j <= lines[1].length; j++) {
          if (cancelled || !boxMounted.current) return;
          t = lines[1].slice(0, j);
          setBoxLines([s, t]);
          await new Promise((r) => setTimeout(r, 100));
        }

        // hold then clear
        await new Promise((r) => setTimeout(r, 1400));
        setBoxLines(["", ""]);
        await new Promise((r) => setTimeout(r, 600));
      }
    }

    boxLoop();
    return () => {
      cancelled = true;
      boxMounted.current = false;
    };
  }, []);

  return (
    <section className="w-full flex relative justify-center items-center lg:px-4 lg:py-10 lg:my-50 sm:p-0 lg:top-10 sm:m-0 md:my-20" >
      {/* You can optionally render the overlay image behind the hero (uncomment if needed) */}
      {/* <img src={OVERLAY_IMG} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" /> */}

      <div className="w-full max-w-[1100px] grid grid-cols-12 gap-6 items-start min-h-[calc(100vh-88px)]">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <div className="mx-auto md:mx-0">
            <h1 className="font-mono text-[48px] md:text-[64px] leading-[1.02] text-green-300 font-bold mb-4 text-center md:text-left">
              <div className="text-2xl  md:text-lg text-green-200/80 mb-2 sm:text-lg text-center md:text-left">Welcome to</div>
              <div>
                <span className="tracking-wide">
                  {titleText}
                  <span
                    className={`inline-block ml-1 w-3 h-6 align-middle bg-green-200 animate-blink ${
                      titleText.length === fullTitle.length ? "opacity-60" : "opacity-100"
                    }`}
                  />
                </span>
              </div>
            </h1>

            <p className="text-green-200/90 font-mono text-base md:text-lg mb-6 text-center md:text-left">
              48 Hours. 12 Challenges. ₹1,00,000 Prize Pool.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start">
              <a href="/signup" ><button
                className="w-full sm:w-auto px-6 py-3 rounded-md border border-green-400/50 text-green-100 font-medium
                           transition transform hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,255,150,0.12)] hover:ring-2 hover:ring-green-400/30"
              >
                Register Now
              </button>
              </a>

               <a href="/#games" >
              <button  
                className="w-full sm:w-auto px-6 py-3 rounded-md border border-green-400/40 text-green-100 font-medium
                           transition transform hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,255,150,0.12)] hover:ring-2 hover:ring-green-400/30"
              >
                View Challenges
              </button>
              </a> 
            </div>
          </div>
        </div>

        {/* RIGHT - single consolidated right-side content (not duplicated) */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end items-start">
          <div className="w-full max-w-md space-y-4">
            {/* Register box (mobile prominent block) */}
            {/* <div className="p-3 border border-green-400/25 rounded-md bg-black/35">
              <div className="font-mono text-sm text-green-200 mb-2">REGISTER</div>
              <div className="border-t border-green-400/10 pt-3 font-mono text-sm text-green-300">
                <div className="mb-2">&gt; challenge.start()</div>
                <div className="text-green-400/70">Loading...</div>
              </div>
            </div> */}

            {/* Code box (single instance) */}
            <div className="p-4 text-lg w-100 sm:text-lg md:text-sm h-90  sm:h-7 md:h-60 border border-green-400/35 rounded-md bg-black/30">
              <div className="h-8 border-b border-green-400/10 flex items-center px-3">
                <span className="text-green-200">&gt;</span>
              </div>

              <div className="py-3 px-2 font-mono text-green-200  min-h-[68px]">
                <div className="text-green-300">
                  {boxLines[0]}
                  <span className="inline-block ml-1 w-2 h-4 bg-green-200 animate-blink" />
                </div>
                <div className="text-green-400/70">
                  {boxLines[1]}
                  {boxLines[1].length < lines[1].length && (
                    <span className="inline-block ml-1 w-2 h-4 bg-green-200 animate-blink" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blink keyframes */}
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-blink { animation: blink 900ms steps(1,end) infinite; display:inline-block; vertical-align:middle; }
      `}</style>
    </section>
  );
}
