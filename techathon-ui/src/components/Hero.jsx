import React, { useEffect, useState, useRef } from "react";

/**
 * Hero component:
 * - looping typing + deleting for the main title
 * - looping typing for right code box (line1 then line2)
 * - centered with slight top padding
 * - buttons glow on hover
 * - tighter left-right spacing (max-w reduced and gap reduced)
 */
export default function Hero() {
  // MAIN TITLE typing loop
  const fullTitle = "TECHATHON 2025";
  const [titleText, setTitleText] = useState("");
  const titleIndexRef = useRef(0);
  const titleActionRef = useRef("typing"); // 'typing' or 'deleting'
  const titleMountedRef = useRef(true);

  useEffect(() => {
    titleMountedRef.current = true;

    async function typeLoop() {
      while (titleMountedRef.current) {
        // typing
        titleActionRef.current = "typing";
        for (let i = 1; i <= fullTitle.length; i++) {
          if (!titleMountedRef.current) return;
          setTitleText(fullTitle.slice(0, i));
          await new Promise((r) => setTimeout(r, 110));
        }

        // pause when fully typed
        await new Promise((r) => setTimeout(r, 900));

        // deleting
        titleActionRef.current = "deleting";
        for (let i = fullTitle.length - 1; i >= 0; i--) {
          if (!titleMountedRef.current) return;
          setTitleText(fullTitle.slice(0, i));
          await new Promise((r) => setTimeout(r, 60));
        }

        // small pause before typing again
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    typeLoop();

    return () => {
      titleMountedRef.current = false;
    };
  }, []);

  // RIGHT BOX typing loop
  const lines = ["> challenge.start()", "Loading..."];
  const [boxLines, setBoxLines] = useState(["", ""]);
  const boxMountedRef = useRef(true);

  useEffect(() => {
    boxMountedRef.current = true;

    async function boxLoop() {
      while (boxMountedRef.current) {
        // type first line
        let s = "";
        for (let i = 0; i <= lines[0].length; i++) {
          if (!boxMountedRef.current) return;
          s = lines[0].slice(0, i);
          setBoxLines((prev) => [s, ""]);
          await new Promise((r) => setTimeout(r, 70));
        }

        // short pause
        await new Promise((r) => setTimeout(r, 500));

        // type second line
        let t = "";
        for (let j = 0; j <= lines[1].length; j++) {
          if (!boxMountedRef.current) return;
          t = lines[1].slice(0, j);
          setBoxLines((prev) => [s, t]);
          await new Promise((r) => setTimeout(r, 100));
        }

        // hold visible
        await new Promise((r) => setTimeout(r, 1200));

        // clear both lines (simulate restart)
        for (let k = 0; k < 2; k++) {
          if (!boxMountedRef.current) return;
          setBoxLines(["", ""]);
          await new Promise((r) => setTimeout(r, 220));
        }

        // short gap before next loop
        await new Promise((r) => setTimeout(r, 300));
      }
    }

    boxLoop();

    return () => {
      boxMountedRef.current = false;
    };
  }, []);

  return (
    <section className="w-full flex justify-center items-center min-h-screen pt-8 px-4">
      <div className="max-w-[1200px] w-full grid grid-cols-12 gap-6 items-start">
        {/* LEFT: heading + details */}
        <div className="col-span-6">
          <h2 className="font-mono text-[64px] leading-[1.02] text-green-300 font-bold mb-6">
            <div className=" text-green-200/80 mb-3 text-6xl ">Welcome to</div>
            <div className="mt-2">
              <span className="tracking-wide">
                {titleText}
                <span
                  className={`inline-block ml-1 w-3 h-6 align-middle bg-green-200 animate-blink ${
                    titleText.length === fullTitle.length ? "opacity-60" : "opacity-100"
                  }`}
                />
              </span>
            </div>
          </h2>

          <p className="text-green-200/90 font-mono text-lg mb-6">
            48 Hours. 12 Challenges. ₹1,00,000 Prize Pool.
          </p>

          <div className="flex gap-6">
            <button
              className="
                px-6 py-3 rounded-md border border-green-400/50 text-green-100 font-medium
                transition transform
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(0,255,150,0.12)]
                hover:ring-2 hover:ring-green-400/40
                focus:outline-none
              "
            >
              Register Now
            </button>

            <button
              className="
                px-6 py-3 rounded-md border border-green-400/40 text-green-100 font-medium
                transition transform
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(0,255,150,0.12)]
                hover:ring-2 hover:ring-green-400/40
                focus:outline-none
              "
            >
              View Challenges
            </button>
          </div>
        </div>

        {/* RIGHT: typed code box */}
        <div className="col-span-6 flex justify-end">
          <div className="w-full max-w-sm border border-green-400/40 rounded-md p-4 bg-black/30">
            <div className="h-10 border-b border-green-400/10 flex items-center px-3">
              <span className="text-green-200">&gt;</span>
            </div>

            <div className="py-4 px-3 font-mono text-green-200 text-xl space-y-2 min-h-[300px] min-w-[400px]">
              <div className="text-green-300">
                {boxLines[0]}
                <span className="inline-block ml-1 w-2 h-4 bg-green-200 animate-blink" />
              </div>
              <div className="text-green-400/70">
                {boxLines[1]}
                {/* second cursor (only show when second line typing) */}
                {boxLines[1].length < lines[1].length && (
                  <span className="inline-block ml-1 w-2 h-4 bg-green-200 animate-blink" />
                )}
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
