const { chromium } = require('playwright-core');
const OUT = '/workspace/qiye-wenlv/handoff/';
(async () => {
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://127.0.0.1:8792/', { waitUntil: 'networkidle' });
  await p.waitForFunction(() => document.documentElement.classList.contains('webgl-on'));
  await p.evaluate(() => {
    document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot, .hero-hud').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'none'; el.style.visibility = 'visible';
    });
  });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: OUT + 'desktop-hero-1440.png' });

  // wood around 0.75, 0.65 ; fire a bit left/up of wood ~0.65, 0.60
  const wx = 1440 * 0.75, wy = 900 * 0.65;
  const fx = 1440 * 0.64, fy = 900 * 0.58;
  await p.mouse.move(wx, wy);
  await p.waitForTimeout(150);
  const grab = await p.evaluate(() => document.getElementById('hero').classList.contains('gl-grab'));
  console.log('over wood grab?', grab);
  await p.mouse.down();
  await p.waitForTimeout(80);
  await p.mouse.move(fx, fy, { steps: 16 });
  await p.waitForTimeout(80);
  await p.mouse.up();
  await p.waitForTimeout(1400);
  const hint = await p.evaluate(() => document.getElementById('hero-hint')?.textContent);
  console.log('hint after:', hint);
  await p.screenshot({ path: OUT + 'desktop-hero-interact-1440.png' });

  // second throw click-click style
  await p.mouse.click(1440 * 0.78, 900 * 0.68);
  await p.waitForTimeout(200);
  await p.mouse.click(1440 * 0.64, 900 * 0.58);
  await p.waitForTimeout(1200);
  console.log('hint2:', await p.evaluate(() => document.getElementById('hero-hint')?.textContent));
  await p.screenshot({ path: OUT + 'desktop-hero-fueled-1440.png' });

  // phone
  const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await m.goto('http://127.0.0.1:8792/', { waitUntil: 'networkidle' });
  await m.waitForFunction(() => document.documentElement.classList.contains('webgl-on'));
  await m.evaluate(() => {
    document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'none'; el.style.visibility = 'visible';
    });
  });
  await m.waitForTimeout(2000);
  await m.screenshot({ path: OUT + 'phone-hero-390.png' });
  // tap wood area
  await m.touchscreen.tap(390 * 0.62, 844 * 0.62);
  await m.waitForTimeout(1400);
  console.log('phone hint:', await m.evaluate(() => document.getElementById('hero-hint')?.textContent));
  await m.screenshot({ path: OUT + 'phone-hero-interact-390.png' });

  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
