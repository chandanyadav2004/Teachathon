import React from "react";

export default function Sponsors() {
  const logos = [
    "ACME Corp",
    "Globex Corporation",
    "Initech",
    "Umbrella",
    "Stark Industries",
    "Wayne Tech",
  ];

  return (
    <div className="card">
      <h2 className="label">Sponsors</h2>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px",
        }}
      >
        {logos.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid rgba(0,255,149,0.15)",
              padding: "18px",
              textAlign: "center",
              borderRadius: "8px",
              background: "rgba(0,255,149,0.02)",
              fontFamily: "Fira Code",
              color: "var(--primary)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
