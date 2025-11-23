// src/components/EventsAndGames.jsx
import React, { useState } from "react";

/**
 * EventsAndGames.jsx
 *
 * Shows two sections:
 *  - Technical events (multiple challenge-style events)
 *  - Games (multiplayer / casual games)
 *
 * Each item shows: title, short description, time, prize (if applicable), spots / players,
 * and an "Apply / Join" button which opens a modal with more details and a simple apply form.
 *
 * Uses a local decorative image for cards (your uploaded file path will be transformed
 * by the environment into a usable URL).
 *
 * Image path (from your uploads):
 *   /mnt/data/682e61bd-95c5-41ee-880c-3aa9c1346192.png
 *
 * Drop this file into your Tailwind-enabled React app and import it where needed.
 */

const CARD_IMG = "/mnt/data/682e61bd-95c5-41ee-880c-3aa9c1346192.png";

const technicalEvents = [
  {
    id: "t1",
    name: "Blind Coding",
    desc: "Write correct and optimized code with no access to editor hints. Tests are hidden — focus on logic and speed.",
    time: "09:00 AM — 11:00 AM",
    prize: "₹7,500",
    spots: 40,
    image: "./BlindCoding.png",
  },
  {
    id: "t2",
    name: "Website using AI",
    desc: "Build a small website that integrates a simple AI feature (chat, recommendation, or image generation). Creativity counts.",
    time: "11:30 AM — 02:00 PM",
    prize: "₹12,000",
    spots: 30,
    image: "WebsiteAi.png",
  },
  {
    id: "t3",
    name: "Tech Quiz",
    desc: "Rapid-fire quiz covering programming, CS fundamentals and recent tech trends. Individual event — be quick and accurate.",
    time: "02:30 PM — 03:30 PM",
    prize: "₹5,000",
    spots: 100,
    image: "TechQuiz.png",
  },
  {
    id: "t4",
    name: "Pitch the Idea",
    desc: "Present a tech idea in 3 minutes. Judging on feasibility, innovation and presentation. Teams of up to 3.",
    time: "04:00 PM — 06:00 PM",
    prize: "₹20,000",
    spots: 20,
    image: "PitchTheIdea.png",
  },
  {
    id: "t5",
    name: "AI Art",
    desc: "Create AI-assisted artwork based on a theme. Judges will evaluate originality, aesthetics, and use of AI.",
    time: "06:30 PM — 08:00 PM",
    prize: "₹6,000",
    spots: 40,
    image: "AIArt.png",
  },
  {
    id: "t6",
    name: "Techathon (Project Sprint)",
    desc: "A short project sprint where teams prototype a working feature in a fixed time window. Best prototype wins.",
    time: "09:00 AM — 06:00 PM",
    prize: "₹30,000",
    spots: 25,
    image: "Techathon.png",
  },
  {
    id: "t7",
    name: "Debug Me",
    desc: "Given a buggy codebase, find and fix issues to make the test suite pass. Speed and correctness matter.",
    time: "07:00 PM — 08:30 PM",
    prize: "₹8,000",
    spots: 30,
    image: "DebugMe.png",
  },
  {
    id: "t8",
    name: "Write Algorithms",
    desc: "Algorithmic problem solving with a focus on optimization and clever data structures. Multiple rounds.",
    time: "08:45 PM — 10:30 PM",
    prize: "₹15,000",
    spots: 50,
    image: "WriteAlgorithm.png",
  },
];

const multiplayerGames = [
  {
    id: "g1",
    name: "BGMI",
    desc: "Battle Royale — form squads and survive to win. Team coordination and map knowledge are key.",
    time: "08:00 PM — 10:00 PM",
    prize: "₹12,000",
    playersNeeded: "Squad (4 players)",
    image: "BGMI.png",
  },
  {
    id: "g2",
    name: "Stumble Guys",
    desc: "Fun obstacle-course elimination rounds. Fast reflexes and occasional chaos — ideal for casual play.",
    time: "07:00 PM — 08:30 PM",
    prize: "₹5,000",
    playersNeeded: "Free-for-all / small squads",
    image: "StumbleGuys.png",
  },
];

