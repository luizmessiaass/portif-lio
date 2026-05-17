const fs = require('fs');

let content = fs.readFileSync('src/sections/Journey.tsx', 'utf-8');

// 1. Add colorTrailRef
content = content.replace(
  /const orbRef = useRef<HTMLDivElement>\(null\);/g,
  `const orbRef = useRef<HTMLDivElement>(null);\n  const colorTrailRef = useRef<HTMLDivElement>(null);`
);

// 2. Remove layers logic from paintScene
content = content.replace(
  /const layers = gsap\.utils\.toArray<HTMLElement>\(\"\.journey-bg-scene\"\);\r?\n\s*/g,
  ``
);
content = content.replace(
  /if \(!sectionRef\.current \|\| layers\.length === 0 \|\| sceneCards\.length === 0\) return;/g,
  `if (!sectionRef.current || sceneCards.length === 0) return;`
);

// We need to carefully remove layers.forEach using a precise regex
content = content.replace(
  /layers\.forEach\(\(layer, index\) => \{\r?\n\s*const finalWeight = index === 0 \? weights\[index\] : \(weights\[index\] \?\? 0\) \* 0\.6;\r?\n\s*layer\.style\.opacity = `\$\{finalWeight\}`;\r?\n\s*\}\);/g,
  ``
);

// 3. Add clipPath animation to GSAP timeline
content = content.replace(
  /tl\.to\(lineRef\.current, \{ height: \"100%\", ease: \"none\" \}, 0\);\r?\n\s*tl\.to\(orbRef\.current, \{ top: \"100%\", ease: \"none\" \}, 0\);/g,
  `tl.to(lineRef.current, { height: "100%", ease: "none" }, 0);\n    tl.to(orbRef.current, { top: "100%", ease: "none" }, 0);\n    tl.to(colorTrailRef.current, { clipPath: "inset(0 0 0% 0)", ease: "none" }, 0);`
);

// 4. Remove sticky container and old layers, AND add the new colorTrailRef inside the Timeline Path
const oldStickyHtml = `<div className=\"pointer-events-none absolute inset-0\">\n        <div className=\"sticky top-0 h-screen overflow-hidden\">\n          <div className=\"journey-bg-scene absolute inset-0 bg-white opacity-100\" />\n          \n          {/* Lince Scene - Auras de Vermelho */}\n          <div className=\"journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,4,22,0.22),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(138,0,10,0.18),transparent_60%),white]\" />\n          \n          {/* Bunge Scene - Auras de Azul/Roxo/Laranja */}\n          <div className=\"journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_30%_30%,rgba(8,104,216,0.12),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(255,90,18,0.1),transparent_40%),white]\" />\n          \n          {/* Mapfit Scene - Auras de Ouro/Escuro */}\n          <div className=\"journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,162,58,0.08),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(26,26,26,0.05),transparent_40%),white]\" />\n          \n          {/* Studio Scene - Auras de Roxo */}\n          <div className=\"journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,76,207,0.12),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(116,31,154,0.1),transparent_40%),white]\" />\n          \n          {/* Avant Scene - Auras Laranja/Escuro */}\n          <div className=\"journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,106,0,0.12),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(13,38,53,0.1),transparent_40%),white]\" />\n          \n          <div className=\"absolute inset-0 bg-[radial-gradient(rgba(17,17,17,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30\" />\n        </div>\n      </div>`;

// Note: I will just use regex to remove the entire block from `<div className="pointer-events-none absolute inset-0">` up to the end of that block.
const regexOldSticky = /<div className=\"pointer-events-none absolute inset-0\">[\s\S]*?<div className=\"absolute inset-0 bg-\[radial-gradient\(rgba\(17,17,17,0\.05\)_1px,transparent_1px\)\] \[background-size:24px_24px\] opacity-30\" \/>\s*<\/div>\s*<\/div>/m;
content = content.replace(regexOldSticky, '');

// Now add the new colorTrailRef and absolute grid pattern
const newTimelineHTML = `{/* Grid Pattern global de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(17,17,17,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6">`;

content = content.replace(/<div className=\"container relative mx-auto px-4 sm:px-6\">/g, newTimelineHTML);


// Insert the actual color trail inside the relative timeline wrapper
const timelineRegex = /\{\/\* Main Line Path \*\/\}\s*<div className=\"absolute left-4 top-0 h-full w-\[2px\] bg-black\/5 sm:left-1\/2 sm:-translate-x-1\/2\">\s*<div ref=\{lineRef\}[^>]*\/>\s*<div ref=\{orbRef\}[^>]*\/>\s*<\/div>/;

const replacementTrail = `{/* Main Line Path */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-black/5 sm:left-1/2 sm:-translate-x-1/2 z-20">
            <div ref={lineRef} className="h-0 w-full origin-top" style={{ backgroundColor: "#d90416" }} />
            <div ref={orbRef} className="absolute -left-[4px] top-0 z-20 h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: "#d90416" }} />
          </div>

          {/* COLOR TRAIL MASK */}
          <div ref={colorTrailRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ clipPath: "inset(0 0 100% 0)" }}>
             {/* Lince Aura */}
             <div className="absolute top-[3%] left-1/2 w-[200vw] sm:w-[120vw] h-[100vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(217,4,22,0.18)_0%,transparent_60%)] blur-[80px]" />
             {/* Bunge Aura */}
             <div className="absolute top-[20%] left-1/2 w-[200vw] sm:w-[120vw] h-[100vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(12,99,199,0.15)_0%,transparent_60%)] blur-[80px]" />
             {/* Mapfit Aura */}
             <div className="absolute top-[40%] left-1/2 w-[200vw] sm:w-[120vw] h-[100vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(215,162,58,0.15)_0%,transparent_60%)] blur-[80px]" />
             {/* Studio Aura */}
             <div className="absolute top-[60%] left-1/2 w-[200vw] sm:w-[120vw] h-[100vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(168,76,207,0.15)_0%,transparent_60%)] blur-[80px]" />
             {/* Avant Aura */}
             <div className="absolute top-[85%] left-1/2 w-[200vw] sm:w-[120vw] h-[100vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.15)_0%,transparent_60%)] blur-[80px]" />
          </div>`;

content = content.replace(timelineRegex, replacementTrail);

fs.writeFileSync('src/sections/Journey.tsx', content);
console.log('Fixed Melt Down');
