const { chromium } = require('playwright-core');
const OUT='/workspace/qiye-wenlv/handoff/';
const URL='http://127.0.0.1:8792/';
(async()=>{
  const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  // brand board
  {
    const p=await b.newPage({viewport:{width:1440,height:900}});
    await p.goto(URL+'brand/brand-board.html',{waitUntil:'networkidle'});
    await p.waitForTimeout(1800);
    await p.screenshot({path:'/workspace/qiye-wenlv/brand/brand-board.png'});
    await p.screenshot({path:OUT+'brand-board.png'});
    await p.close();
  }
  async function settle(page){
    await page.goto(URL,{waitUntil:'networkidle',timeout:60000});
    await page.waitForTimeout(1500);
    await page.evaluate(()=>{
      document.querySelectorAll('.hero-title .line > span, .hero-sub, .hero-actions, .eyebrow, .hero-foot, .hero-hud, .reveal, .reveal-img, .reveal-stagger > *').forEach(el=>{
        el.style.opacity='1'; el.style.transform='none'; el.style.visibility='visible';
      });
    });
    await page.waitForTimeout(900);
  }
  {
    const p=await b.newPage({viewport:{width:1440,height:900}});
    await settle(p);
    await p.screenshot({path:OUT+'desktop-hero-1440.png'});
    for (const [sel,name] of [['#about','desktop-about'],['#business','desktop-business'],['#cases','desktop-cases'],['#contact','desktop-contact']]){
      await p.evaluate(s=>{const el=document.querySelector(s); if(el){ el.scrollIntoView({block:'start'}); } }, sel);
      await p.waitForTimeout(700);
      await p.screenshot({path:OUT+name+'-1440.png'});
    }
    await p.close();
  }
  {
    const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
    await settle(p);
    await p.screenshot({path:OUT+'phone-hero-390.png'});
    await p.evaluate(()=>{ const el=document.querySelector('#contact'); if(el) el.scrollIntoView({block:'start'}); });
    await p.waitForTimeout(800);
    await p.screenshot({path:OUT+'phone-contact-390.png'});
    await p.evaluate(()=>{ const el=document.querySelector('#business'); if(el) el.scrollIntoView({block:'start'}); });
    await p.waitForTimeout(600);
    await p.screenshot({path:OUT+'phone-business-390.png'});
    await p.close();
  }
  await b.close();
  console.log('reshoot done');
})().catch(e=>{console.error(e);process.exit(1);});
