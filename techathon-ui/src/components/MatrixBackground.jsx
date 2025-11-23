import React, { useEffect, useRef } from "react";

export default function MatrixBackground({
  padding = 70,
  fontSize = 20,
  speed = 0.45,
  color = "#00ff55",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const dropsRef = useRef([]);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.max(window.devicePixelRatio || 1, 1);

    function fitCanvas() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initDrops() {
      const usableWidth = canvas.clientWidth - padding * 2;
      const columns = Math.max(4, Math.floor(usableWidth / fontSize));
      dropsRef.current = new Array(columns).fill(1);
    }

    fitCanvas();
    initDrops();

    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-/<>".split("");

    function draw() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";
      ctx.shadowColor = "transparent";

      for (let i = 0; i < dropsRef.current.length; i++) {
        const ch = charSet[Math.floor(Math.random() * charSet.length)];
        const x = padding + i * fontSize;
        const y = dropsRef.current[i] * fontSize;
        ctx.fillText(ch, x, y);

        dropsRef.current[i] += speed * (fontSize / 20);

        if (y > h && Math.random() > 0.99) {
          dropsRef.current[i] = 0;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    function onResize() {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        fitCanvas();
        initDrops();
      }, 120);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeoutRef.current);
    };
  }, [padding, fontSize, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
