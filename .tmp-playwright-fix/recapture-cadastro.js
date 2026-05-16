const { chromium } = require('playwright');
const path = require('path');

const base = 'https://cadastro-unificado.vercel.app';
const out = 'C:/Users/AMC/Desktop/PORTIFOLIO/portif-lio/public/projects/cadastro-unificado';
const accounts = {
  next: { env: 'NEXT', email: 'enzo95me@gmail.com', password: '123456' },
  elevate: { env: 'ELEVATE', email: 'bonanciov@gmail.com', password: '123456' },
};

async function settle(page, ms = 1400) {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {});
  await page.waitForTimeout(ms);
}

async function login(page, account) {
  await page.goto(`${base}/login`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await settle(page);
  await page.getByRole('button', { name: account.env, exact: true }).click().catch(() => {});
  if (account.env === 'ELEVATE') {
    await page.waitForFunction(() => document.body.innerText.includes('Elevate Ecom.'), null, { timeout: 8000 }).catch(() => {});
  }
  await page.locator('#email').fill(account.email);
  await page.locator('#password').fill(account.password);
  await page.getByRole('button', { name: /entrar/i }).last().click();
  await page.waitForFunction(() => location.pathname.includes('/dashboard') || document.body.innerText.includes('Dashboard'), null, { timeout: 18000 }).catch(() => {});
  await settle(page, 2200);
  if (!page.url().includes('/dashboard')) throw new Error(`login failed for ${account.env}: ${page.url()}`);
}

async function shot(page, route, file) {
  await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await settle(page, 2200);
  await page.screenshot({ path: path.join(out, file), fullPage: false });
  console.log('saved', file, page.url());
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  const loginContext = await browser.newContext({ viewport: { width: 1440, height: 920 }, deviceScaleFactor: 1 });
  const loginPage = await loginContext.newPage();
  await loginPage.goto(`${base}/login`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await settle(loginPage);
  await loginPage.getByRole('button', { name: 'NEXT', exact: true }).click().catch(() => {});
  await loginPage.screenshot({ path: path.join(out, '05-prod-login-next.png'), fullPage: false });
  await loginPage.getByRole('button', { name: 'ELEVATE', exact: true }).click().catch(() => {});
  await loginPage.waitForFunction(() => document.body.innerText.includes('Elevate Ecom.'), null, { timeout: 8000 }).catch(() => {});
  await loginPage.screenshot({ path: path.join(out, '06-prod-login-elevate.png'), fullPage: false });
  await loginContext.close();

  for (const [key, account] of Object.entries(accounts)) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 920 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    await login(page, account);
    const prefix = key === 'next' ? '07-prod-next' : '12-prod-elevate';
    await shot(page, '/dashboard', `${prefix}-dashboard.png`);
    await shot(page, '/clientes', `${prefix}-clientes.png`);
    if (key === 'next') {
      await page.getByRole('button', { name: /novo cliente/i }).first().click().catch(() => {});
      await settle(page, 900);
      await page.screenshot({ path: path.join(out, '08-prod-next-clientes-modal.png'), fullPage: false });
      console.log('saved 08-prod-next-clientes-modal.png');
    }
    await shot(page, '/admin/usuarios', `${prefix}-usuarios.png`);
    await shot(page, '/atividades', `${prefix}-atividades.png`);
    await context.close();
  }

  await browser.close();
})();
