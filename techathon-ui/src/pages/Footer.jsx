// src/components/Footer.jsx
import React from "react";

/**
 * Footer.jsx — corrected placement of the bottom small-print so it spans across the three columns.
 * Uses your uploaded logo path; the environment will map it to a usable URL.
 */

const LOGO = "logoEvents.png";
const collegeUrl = "https://www.avc.ac.in/";
const email = "t23.avcollege@avc.ac.in";
const addressShort = "Shastri Nagar, Vishal Nagar, Vasai West, Vasai-Virar, Maharashtra 401202";

export default function Footer() {
  return (
    <>
      <footer
        className={
          "sm:fixed sm:bottom-5 sm:left-0 sm:right-0 sm:z-50 md:static bg-black/40 backdrop-blur-sm text-green-200 border-t border-green-400/8"
        }
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="hidden sm:block w-full h-4 bg-gradient-to-b from-black/95 to-transparent pointer-events-none" />

        <div className="w-full sm:h-28 md:py-12
         py-8">
          <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row md:items-start justify-center md:justify-between">
            {/* GRID: three columns + bottom small-print as a grid child */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full">
              {/* 1) Brand / About */}
              <div className="space-y-2 md:col-span-1 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <img
                    src={LOGO}
                    alt="Techathon logo"
                    className="w-10 h-10 object-contain rounded-md border border-green-400/10"
                  />
                  <div>
                    <div className="font-mono text-lg text-green-300 font-semibold">@Techathon 2025</div>
                    <div className="text-xs text-green-200/70">Presented by Vartak College</div>
                  </div>
                </div>

                <p className="text-sm text-green-200/80 max-w-sm">
                  {addressShort} ·{" "}
                  <a className="underline text-green-200" href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>

                <p className="text-xs text-green-200/60 font-mono">© {new Date().getFullYear()} Techathon. All rights reserved.</p>
              </div>

              {/* 2) Quick Links */}
              <nav aria-label="Footer navigation" className="md:col-span-1">
                <h4 className="font-mono text-green-300 mb-2">Quick links</h4>
                <ul className="space-y-1">
                  <li><a href="#home" className="text-green-200 hover:text-green-100 text-sm font-mono">Home</a></li>
                  <li><a href="#games" className="text-green-200 hover:text-green-100 text-sm font-mono">Games</a></li>
                  <li><a href="#about" className="text-green-200 hover:text-green-100 text-sm font-mono">About</a></li>
                  <li><a href="#contact" className="text-green-200 hover:text-green-100 text-sm font-mono">Contact</a></li>
                </ul>
              </nav>

              {/* 3) Social + Legal */}
              <div className="md:col-span-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-mono text-green-300 mb-2">Follow</h4>

                    <div className="flex items-center gap-3">
                      <a href={collegeUrl} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-green-400/10 hover:bg-black/10">
                        {/* Instagram */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-green-200"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11.37a4 4 0 1 1-2.27-3.58 4 4 0 0 1 2.27 3.58z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>

                      <a href={collegeUrl} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-green-400/10 hover:bg-black/10">
                        {/* Facebook */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-green-200"><path d="M18 2h-3a4 4 0 0 0-4 4v2H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 0 1 1-1h3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>

                      <a href={collegeUrl} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-green-400/10 hover:bg-black/10">
                        {/* Twitter */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-green-200"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-2 1.2-3.5 1.57A4.48 4.48 0 0 0 11 6.1 12.8 12.8 0 0 1 1.64 2.16S-1 8 5 11.5c-1 0-3 0-4.5-.9 0 3 2 5.5 5 6.1A4.52 4.52 0 0 1 2 17v.1a12.94 12.94 0 0 0 7 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    </div>

                    <div className="mt-2 text-xs text-green-200/70 font-mono">
                      <a href={collegeUrl} target="_blank" rel="noreferrer" className="hover:underline">{collegeUrl.replace(/^https?:\/\//, "")}</a>
                    </div>
                  </div>

                  <div className="text-right hidden md:block">
                    <h4 className="font-mono text-green-300 mb-2">Legal</h4>
                    <ul className="text-sm text-green-200/80 space-y-1">
                      <li><a href="/terms" className="hover:text-green-100">Terms &amp; Conditions</a></li>
                      <li><a href="/privacy" className="hover:text-green-100">Privacy Policy</a></li>
                      <li><a href="/more" className="hover:text-green-100">More</a></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-3 md:hidden text-xs text-green-200/80 font-mono">
                  <a className="block mb-1" href="/terms">Terms &amp; Conditions</a>
                  <a className="block" href="/privacy">Privacy Policy</a>
                </div>
              </div>

              {/* BOTTOM SMALL PRINT - now INSIDE the grid and spans full width on md+ */}
              <div className="col-span-1 mb-5 px-20 md:px-0 sm:px-0 md:col-span-3 mt-3 md:mt-6 text-xs text-green-200/60 font-mono text-center md:text-left">
                Built with ♥ by Vartak College • Follow us on social media for updates
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
