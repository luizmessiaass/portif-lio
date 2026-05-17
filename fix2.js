const fs = require('fs');

let content = fs.readFileSync('src/sections/Journey.tsx', 'utf-8');

// Fix orbRef and transitions
content = content.replace(
  /<div ref=\{lineRef\} className="h-0 w-full origin-top" style=\{\{ backgroundColor: "#d90416", transition: "background-color 0\.2s" \}\} \/>\r?\n\s*\{\/\* Milestone List \*\/\}/g,
  `<div ref={lineRef} className="h-0 w-full origin-top" style={{ backgroundColor: "#d90416" }} />\n            <div ref={orbRef} className="absolute -left-[4px] top-0 z-20 h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: "#d90416" }} />\n          </div>\n\n          {/* Milestone List */}`
);

// Fix paintScene transitions (remove transition from opacity)
content = content.replace(
  /layer\.style\.opacity = `\$\{finalWeight\}`;\r?\n\s*layer\.style\.transition = "opacity 0\.6s cubic-bezier\(0\.23, 1, 0\.32, 1\)";/g,
  `layer.style.opacity = \`\${finalWeight}\`;`
);

// Fix lineRef transition in paintScene
content = content.replace(
  /lineRef\.current\.style\.backgroundColor = rgbColor;\r?\n\s*lineRef\.current\.style\.transition = "background-color 0\.6s cubic-bezier\(0\.23, 1, 0\.32, 1\)";/g,
  `lineRef.current.style.backgroundColor = rgbColor;`
);

// Fix orbRef transition in paintScene
content = content.replace(
  /orbRef\.current\.style\.boxShadow = `0 0 12px rgba\(\$\{Math\.round\(r\)\}, \$\{Math\.round\(g\)\}, \$\{Math\.round\(b\)\}, 0\.4\)`;\r?\n\s*orbRef\.current\.style\.transition = "border-color 0\.6s cubic-bezier\(0\.23, 1, 0\.32, 1\), box-shadow 0\.6s cubic-bezier\(0\.23, 1, 0\.32, 1\)";/g,
  `orbRef.current.style.boxShadow = \`0 0 12px rgba(\${Math.round(r)}, \${Math.round(g)}, \${Math.round(b)}, 0.4)\`;`
);

// Improve Lince color
content = content.replace(
  /bg-\[radial-gradient\(circle_at_20%_20%,rgba\(241,50,63,0\.15\),transparent_40%\),radial-gradient\(circle_at_80%_80%,rgba\(201,0,21,0\.1\),transparent_50%\),white\]/g,
  `bg-[radial-gradient(circle_at_20%_30%,rgba(217,4,22,0.22),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(138,0,10,0.18),transparent_60%),white]`
);

fs.writeFileSync('src/sections/Journey.tsx', content);
console.log('Fixed');
