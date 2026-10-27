/* 栖野文旅 — Hero WebGL
   Real photo is the cabin and yard. Only the campfire and draggable
   firewood are 3D, seated in the photo's stone pit. Canvas stays transparent. */
import * as THREE from '../vendor/three.module.min.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const IMG_W = 3000;
const IMG_H = 2000;
/* Inner flame of the Clay Banks pit (photo-1697462248369). */
const PIT_U = 0.623;
const PIT_V = 0.801;
const PIT_R = 0.036;

function webglOK(){
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

if (reduced) root.classList.add('rm');
if (!webglOK() || reduced) {
  root.classList.add('no-webgl');
  framePhoto();
  addEventListener('resize', framePhoto, { passive: true });
} else {
  try { init(); }
  catch (e) {
    console.warn('[qiye] webgl disabled:', e && e.message);
    root.classList.add('no-webgl');
    framePhoto();
  }
}

function framePhoto(){
  const hero = document.getElementById('hero');
  const fallback = hero && hero.querySelector('.hero-fallback');
  if (!hero || !fallback) return;
  const r = hero.getBoundingClientRect();
  layoutPhoto(fallback, r.width, r.height);
}

function layoutPhoto(fallback, vw, vh){
  const mobile = vw < 720;
  const cover = Math.max(vw / IMG_W, vh / IMG_H);
  const scale = cover * (mobile ? 1 : 1);
  const dispW = IMG_W * scale;
  const dispH = IMG_H * scale;
  const targetX = mobile ? vw * 0.86 : vw * 0.66;
  const targetY = mobile ? vh * 0.58 : vh * 0.64;
  let left = targetX - PIT_U * dispW;
  let top = targetY - PIT_V * dispH;
  left = Math.min(0, Math.max(vw - dispW, left));
  top = Math.min(0, Math.max(vh - dispH, top));
  fallback.style.backgroundSize = dispW.toFixed(2) + 'px ' + dispH.toFixed(2) + 'px';
  fallback.style.backgroundPosition = left.toFixed(2) + 'px ' + top.toFixed(2) + 'px';
  const pitX = left + PIT_U * dispW;
  const pitY = top + PIT_V * dispH;
  const radiusPx = PIT_R * dispW;
  const glow = document.getElementById('hero-fireglow');
  if (glow) {
    glow.style.left = pitX + 'px';
    glow.style.top = (pitY + radiusPx * 0.15) + 'px';
    glow.style.width = (radiusPx * 3.1) + 'px';
    glow.style.height = (radiusPx * 1.8) + 'px';
  }
  return { pitX, pitY, radiusPx, vw, vh };
}

function makeMat(color, opts){
  return new THREE.MeshStandardMaterial(Object.assign({
    color, roughness: 0.9, metalness: 0.02, transparent: false, opacity: 1
  }, opts || {}));
}

function init(){
  const canvas = document.getElementById('gl');
  const hero = document.getElementById('hero');
  const fallback = hero && hero.querySelector('.hero-fallback');
  const hint = document.getElementById('hero-hint');
  if (!canvas || !hero || !fallback) return;

  let lite = innerWidth < 720 || matchMedia('(pointer: coarse)').matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !lite,
    alpha: true,
    premultipliedAlpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, lite ? 1.25 : 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.background = null;
  scene.fog = null;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 40);
  camera.position.set(0.05, 2.05, 4.35);

  scene.add(new THREE.AmbientLight(0xC4B09A, 0.42));
  scene.add(new THREE.HemisphereLight(0xF0E2D0, 0x3A2A22, 0.38));

  const fireGroup = new THREE.Group();
  scene.add(fireGroup);

  const coal = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, lite ? 20 : 32),
    makeMat(0x140E0B, { roughness: 1, metalness: 0 })
  );
  coal.rotation.x = -Math.PI / 2;
  coal.position.y = 0.012;
  fireGroup.add(coal);
  const emberBed = new THREE.Mesh(
    new THREE.CircleGeometry(0.26, lite ? 16 : 24),
    new THREE.MeshStandardMaterial({
      color: 0x3A1A0C,
      emissive: 0xE25822,
      emissiveIntensity: 0.85,
      roughness: 0.78,
      metalness: 0,
      transparent: false,
      opacity: 1
    })
  );
  emberBed.rotation.x = -Math.PI / 2;
  emberBed.position.y = 0.02;
  fireGroup.add(emberBed);

  const char = makeMat(0x2A1C14, { roughness: 0.94 });
  const charHot = new THREE.MeshStandardMaterial({
    color: 0x4A2416,
    emissive: 0xC45A28,
    emissiveIntensity: 0.45,
    roughness: 0.7,
    metalness: 0.02
  });
  function pitLog(rotY, scale){
    const g = new THREE.Group();
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.62, lite ? 6 : 10), char);
    log.rotation.z = Math.PI / 2;
    log.castShadow = false;
    g.add(log);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.028, 0.42, 6), charHot);
    core.rotation.z = Math.PI / 2;
    core.position.y = 0.02;
    g.add(core);
    g.rotation.y = rotY;
    g.scale.setScalar(scale);
    g.position.y = 0.07;
    return g;
  }
  fireGroup.add(
    pitLog(0.35, 1),
    pitLog(-0.85, 0.92),
    pitLog(1.35, 0.84)
  );

  const fireLight = new THREE.PointLight(0xFF7A3C, 3.4, 1.15, 2);
  fireLight.position.set(0, 0.28, 0);
  fireGroup.add(fireLight);
  const fillLight = new THREE.PointLight(0xE8A060, 0.7, 0.7, 2);
  fillLight.position.set(0.1, 0.22, 0.15);
  fireGroup.add(fillLight);

  const flameCount = lite ? 4 : 5;
  const flames = [];
  for (let i = 0; i < flameCount; i++) {
    const fm = createFlameMaterial(0.4 + i * 0.17, i < 3);
    const h = 0.2 - i * 0.012;
    const baseY = 0.015 + h * 0.5;
    const flame = new THREE.Mesh(new THREE.PlaneGeometry(0.26 - i * 0.018, h), fm);
    flame.position.set((i - (flameCount - 1) / 2) * 0.015, baseY, (i % 2) * 0.008);
    flame.userData.baseY = baseY;
    flame.rotation.y = i * 0.9;
    flame.renderOrder = 2;
    fireGroup.add(flame);
    flames.push(flame);
  }

  const emberCount = lite ? 28 : 48;
  const emberGeo = new THREE.BufferGeometry();
  const emberPos = new Float32Array(emberCount * 3);
  const emberVel = [];
  for (let i = 0; i < emberCount; i++) {
    emberPos[i * 3] = (Math.random() - 0.5) * 0.12;
    emberPos[i * 3 + 1] = Math.random() * 0.45;
    emberPos[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
    emberVel.push({
      vx: (Math.random() - 0.5) * 0.08,
      vy: 0.22 + Math.random() * 0.35,
      vz: (Math.random() - 0.5) * 0.08,
      life: Math.random()
    });
  }
  emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
  const emberMat = new THREE.PointsMaterial({
    color: 0xFFB060,
    size: lite ? 0.035 : 0.045,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  });
  const embers = new THREE.Points(emberGeo, emberMat);
  embers.renderOrder = 3;
  fireGroup.add(embers);

  const fireHit = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 10, 10),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  fireHit.position.y = 0.35;
  fireHit.userData.kind = 'fire';
  fireGroup.add(fireHit);

  let boost = 0;
  let baseIntensity = 4.2;

  const woods = [];
  const woodHome = new THREE.Group();
  scene.add(woodHome);
  const woodSpecs = [
    { x: -0.16, y: 0.1, z: 0.05, ry: 0.4 },
    { x: 0.16, y: 0.1, z: -0.04, ry: -0.55 },
    { x: -0.02, y: 0.22, z: 0.02, ry: 1.0 },
    { x: 0.06, y: 0.33, z: 0.08, ry: -0.2 }
  ];
  woodSpecs.forEach((sp, idx) => {
    const w = buildFirewood(lite);
    w.position.set(sp.x, sp.y, sp.z);
    w.rotation.y = sp.ry;
    w.rotation.z = (idx - 1.5) * 0.04;
    w.userData = {
      kind: 'wood',
      available: true,
      homePos: w.position.clone(),
      homeRot: w.rotation.clone(),
      idx
    };
    woodHome.add(w);
    woods.push(w);
  });
  const stackHit = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.7, 0.7),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  stackHit.position.set(0, 0.28, 0);
  stackHit.userData = { kind: 'wood', available: true, isStackProxy: true };
  woodHome.add(stackHit);

  root.classList.add('webgl-on');
  root.classList.remove('no-webgl');
  if (hint) hint.hidden = false;

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPoint = new THREE.Vector3();
  let dragging = null;
  let dragOrigin = null;
  let throwAnim = null;
  let hoverWood = null;
  let pendingWood = null;
  const interactables = [...woods, stackHit, fireHit];
  let pitRadiusWorld = 0.4;

  function setPointerFromEvent(e){
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }

  function uiTarget(el){
    return !!(el && el.closest && el.closest('a,button,input,textarea,select,label,.nav-toggle,.scroll-cue'));
  }

  function pickWood(intersects){
    for (let i = 0; i < intersects.length; i++) {
      let o = intersects[i].object;
      while (o && !o.userData.kind) o = o.parent;
      if (!o || o.userData.kind !== 'wood') continue;
      if (o.userData.isStackProxy) {
        const avail = woods.find(w => w.userData.available);
        if (avail) return avail;
        continue;
      }
      if (o.userData.available) return o;
    }
    return null;
  }

  function pickFire(intersects){
    for (let i = 0; i < intersects.length; i++) {
      let o = intersects[i].object;
      while (o && !o.userData.kind) o = o.parent;
      if (o && o.userData.kind === 'fire') return o;
    }
    return null;
  }

  function updateCursor(wood, fire){
    hero.classList.toggle('gl-grab', !!(wood || (pendingWood && fire)));
    hero.classList.toggle('gl-pending', !!pendingWood && !dragging);
  }

  function worldFirePos(){
    return fireGroup.localToWorld(new THREE.Vector3(0, 0.25, 0));
  }

  function addFuel(){
    boost = Math.min(1, boost + 0.85);
    baseIntensity = Math.min(6.4, baseIntensity + 0.28);
    const arr = embers.geometry.attributes.position.array;
    for (let i = 0; i < emberCount; i++) {
      if (Math.random() > 0.4) {
        arr[i * 3 + 1] = 0.08 + Math.random() * 0.16;
        emberVel[i].vy = 0.55 + Math.random() * 0.7;
        emberVel[i].life = 0;
      }
    }
    embers.geometry.attributes.position.needsUpdate = true;
    emberBed.material.emissiveIntensity = 1.15;
    if (hint) {
      const left = woods.filter(w => w.userData.available).length;
      hint.textContent = left
        ? (left === woods.length - 1 ? '火更旺了。还可再添柴 →' : '余下 ' + left + ' 束柴火')
        : '篝火正旺 · 柴已用尽';
      if (!left) hint.classList.add('done');
    }
  }

  function finishThrow(anim){
    if (!anim || anim.done) return;
    anim.done = true;
    const wood = anim.wood;
    if (anim.returning) {
      try {
        woodHome.attach(wood);
        wood.position.copy(wood.userData.homePos);
        wood.rotation.copy(wood.userData.homeRot);
        wood.userData.available = true;
        wood.visible = true;
      } catch (err) { console.warn('[qiye] return wood', err); }
    } else {
      addFuel();
      try {
        wood.visible = false;
        if (wood.parent) wood.parent.remove(wood);
      } catch (err) { console.warn('[qiye] consume wood', err); }
    }
    if (throwAnim === anim) throwAnim = null;
  }

  function startThrow(wood, toFire){
    if (!wood || !wood.userData.available) return;
    wood.userData.available = false;
    pendingWood = null;
    try { scene.attach(wood); } catch (err) { console.warn('[qiye] attach', err); }
    const start = wood.position.clone();
    const end = worldFirePos();
    if (!toFire && start.distanceTo(end) > pitRadiusWorld * 4.2) {
      const home = woodHome.localToWorld(wood.userData.homePos.clone());
      throwAnim = {
        wood, t: 0, dur: 0.48, done: false,
        from: start.clone(), to: home, midY: start.y + pitRadiusWorld * 0.6,
        returning: true
      };
      return;
    }
    throwAnim = {
      wood, t: 0, dur: 0.52, done: false,
      from: start.clone(), to: end.clone(),
      midY: Math.max(start.y, end.y) + pitRadiusWorld * 1.6,
      returning: false
    };
    const animRef = throwAnim;
    setTimeout(() => finishThrow(animRef), 900);
  }

  function onMove(e){
    if (!visible) return;
    if (uiTarget(e.target) && !dragging) {
      updateCursor(null, null);
      return;
    }
    setPointerFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    if (dragging) {
      if (raycaster.ray.intersectPlane(dragPlane, hitPoint)) {
        hitPoint.y = Math.max(hitPoint.y, fireGroup.position.y + pitRadiusWorld * 0.35);
        dragging.position.copy(hitPoint);
      }
      hero.classList.add('gl-grabbing');
      return;
    }
    const hits = raycaster.intersectObjects(interactables, true);
    hoverWood = pickWood(hits);
    updateCursor(hoverWood, pickFire(hits));
  }

  function onDown(e){
    if (!visible || uiTarget(e.target)) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    setPointerFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactables, true);
    const wood = pickWood(hits);
    const fire = pickFire(hits);
    if (pendingWood && fire && pendingWood !== dragging) {
      startThrow(pendingWood, true);
      e.preventDefault();
      return;
    }
    if (wood) {
      dragging = wood;
      dragOrigin = { x: e.clientX, y: e.clientY };
      scene.attach(wood);
      wood.position.y += pitRadiusWorld * 0.18;
      pendingWood = wood;
      hero.classList.add('gl-grabbing');
      hero.classList.add('is-dragging');
      e.preventDefault();
    }
  }

  function onUp(e){
    if (!dragging) return;
    const wood = dragging;
    dragging = null;
    hero.classList.remove('gl-grabbing');
    hero.classList.remove('is-dragging');
    setPointerFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([fireHit, stackHit, ...woods], true);
    const near = hits.length > 0 || wood.getWorldPosition(new THREE.Vector3()).distanceTo(worldFirePos()) < pitRadiusWorld * 4.5;
    const tap = !dragOrigin || Math.hypot(e.clientX - dragOrigin.x, e.clientY - dragOrigin.y) < 28;
    startThrow(wood, near || tap);
    e.preventDefault();
  }

  hero.addEventListener('pointermove', onMove, { passive: true });
  hero.addEventListener('pointerdown', onDown, { passive: false });
  hero.addEventListener('pointerup', onUp, { passive: false });
  hero.addEventListener('pointercancel', onUp, { passive: false });
  hero.addEventListener('touchmove', (e) => {
    if (dragging) e.preventDefault();
  }, { passive: false });

  let visible = true;
  function placeAtPixel(sx, sy, dist){
    const ndc = new THREE.Vector3((sx / Math.max(1, lastW)) * 2 - 1, -((sy / Math.max(1, lastH)) * 2 - 1), 0.5);
    ndc.unproject(camera);
    const dir = ndc.sub(camera.position).normalize();
    return camera.position.clone().add(dir.multiplyScalar(dist));
  }

  let lastW = 1, lastH = 1;
  function resize(){
    const r = hero.getBoundingClientRect();
    lastW = Math.max(1, r.width);
    lastH = Math.max(1, r.height);
    lite = innerWidth < 720 || matchMedia('(pointer: coarse)').matches;
    camera.aspect = lastW / lastH;
    camera.position.set(0.05, 2.05, 4.35);
    camera.lookAt(0, 0.12, 0);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    renderer.setSize(lastW, lastH, false);

    const frame = layoutPhoto(fallback, lastW, lastH);
    const dist = 3.55;
    // Anchor the coal bed on the photo flame, a hair low so flames rise inside the ring.
    const drop = frame.radiusPx * (lastW < 720 ? 0.16 : 0.02);
    fireGroup.position.copy(placeAtPixel(frame.pitX, frame.pitY + drop, dist));
    fireGroup.scale.setScalar(1);
    const viewH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * dist;
    const worldPerPx = viewH / lastH;
    pitRadiusWorld = Math.max(0.12, frame.radiusPx * worldPerPx);
    const modelR = 0.42;
    fireGroup.scale.setScalar(pitRadiusWorld / modelR);
    dragPlane.constant = -fireGroup.position.y;

    const heroR = hero.getBoundingClientRect();
    const blocked = (sx, sy) => {
      const x = heroR.left + sx;
      const y = heroR.top + sy;
      const pad = 16;
      const hit = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return false;
        const b = el.getBoundingClientRect();
        return x > b.left - pad && x < b.right + pad && y > b.top - pad && y < b.bottom + pad;
      };
      return hit('.hero-inner') || hit('.hero-foot') || hit('#hero-hint') ||
        sx < 28 || sx > lastW - 28 || sy < 72 || sy > lastH - 20;
    };
    const offsets = [
      [-frame.radiusPx * 1.35, frame.radiusPx * 0.05],
      [frame.radiusPx * 1.35, frame.radiusPx * 0.05],
      [-frame.radiusPx * 1.15, -frame.radiusPx * 0.85],
      [frame.radiusPx * 1.15, -frame.radiusPx * 0.85]
    ];
    let ox = offsets[0][0], oy = offsets[0][1];
    for (let i = 0; i < offsets.length; i++) {
      if (!blocked(frame.pitX + offsets[i][0], frame.pitY + offsets[i][1])) {
        ox = offsets[i][0];
        oy = offsets[i][1];
        break;
      }
    }
    const woodDist = dist;
    const woodPos = placeAtPixel(frame.pitX + ox, frame.pitY + oy, woodDist);
    woodHome.position.copy(woodPos);
    woodHome.rotation.set(0, 0, 0);
    woodHome.scale.setScalar(pitRadiusWorld / 0.42);
  }

  resize();
  addEventListener('resize', resize, { passive: true });

  function onScroll(){
    const r = hero.getBoundingClientRect();
    visible = r.bottom > 40 && r.top < innerHeight;
    canvas.style.opacity = visible ? '1' : '0';
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const clock = new THREE.Clock();
  let alive = true;

  function frame(){
    if (!alive) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;
    const flying = !!(throwAnim && !throwAnim.done);
    if ((!visible || document.hidden) && !flying) return;

    boost = Math.max(0, boost - dt * 0.42);
    const flicker = 1 + Math.sin(t * 11) * 0.07 + Math.sin(t * 17.3) * 0.04;
    const fuel = 1 + boost * 1.35;
    fireLight.intensity = baseIntensity * flicker * fuel;
    fillLight.intensity = 0.85 * flicker * fuel;
    fireLight.position.y = 0.38 + Math.sin(t * 9) * 0.03;
    emberBed.material.emissiveIntensity = 0.7 + boost * 0.7 + Math.sin(t * 13) * 0.08;

    flames.forEach((f, i) => {
      f.material.uniforms.uTime.value = t;
      f.material.uniforms.uBoost.value = boost;
      const s = 1 + boost * 0.38 + Math.sin(t * 8 + i) * 0.035;
      f.scale.set(s, s * (1 + boost * 0.15), 1);
      f.position.y = (f.userData.baseY || 0.08) + Math.sin(t * 6 + i) * 0.008;
      f.quaternion.copy(camera.quaternion);
    });

    const arr = embers.geometry.attributes.position.array;
    for (let i = 0; i < emberCount; i++) {
      const v = emberVel[i];
      v.life += dt * (0.4 + boost * 0.35);
      arr[i * 3] += v.vx * dt;
      arr[i * 3 + 1] += v.vy * dt * (1 + boost);
      arr[i * 3 + 2] += v.vz * dt;
      if (v.life > 1 || arr[i * 3 + 1] > 1.35) {
        arr[i * 3] = (Math.random() - 0.5) * 0.1;
        arr[i * 3 + 1] = 0.05;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
        v.vx = (Math.random() - 0.5) * 0.12;
        v.vy = 0.25 + Math.random() * 0.4;
        v.vz = (Math.random() - 0.5) * 0.12;
        v.life = 0;
      }
    }
    embers.geometry.attributes.position.needsUpdate = true;
    emberMat.opacity = 0.65 + boost * 0.3;

    if (throwAnim && !throwAnim.done) {
      throwAnim.t += dt;
      const u = Math.min(1, throwAnim.t / Math.max(0.01, throwAnim.dur));
      const e = 1 - Math.pow(1 - u, 3);
      const p = throwAnim.wood.position;
      const from = throwAnim.from, to = throwAnim.to;
      p.x = from.x + (to.x - from.x) * e;
      p.z = from.z + (to.z - from.z) * e;
      const arc = Math.sin(u * Math.PI) * Math.max(0.08, throwAnim.midY - Math.max(from.y, to.y));
      p.y = from.y + (to.y - from.y) * e + arc;
      throwAnim.wood.rotation.x += dt * 3.2;
      throwAnim.wood.rotation.z += dt * 2.2;
      if (u >= 1) finishThrow(throwAnim);
    }

    renderer.render(scene, camera);
  }
  frame();
  addEventListener('beforeunload', () => { alive = false; });
}

