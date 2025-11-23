import React from "react";
import MatrixBackground from "./components/MatrixBackground";
import Home from "./pages/Home";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", color: "#fff" }}>
      {/* Background (automatically full screen, behind content) */}
      <MatrixBackground
        padding={70}
        fontSize={20}
        speed={0.45}        // slower fall
        color="#00ff55"     // green; change to any hex like '#aaf' etc.
      />

      

      <div className="relative z-20">
        <Home />
        <Hero />
        {/* Add additional content here */}
      </div>
      
    </div>
  );
}
