const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://127.0.0.1:8792/', { waitUntil: 'networkidle' });
  await p.waitForFunction(() => document.documentElement.classList.contains('webgl-on'));
  await p.waitForTimeout(2000);

  const samples = [];
  for (let y = 0.45; y <= 0.85; y += 0.05) {
    for (let x = 0.45; x <= 0.85; x += 0.05) {
      const px = 1440 * x, py = 900 * y;
      await p.mouse.move(px, py);
      await p.waitForTimeout(40);
      const info = await p.evaluate(({ px, py }) => {
        const el = document.elementFromPoint(px, py);
        return {
          grab: document.getElementById('hero').classList.contains('gl-grab'),
          tag: el && (el.id || String(el.className) || el.tagName),
        };
      }, { px, py });
      if (info.grab) samples.push({ x: +x.toFixed(2), y: +y.toFixed(2), ...info });
    }
  }
  console.log('grab hits', samples.length);
  console.log(JSON.stringify(samples.slice(0, 30), null, 2));

  for (const [x, y] of [[0.55,0.6],[0.62,0.65],[0.68,0.62],[0.72,0.58],[0.5,0.7],[0.65,0.72],[0.6,0.55]]) {
    const px = 1440 * x, py = 900 * y;
    await p.mouse.move(px, py);
    await p.waitForTimeout(50);
    const info = await p.evaluate(({ px, py }) => {
      const el = document.elementFromPoint(px, py);
      return { tag: el && (el.id || String(el.className) || el.tagName), grab: document.getElementById('hero').classList.contains('gl-grab') };
    }, { px, py });
    console.log(x, y, info);
  }

  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
