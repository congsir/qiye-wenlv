const { chromium } = require('playwright-core');
const OUT = '/workspace/qiye-wenlv/handoff/';
(async () => {
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });

  async function prep(page) {
    await page.goto('http://127.0.0.1:8792/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForFunction(() => document.documentElement.classList.contains('webgl-on') || document.documentElement.classList.contains('no-webgl'));
    await page.evaluate(() => {
      document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot, .hero-hud').forEach(el => {
        el.style.opacity = '1'; el.style.transform = 'none'; el.style.visibility = 'visible';
      });
    });
    await page.waitForTimeout(2200);
  }

  {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
    await prep(p);
    await p.screenshot({ path: OUT + 'desktop-hero-1440.png' });
    // throw once for fueled shot
    await p.mouse.move(1440 * 0.75, 900 * 0.65);
    await p.mouse.down();
    await p.mouse.move(1440 * 0.64, 900 * 0.58, { steps: 12 });
    await p.mouse.up();
    await p.waitForTimeout(1100);
    await p.screenshot({ path: OUT + 'desktop-hero-interact-1440.png' });
    await p.close();
  }

  {
    const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
    await prep(p);
    await p.screenshot({ path: OUT + 'desktop-hero-1920.png' });
    await p.close();
  }

  {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await prep(p);
    await p.screenshot({ path: OUT + 'phone-hero-390.png' });
    await p.touchscreen.tap(390 * 0.7, 844 * 0.62);
    await p.waitForTimeout(1100);
    await p.screenshot({ path: OUT + 'phone-hero-interact-390.png' });
    await p.close();
  }

  await b.close();
  console.log('final shots done');
})().catch(e => { console.error(e); process.exit(1); });
