import re

with open('src/sections/Journey.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace variables
content = re.sub(
    r'const linceCenter = linceCard.top \+ linceCard.height \* 0\.5;\s*const bungeCenter = bungeCard.top \+ bungeCard.height \* 0\.5;\s*const mapfitCenter = mapfitCard.top \+ mapfitCard.height \* 0\.5;\s*const introCenter = firstCard.top - window.innerHeight \* 0\.8;\s*const outroCenter = nextCard \? nextCard.top \+ nextCard.height \* 0\.6 : sectionRect.bottom;',
    '''const linceCenter = linceCard.top + linceCard.height * 0.5;
      const bungeCenter = bungeCard.top + bungeCard.height * 0.5;
      const mapfitCenter = mapfitCard.top + mapfitCard.height * 0.5;
      const studioCard = sceneCards.find((card) => card.dataset.journeyScene === "4");
      const avantCard = sceneCards.find((card) => card.dataset.journeyScene === "5");
      const studioCenter = studioCard ? studioCard.getBoundingClientRect().top + studioCard.getBoundingClientRect().height * 0.5 : mapfitCenter + 1000;
      const avantCenter = avantCard ? avantCard.getBoundingClientRect().top + avantCard.getBoundingClientRect().height * 0.5 : studioCenter + 1000;
      const introCenter = firstCard.top - window.innerHeight * 0.8;
      const outroCenter = nextCard ? nextCard.top + nextCard.height * 0.6 : sectionRect.bottom;''',
    content
)

# Replace weights
content = re.sub(
    r'let weights = \[1, 0, 0, 0\];\s*if \(viewportCenter < linceCenter\) \{\s*const p = progressBetween\(introCenter, linceCenter\);\s*weights = \[1 - p, p, 0\.1, 0\]; // Adiciona um leve overlap das outras cores\s*\} else if \(viewportCenter < bungeCenter\) \{\s*const p = progressBetween\(linceCenter, bungeCenter\);\s*weights = \[0, 1 - p, p, 0\.1\];\s*\} else if \(viewportCenter < mapfitCenter\) \{\s*const p = progressBetween\(bungeCenter, mapfitCenter\);\s*weights = \[0\.1, 0, 1 - p, p\];\s*\} else \{\s*const p = progressBetween\(mapfitCenter, outroCenter\);\s*weights = \[p, 0\.1, 0, 1 - p\];\s*\}',
    '''let weights = [1, 0, 0, 0, 0, 0];

      if (viewportCenter < linceCenter) {
        const p = progressBetween(introCenter, linceCenter);
        weights = [1 - p, p, 0.1, 0, 0, 0];
      } else if (viewportCenter < bungeCenter) {
        const p = progressBetween(linceCenter, bungeCenter);
        weights = [0, 1 - p, p, 0.1, 0, 0];
      } else if (viewportCenter < mapfitCenter) {
        const p = progressBetween(bungeCenter, mapfitCenter);
        weights = [0, 0, 1 - p, p, 0.1, 0];
      } else if (viewportCenter < studioCenter) {
        const p = progressBetween(mapfitCenter, studioCenter);
        weights = [0, 0, 0, 1 - p, p, 0.1];
      } else if (viewportCenter < avantCenter) {
        const p = progressBetween(studioCenter, avantCenter);
        weights = [0.1, 0, 0, 0, 1 - p, p];
      } else {
        const p = progressBetween(avantCenter, outroCenter);
        weights = [p, 0.1, 0, 0, 0, 1 - p];
      }''',
    content
)

# Replace layers loop
content = re.sub(
    r'layers\.forEach\(\(layer, index\) => \{\s*// Reduz a intensidade das camadas coloridas \(índices 1, 2, 3\) para não ofuscar o texto\s*const finalWeight = index === 0 \? weights\[index\] : \(weights\[index\] \?\? 0\) \* 0\.6;\s*layer\.style\.opacity = `\$\{finalWeight\}`;\s*layer\.style\.transition = "opacity 0\.6s cubic-bezier\(0\.23, 1, 0\.32, 1\)";\s*\}\);',
    '''layers.forEach((layer, index) => {
        const finalWeight = index === 0 ? weights[index] : (weights[index] ?? 0) * 0.6;
        layer.style.opacity = `${finalWeight}`;
        layer.style.transition = "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      });

      const colors = [
        { r: 217, g: 4, b: 22 },    // 0: Vermelho (Início)
        { r: 217, g: 4, b: 22 },    // 1: Vermelho (Lince)
        { r: 12, g: 99, b: 199 },   // 2: Azul (Bunge)
        { r: 215, g: 162, b: 58 },  // 3: Dourado (Mapfit)
        { r: 168, g: 76, b: 207 },  // 4: Roxo (Studio)
        { r: 255, g: 106, b: 0 }    // 5: Laranja (Avant)
      ];

      let r = 0, g = 0, b = 0;
      weights.forEach((w, i) => {
        if (i < colors.length) {
          r += w * colors[i].r;
          g += w * colors[i].g;
          b += w * colors[i].b;
        }
      });
      const rgbColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

      if (lineRef.current) {
        lineRef.current.style.backgroundColor = rgbColor;
      }
      if (orbRef.current) {
        orbRef.current.style.borderColor = rgbColor;
        orbRef.current.style.boxShadow = `0 0 12px rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.4)`;
      }''',
    content
)

# Replace backgrounds
content = content.replace(
    '''{/* Mapfit Scene - Auras de Ouro/Escuro */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,162,58,0.08),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(26,26,26,0.05),transparent_40%),white]" />''',
    '''{/* Mapfit Scene - Auras de Ouro/Escuro */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,162,58,0.08),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(26,26,26,0.05),transparent_40%),white]" />
          
          {/* Studio Scene - Auras de Roxo */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,76,207,0.12),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(116,31,154,0.1),transparent_40%),white]" />
          
          {/* Avant Scene - Auras Laranja/Escuro */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,106,0,0.12),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(13,38,53,0.1),transparent_40%),white]" />'''
)

# Replace line and orb colors
content = content.replace(
    '''<div ref={lineRef} className="h-0 w-full origin-top bg-[#ff6a00]" />
            <div ref={orbRef} className="absolute -left-[4px] top-0 z-20 h-3 w-3 rounded-full border-2 border-[#ff6a00] bg-white shadow-[0_0_8px_rgba(255,106,0,0.4)]" />''',
    '''<div ref={lineRef} className="h-0 w-full origin-top" style={{ backgroundColor: "#d90416", transition: "background-color 0.2s" }} />
            <div ref={orbRef} className="absolute -left-[4px] top-0 z-20 h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: "#d90416", transition: "border-color 0.2s" }} />'''
)

# Replace Marker
content = content.replace(
    '''<div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#ff6a00] bg-white sm:left-1/2" />''',
    '''<div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-black/10 bg-white sm:left-1/2" />'''
)

# Replace Datasets
content = content.replace(
    ''') : i === 3 ? (
                    <div data-journey-scene="0">
                      <StudioFeaturedCard item={item} />
                    </div>
                  ) : i === 5 ? (
                    <div data-journey-scene="0">
                      <AvantFeaturedCard item={item} />
                    </div>''',
    ''') : i === 3 ? (
                    <div data-journey-scene="4">
                      <StudioFeaturedCard item={item} />
                    </div>
                  ) : i === 5 ? (
                    <div data-journey-scene="5">
                      <AvantFeaturedCard item={item} />
                    </div>'''
)

with open('src/sections/Journey.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
