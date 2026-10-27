const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const logs = [];
  p.on('console', m => logs.push(m.type() + ': ' + m.text()));
  p.on('pageerror', e => logs.push('PAGEERROR: ' + e.message));
  await p.goto('http://127.0.0.1:8792/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2500);
  console.log('classes', await p.evaluate(() => document.documentElement.className));
  await p.mouse.move(1440*0.75, 900*0.65);
  await p.waitForTimeout(100);
  await p.mouse.down();
  await p.mouse.move(1440*0.64, 900*0.58, { steps: 10 });
  await p.mouse.up();
  await p.waitForTimeout(1500);
  console.log('hint', await p.evaluate(() => document.getElementById('hero-hint')?.textContent));
  console.log('logs:');
  logs.forEach(l => console.log(l));
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
