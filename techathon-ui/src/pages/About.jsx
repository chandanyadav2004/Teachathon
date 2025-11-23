import React from "react";

/**
 * AboutEvent.jsx
 *
 * Desktop-first layout: left text column, right framed image.
 * Uses Tailwind CSS for styling (monospace, neon green, borders, spacing).
 *
 * Image path uses the uploaded file (environment will map this to a URL).
 */
const EVENT_IMAGE = "VartakCollege.webp";

export default function About() {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: heading + content */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-mono text-green-300 mb-6">About Event</h3>

          {/* subtle divider */}
          <div className="h-1 bg-green-400/10 mb-6" />

          <div className="text-green-200 font-mono">
            <h4 className="text-lg md:text-xl font-semibold mb-4">About Vartak College</h4>

            <p className="text-green-200/80 mb-6 max-w-xl leading-relaxed">
              Vartak College is a technology-focused institution with a rich legacy of student innovation
              and 24/7 support for makers, coders and creators. Our campus hosts labs, mentorship and
              startup-minded programs to help you build and ship.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-mono text-lg mt-1">{">"}</span>
                <div>
                  <div className="text-green-200 font-semibold">Vartak College</div>
                  <div className="text-green-200/70 text-sm">Home of  engineers & designers</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-300 font-mono text-lg mt-1">{">"}</span>
                <div>
                  <div className="text-green-200 font-semibold">24/7 Labs & Mentors</div>
                  <div className="text-green-200/70 text-sm">Continuous access to labs, mentors and resources</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: framed image */}
        <div className="lg:col-span-5 lg:my-15 md:my-15  flex justify-center lg:justify-end">
          <div
            className="w-full max-w-md rounded-lg border border-green-400/40 p-1"
            style={{
              boxShadow: "0 8px 30px rgba(0,255,150,0.04)",
              background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.5))"
            }}
          >
            <div className="overflow-hidden  rounded-lg bg-black">
              <img
                src={EVENT_IMAGE}
                alt="College building"
                className="w-full h-56 object-cover object-center opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
