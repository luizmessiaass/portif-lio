const fs = require("fs");
const path = require("path");
const { chromium } = require("./pw/node_modules/playwright");

const baseUrl = "https://elevax.net.br";
const outDir = path.resolve("public/projects/digisac-squad/prod");
const email = process.env.DIGISAC_EMAIL;
const password = process.env.DIGISAC_PASSWORD;

const readOnlyRoutes = [
  ["02-inbox", "/inbox", "inbox"],
  ["03-dashboard", "/dashboard", "dashboard"],
  ["04-groups", "/groups", "generic"],
  ["05-squads", "/squads", "generic"],
  ["06-operations", "/operations", "generic"],
  ["07-settings", "/settings", "settings"],
];

async function settle(page) {
  await page.waitForLoadState("domcontentloaded").catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2800);
}

async function mask(page, kind) {
  await page.evaluate((maskKind) => {
    const block = (left, top, width, height, label) => {
      const el = document.createElement("div");
      Object.assign(el.style, {
        position: "fixed",
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        zIndex: "2147483647",
        borderRadius: "10px",
        background: "#101316",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 12px 36px rgba(0,0,0,0.28)",
        color: "#9ff4df",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "700 11px Arial, sans-serif",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        pointerEvents: "none",
      });
      el.textContent = label;
      document.body.appendChild(el);
    };

    // Always hide authenticated identity and possible client/account data.
    block(1000, 0, 440, 72, "usuario / conta mascarados");

    if (maskKind === "inbox") {
      block(0, 62, 420, 918, "lista de conversas mascarada");
      block(420, 0, 1020, 110, "contato mascarado");
      block(420, 110, 1020, 760, "conversa whatsapp mascarada");
      block(420, 870, 1020, 110, "campo de mensagem nao usado");
    } else if (maskKind === "dashboard") {
      block(105, 120, 1300, 860, "dados operacionais mascarados");
    } else if (maskKind === "settings") {
      block(105, 120, 1300, 860, "configuracoes sensiveis mascaradas");
    } else {
      block(105, 120, 1300, 860, "dados operacionais mascarados");
    }
  }, kind);
}

async function snapshot(page, name, kind, findings) {
  await mask(page, kind);
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: false });
  findings.captured.push({
    name,
    url: page.url(),
    title: await page.title().catch(() => ""),
    h1: await page.locator("h1").first().textContent({ timeout: 1500 }).catch(() => ""),
  });
}

(async () => {
  if (!email || !password) throw new Error("Missing DIGISAC_EMAIL or DIGISAC_PASSWORD");
  fs.mkdirSync(outDir, { recursive: true });

  const findings = {
    baseUrl,
    capturedAt: new Date().toISOString(),
    rule: "Somente leitura. Nenhum envio, criação, exclusão, atribuição, finalização, arquivamento ou sincronização foi acionado.",
    captured: [],
    skipped: [],
    links: [],
  };

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 980 }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(18000);

  await page.goto(`${baseUrl}/inbox`, { waitUntil: "domcontentloaded", timeout: 45000 });
  await settle(page);
  await page.screenshot({ path: path.join(outDir, "01-login.png"), fullPage: false });

  const emailInput = page.locator('input[type="email"], input[name*="email" i], input[placeholder*="email" i]').first();
  const passwordInput = page.locator('input[type="password"], input[name*="password" i], input[placeholder*="senha" i]').first();
  if ((await emailInput.count()) > 0) await emailInput.fill(email);
  if ((await passwordInput.count()) > 0) await passwordInput.fill(password);
  await page
    .locator('button[type="submit"], button:has-text("Entrar"), button:has-text("Login"), button:has-text("Acessar")')
    .first()
    .click();
  await settle(page);

  const rawLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a[href]")).map((a) => ({
      href: a.href,
      text: (a.textContent || "").replace(/\s+/g, " ").trim(),
      aria: a.getAttribute("aria-label") || "",
    })),
  ).catch(() => []);
  findings.links = rawLinks
    .filter((link) => link.href.startsWith(baseUrl))
    .map((link) => ({ path: new URL(link.href).pathname, text: link.text, aria: link.aria }));

  for (const [name, route, kind] of readOnlyRoutes) {
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 45000 });
      await settle(page);
      if (/login/i.test(page.url())) {
        findings.skipped.push({ route, reason: "redirected_to_login" });
        continue;
      }
      await snapshot(page, name, kind, findings);
    } catch (error) {
      findings.skipped.push({ route, reason: String(error).slice(0, 500) });
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(outDir, "capture-note.json"), JSON.stringify(findings, null, 2), "utf8");
  console.log(JSON.stringify({ captured: findings.captured.length, skipped: findings.skipped.length }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