function buildFirewood(lite){
  const g = new THREE.Group();
  const mat = makeMat(0x6A4630, { roughness: 0.88 });
  const endMat = makeMat(0xE4D3BC, { roughness: 0.62 });
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.58, lite ? 7 : 12), mat);
  log.rotation.z = Math.PI / 2;
  g.add(log);
  const end1 = new THREE.Mesh(new THREE.CircleGeometry(0.075, lite ? 7 : 12), endMat);
  end1.position.x = 0.29;
  end1.rotation.y = Math.PI / 2;
  const end2 = end1.clone();
  end2.position.x = -0.29;
  end2.rotation.y = -Math.PI / 2;
  g.add(end1, end2);
  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(0.78, 0.36, 0.36),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  g.add(hit);
  return g;
}

function createFlameMaterial(seed, solid){
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: solid ? THREE.NormalBlending : THREE.AdditiveBlending,
    toneMapped: false,
    uniforms: {
      uTime: { value: 0 },
      uBoost: { value: 0 },
      uSeed: { value: seed },
      uSolid: { value: solid ? 1 : 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float uTime, uBoost, uSeed, uSolid;
      varying vec2 vUv;
      void main(){
        vec2 uv = vUv;
        float wobble = sin(uv.y * 9.0 + uTime * 7.0 + uSeed * 6.0) * 0.045 * (1.0 - uv.y);
        float x = abs((uv.x + wobble) - 0.5) * 2.0;
        float body = smoothstep(0.62, 0.02, x);
        body *= smoothstep(0.0, 0.08, uv.y) * smoothstep(1.05, 0.22, uv.y);
        body *= 0.82 + 0.18 * sin(uTime * 10.0 + uv.y * 7.0 + uSeed);
        vec3 hot = vec3(1.0, 0.93, 0.62);
        vec3 mid = vec3(1.0, 0.55, 0.12);
        vec3 base = vec3(0.72, 0.16, 0.03);
        vec3 col = mix(base, mid, smoothstep(0.0, 0.45, uv.y));
        col = mix(col, hot, smoothstep(0.45, 1.0, uv.y));
        float a = body * (uSolid > 0.5 ? (0.96 + uBoost * 0.04) : (0.55 + uBoost * 0.35));
        if (a < 0.02) discard;
        gl_FragColor = vec4(col, a);
      }`
  });
}
