"use client";

import { useEffect, useRef } from "react";

interface Pulse {
  fromNode: number;
  toNode:   number;
  progress: number;
  speed:    number;
}

export function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let resizeId: number | undefined;
    let lastFrame = 0;

    const CELL = isMobile ? 180 : 160;
    const FRAME_MS = 1000 / (isMobile ? 18 : 24);
    let cols = 0;
    let rows = 0;
    let nodes: { x: number; y: number; conn: number[] }[] = [];
    let edges: [number, number][] = [];

    const build = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.ceil(canvas.width  / CELL) + 1;
      rows = Math.ceil(canvas.height / CELL) + 1;
      nodes = [];
      edges = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({ x: c * CELL, y: r * CELL, conn: [] });
        }
      }

      // sparse connections — circuit board feel
      for (let i = 0; i < nodes.length; i++) {
        const r = Math.floor(i / cols);
        const c = i % cols;
        if (c < cols - 1 && Math.random() > 0.58) {
          edges.push([i, i + 1]);
          nodes[i].conn.push(i + 1);
          nodes[i + 1].conn.push(i);
        }
        if (r < rows - 1 && Math.random() > 0.58) {
          edges.push([i, i + cols]);
          nodes[i].conn.push(i + cols);
          nodes[i + cols].conn.push(i);
        }
      }
    };

    build();

    // only a few slow pulses — very minimal
    const pulses: Pulse[] = [];
    const MAX_PULSES = isMobile ? 2 : 4;

    const spawn = () => {
      if (pulses.length >= MAX_PULSES) return;
      const from = Math.floor(Math.random() * nodes.length);
      if (!nodes[from].conn.length) return;
      const to = nodes[from].conn[Math.floor(Math.random() * nodes[from].conn.length)];
      pulses.push({ fromNode: from, toNode: to, progress: 0, speed: 0.003 + Math.random() * 0.004 });
    };

    for (let i = 0; i < 4; i++) spawn();
    let lastSpawn = 0;

    const draw = (ts: number) => {
      animId = requestAnimationFrame(draw);
      if (ts - lastFrame < FRAME_MS) return;
      lastFrame = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw edges — very light
      ctx.lineWidth = 0.75;
      for (const [a, b] of edges) {
        ctx.strokeStyle = "rgba(0,0,0,0.055)";
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      }

      // draw nodes — tiny dots only where connected
      for (const n of nodes) {
        if (!n.conn.length) continue;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.10)";
        ctx.fill();
      }

      // draw pulses — just a small bright dot, no halo
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          const next = nodes[p.toNode].conn.filter(n => n !== p.fromNode);
          if (next.length && Math.random() > 0.2) {
            p.fromNode = p.toNode;
            p.toNode   = next[Math.floor(Math.random() * next.length)];
            p.progress = 0;
          } else {
            pulses.splice(i, 1);
            continue;
          }
        }

        const fn = nodes[p.fromNode];
        const tn = nodes[p.toNode];
        const x  = fn.x + (tn.x - fn.x) * p.progress;
        const y  = fn.y + (tn.y - fn.y) * p.progress;

        // highlight the active segment
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(255,106,0,0.25)";
        ctx.beginPath();
        ctx.moveTo(fn.x, fn.y);
        ctx.lineTo(tn.x, tn.y);
        ctx.stroke();

        // tiny dot
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,106,0,0.55)";
        ctx.fill();
      }

      if (ts - lastSpawn > (isMobile ? 2800 : 2200)) { spawn(); lastSpawn = ts; }
    };

    animId = requestAnimationFrame(draw);
    const onResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(build, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.clearTimeout(resizeId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
