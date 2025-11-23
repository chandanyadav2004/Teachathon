import React from "react";

export default function About() {
  return (
    <div className="card">
      <h2 className="label">About Event</h2>

      <div style={{ marginTop: 12, lineHeight: "1.6" }}>
        <p>$ Organized by XYZ College</p>
        <p>$ 500+ Participants</p>
        <p>$ 24/7 Lab Access</p>
        <p>$ Multiple domains: Web, AI, ML, CTF, Robotics, Hardware</p>
      </div>

      <div
        style={{
          marginTop: 20,
          border: "1px solid rgba(0,255,149,0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          alt="College"
          style={{ width: "100%", opacity: 0.8 }}
        />
      </div>
    </div>
  );
}
