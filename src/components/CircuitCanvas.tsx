"use client";

import { useEffect, useRef } from "react";

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let resizeId: number | undefined;
    let lastFrame = 0;
    let isVisible = true;

    const cellSize = isMobile ? 240 : 180;
    const frameMs = 1000 / (isMobile ? 12 : 20);
    let cols = 0;
    let rows = 0;
    let nodes: { x: number; y: number; conn: number[] }[] = [];
    let edges: [number, number][] = [];

    const build = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.ceil(canvas.width / cellSize) + 1;
      rows = Math.ceil(canvas.height / cellSize) + 1;
      nodes = [];
      edges = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({ x: c * cellSize, y: r * cellSize, conn: [] });
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const r = Math.floor(i / cols);
        const c = i % cols;

        if (c < cols - 1 && Math.random() > (isMobile ? 0.72 : 0.64)) {
          edges.push([i, i + 1]);
          nodes[i].conn.push(i + 1);
          nodes[i + 1].conn.push(i);
        }

        if (r < rows - 1 && Math.random() > (isMobile ? 0.72 : 0.64)) {
          edges.push([i, i + cols]);
          nodes[i].conn.push(i + cols);
          nodes[i + cols].conn.push(i);
        }
      }
    };

    build();

    const pulses: Pulse[] = [];
    const maxPulses = isMobile ? 1 : 3;

    const spawn = () => {
      if (pulses.length >= maxPulses) return;
      const from = Math.floor(Math.random() * nodes.length);
      if (!nodes[from]?.conn.length) return;
      const to = nodes[from].conn[Math.floor(Math.random() * nodes[from].conn.length)];
      pulses.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: isMobile ? 0.0025 + Math.random() * 0.002 : 0.003 + Math.random() * 0.003,
      });
    };

    for (let i = 0; i < maxPulses; i++) spawn();
    let lastSpawn = 0;

    const draw = (ts: number) => {
      if (!isVisible) {
        animId = null;
        return;
      }

      animId = requestAnimationFrame(draw);
      if (ts - lastFrame < frameMs) return;
      lastFrame = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 0.75;

      for (const [a, b] of edges) {
        ctx.strokeStyle = isMobile ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.052)";
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      }

      for (const n of nodes) {
        if (!n.conn.length) continue;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isMobile ? 1.15 : 1.35, 0, Math.PI * 2);
        ctx.fillStyle = isMobile ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0.09)";
        ctx.fill();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          const next = nodes[pulse.toNode].conn.filter((node) => node !== pulse.fromNode);
          if (next.length && Math.random() > 0.25) {
            pulse.fromNode = pulse.toNode;
            pulse.toNode = next[Math.floor(Math.random() * next.length)];
            pulse.progress = 0;
          } else {
            pulses.splice(i, 1);
            continue;
          }
        }

        const fromNode = nodes[pulse.fromNode];
        const toNode = nodes[pulse.toNode];
        const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        ctx.lineWidth = 1;
        ctx.strokeStyle = isMobile ? "rgba(255,106,0,0.16)" : "rgba(255,106,0,0.22)";
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, isMobile ? 1.6 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isMobile ? "rgba(255,106,0,0.42)" : "rgba(255,106,0,0.5)";
        ctx.fill();
      }

      if (ts - lastSpawn > (isMobile ? 3600 : 2600)) {
        spawn();
        lastSpawn = ts;
      }
    };

    const start = () => {
      if (animId === null) animId = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else stop();
      },
      { rootMargin: "160px" },
    );

    observer.observe(canvas);
    start();

    const onResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(build, 160);
    };

    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      window.clearTimeout(resizeId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] h-full w-full pointer-events-none" />;
}