export default function Games() {
  const [selected, setSelected] = useState(null); // selected item (event or game)
  const [applicantName, setApplicantName] = useState("");
  const [contact, setContact] = useState("");

  function openModal(item) {
    setSelected(item);
    setApplicantName("");
    setContact("");
  }

  function closeModal() {
    setSelected(null);
  }

  function confirmApply() {
    const ticket = `T-${Math.floor(1000 + Math.random() * 9000)}`;
    alert(
      `${applicantName || "Anonymous"} registered for ${selected.name}\nTime: ${
        selected.time
      }\nTicket: ${ticket}`
    );
    closeModal();
  }

  return (
    <div className="w-full relative z-20 pt-5 px-6" id="games">
      <div className="max-w-6xl mx-auto">
        {/* MAIN PAGE TITLE (CENTERED) */}
        <h1 className="text-3xl md:text-4xl font-mono text-green-300 text-center mb-10 tracking-wide">
          Events & Games
        </h1>

        {/* TECHNICAL EVENTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-mono text-green-300 mb-4 text-left">
            Technical Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((ev) => (
              <article
                key={ev.id}
                className="bg-black/40 border border-green-400/30 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-100 w-100 md:w-[300px] md:h-[400px] sm:w-[50px] sm:h-[50px] p-2 overflow-hidden bg-black/20">
                  <img
                    src={ev.image}
                    alt={ev.name}
                    className="w-full h-full transition-transform duration-300 hover:scale-125 object-cover object-center opacity-90"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-lg text-green-200 font-semibold mb-2">
                      {ev.name}
                    </h3>
                    <p className="text-sm text-green-200/70 mb-3">{ev.desc}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-green-100/80 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          ⏱
                        </span>
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          🏆
                        </span>
                        <span>{ev.prize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          👥
                        </span>
                        <span>{ev.spots} spots</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => openModal(ev)}
                      className="px-4 py-2 rounded-md border border-green-400/40 text-green-100 font-mono text-sm
                                 hover:shadow-[0_18px_40px_rgba(0,255,150,0.10)] hover:ring-2 hover:ring-green-400/30 transition transform hover:-translate-y-0.5"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GAMES */}
        <section>
          <h2 className="text-2xl font-mono text-green-300 mb-4">Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {multiplayerGames.map((g) => (
              <article
                key={g.id}
                className="bg-black/40 border border-green-400/30 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-100 w-100 overflow-hidden bg-black/20">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-125 object-center opacity-90"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-lg text-green-200 font-semibold mb-2">
                      {g.name}
                    </h3>
                    <p className="text-sm text-green-200/70 mb-3">{g.desc}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-green-100/80 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          ⏱
                        </span>
                        <span>{g.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          🏆
                        </span>
                        <span>{g.prize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-green-300">
                          👥
                        </span>
                        <span className="whitespace-nowrap">
                          {g.playersNeeded}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => openModal(g)}
                      className="px-4 py-2 rounded-md border border-green-400/40 text-green-100 font-mono text-sm
                                 hover:shadow-[0_18px_40px_rgba(0,255,150,0.10)] hover:ring-2 hover:ring-green-400/30 transition transform hover:-translate-y-0.5"
                    >
                      Join / Apply
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* APPLY / JOIN MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-3xl bg-black/95 border border-green-400/30 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 h-48 md:h-auto">
                <img
                  src={selected.image || CARD_IMG}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-2 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-mono text-xl text-green-200 font-semibold">
                    {selected.name}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-green-200/60 hover:text-green-100 rounded p-1 focus:outline-none"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-3 text-green-200/80 text-sm">
                  {selected.desc}
                </p>

                <div className="mt-4 text-sm text-green-200/80 space-y-2">
                  <div>
                    <span className="font-mono text-green-300">Time: </span>
                    {selected.time}
                  </div>
                  {"prize" in selected && (
                    <div>
                      <span className="font-mono text-green-300">Prize: </span>
                      {selected.prize}
                    </div>
                  )}
                  {"spots" in selected && (
                    <div>
                      <span className="font-mono text-green-300">Spots: </span>
                      {selected.spots}
                    </div>
                  )}
                  {"playersNeeded" in selected && (
                    <div>
                      <span className="font-mono text-green-300">
                        Players:{" "}
                      </span>
                      {selected.playersNeeded}
                    </div>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-green-200/80 text-sm font-mono">
                      Name
                    </label>
                    <input
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="mt-2 w-full bg-transparent border border-green-400/20 rounded px-3 py-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-green-200/80 text-sm font-mono">
                      Contact (email or phone)
                    </label>
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="mt-2 w-full bg-transparent border border-green-400/20 rounded px-3 py-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400/30"
                      placeholder="example@domain.com or +91-9XXXXXXXX"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-md border border-green-400/20 text-green-100 font-mono text-sm hover:bg-green-900/5 transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={confirmApply}
                    className="px-5 py-2 rounded-md bg-green-400/10 border border-green-400 text-green-100 font-mono text-sm hover:brightness-105 transition"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
