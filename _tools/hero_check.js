const { chromium } = require('playwright-core');
const OUT = '/workspace/qiye-wenlv/handoff/';
const URL = 'http://127.0.0.1:8792/';

(async () => {
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });

  async function settle(page) {
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1200);
    await page.evaluate(() => {
      document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot, .hero-hud, .reveal, .reveal-img, .reveal-stagger > *').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
      });
    });
    // wait for webgl-on
    await page.waitForFunction(() => document.documentElement.classList.contains('webgl-on') || document.documentElement.classList.contains('no-webgl'), { timeout: 8000 });
    await page.waitForTimeout(1800);
  }

  // Desktop hero
  {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
    await settle(p);
    const cls = await p.evaluate(() => document.documentElement.className);
    console.log('desktop html class:', cls);
    const hint = await p.evaluate(() => {
      const h = document.getElementById('hero-hint');
      return h ? { hidden: h.hidden, text: h.textContent } : null;
    });
    console.log('hint:', hint);
    await p.screenshot({ path: OUT + 'desktop-hero-1440.png' });
    await p.screenshot({ path: OUT + 'desktop-hero-1920.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

    // Try click-drag interaction roughly over lower-right wood area
    // Use page mouse in the courtyard region (right-center lower)
    const box = await p.evaluate(() => {
      const r = document.getElementById('hero').getBoundingClientRect();
      return { x: r.left, y: r.top, w: r.width, h: r.height };
    });
    // wood stack approx screen position — right side mid-lower
    const wx = box.x + box.w * 0.62;
    const wy = box.y + box.h * 0.68;
    const fx = box.x + box.w * 0.70;
    const fy = box.y + box.h * 0.62;
    await p.mouse.move(wx, wy);
    await p.waitForTimeout(200);
    await p.mouse.down();
    await p.mouse.move(fx, fy, { steps: 12 });
    await p.mouse.up();
    await p.waitForTimeout(1200);
    const hint2 = await p.evaluate(() => {
      const h = document.getElementById('hero-hint');
      return h ? h.textContent : null;
    });
    console.log('hint after throw attempt:', hint2);
    await p.screenshot({ path: OUT + 'desktop-hero-interact-1440.png' });
    await p.close();
  }

  // Phone
  {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await settle(p);
    console.log('phone class:', await p.evaluate(() => document.documentElement.className));
    await p.screenshot({ path: OUT + 'phone-hero-390.png' });
    await p.close();
  }

  await b.close();
  console.log('hero_check done');
})().catch(e => { console.error(e); process.exit(1); });
