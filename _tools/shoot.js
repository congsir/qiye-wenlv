const { chromium } = require('playwright-core');
const OUT = '/workspace/qiye-wenlv/handoff/';
const URL = 'http://127.0.0.1:8792/';
const fs = require('fs');
fs.mkdirSync(OUT, { recursive: true });

async function settle(page){
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.evaluate(async ()=>{
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot, .hero-hud').forEach(el=>{
      el.style.opacity='1'; el.style.transform='none'; el.style.visibility='visible';
    });
    document.querySelectorAll('.reveal, .reveal-img, .reveal-stagger > *').forEach(el=>{
      el.style.opacity='1'; el.style.transform='none';
    });
  });
  await page.waitForTimeout(800);
}

(async()=>{
  const b = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']
  });
  const errs = [];

  // Brand board
  {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    await p.goto(URL + 'brand/brand-board.html', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1500);
    await p.screenshot({ path: '/workspace/qiye-wenlv/brand/brand-board.png' });
    await p.close();
  }

  // Desktop hero + sections
  {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    p.on('pageerror', e => errs.push(String(e)));
    p.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
    await settle(p);
    await p.screenshot({ path: OUT + 'desktop-hero-1440.png' });
    for (const [sel, name] of [
      ['#about','desktop-about'],
      ['#business','desktop-business'],
      ['#cases','desktop-cases'],
      ['#experience','desktop-experience'],
      ['#contact','desktop-contact'],
    ]) {
      await p.evaluate((s)=>{ const el=document.querySelector(s); if(el) el.scrollIntoView({block:'start'}); }, sel);
      await p.waitForTimeout(600);
      await p.screenshot({ path: OUT + name + '-1440.png' });
    }
    // full page
    await p.evaluate(()=>window.scrollTo(0,0));
    await p.waitForTimeout(400);
    await p.screenshot({ path: OUT + 'desktop-full-1440.png', fullPage: true });
    errs.push('scrollW '+await p.evaluate(()=>document.documentElement.scrollWidth));
    await p.close();
  }

  // Phone
  {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await settle(p);
    await p.screenshot({ path: OUT + 'phone-hero-390.png' });
    await p.evaluate(()=>{ const el=document.querySelector('#business'); if(el) el.scrollIntoView(); });
    await p.waitForTimeout(500);
    await p.screenshot({ path: OUT + 'phone-business-390.png' });
    await p.evaluate(()=>{ const el=document.querySelector('#contact'); if(el) el.scrollIntoView(); });
    await p.waitForTimeout(500);
    await p.screenshot({ path: OUT + 'phone-contact-390.png' });
    await p.close();
  }

  // Wide hero 1920
  {
    const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
    await settle(p);
    await p.screenshot({ path: OUT + 'desktop-hero-1920.png' });
    await p.close();
  }

  console.log('errs:', errs);
  await b.close();
})().catch(e=>{ console.error(e); process.exit(1); });
