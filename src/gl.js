/* 栖野文旅 — Hero WebGL
   Misty ridges + mid-ground wooden cabin courtyard + interactive campfire.
   Quiet-luxury mood; no sphere piles. */
import * as THREE from '../vendor/three.module.min.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;

function webglOK(){
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

if (reduced) root.classList.add('rm');
if (!webglOK() || reduced) root.classList.add('no-webgl');
else {
  try { init(); }
  catch (e) { console.warn('[qiye] webgl disabled:', e && e.message); root.classList.add('no-webgl'); }
}

function ridgeGeometry(width, depth, segs, heightFn){
  const geo = new THREE.PlaneGeometry(width, depth, segs, Math.max(4, (segs / 4) | 0));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    pos.setY(i, heightFn(x, z));
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

function makeMat(color, opts){
  return new THREE.MeshStandardMaterial(Object.assign({
    color, roughness: 0.88, metalness: 0.04
  }, opts || {}));
}

function init(){
  const canvas = document.getElementById('gl');
  if (!canvas) return;
  const hero = document.getElementById('hero');
  const hint = document.getElementById('hero-hint');
  let lite = innerWidth < 720 || coarse;

  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: !lite, alpha: false, powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, lite ? 1.15 : 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x0B1611, 1);
  renderer.shadowMap.enabled = !lite;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x14261C, 0.032);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 140);
  // Bias right so cabin/fire sit in empty mid-ground; copy stays readable on left
  camera.position.set(1.35, 2.45, 9.2);

  scene.add(new THREE.AmbientLight(0x5A6E62, 0.42));
  const key = new THREE.DirectionalLight(0xD4A574, 0.55);
  key.position.set(-7, 6, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x3A5548, 0.28);
  fill.position.set(6, 3, -4);
  scene.add(fill);
  const moon = new THREE.DirectionalLight(0x8FA892, 0.18);
  moon.position.set(2, 8, -6);
  scene.add(moon);

  // sky dome
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uTop: { value: new THREE.Color(0x152820) },
      uMid: { value: new THREE.Color(0x1E3328) },
      uBot: { value: new THREE.Color(0x0B1611) },
      uGlow: { value: new THREE.Color(0xC4844A) },
      uTime: { value: 0 }
    },
    vertexShader: `
      varying vec3 vPos;
      void main(){
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      uniform vec3 uTop,uMid,uBot,uGlow;
      uniform float uTime;
      varying vec3 vPos;
      void main(){
        float h = normalize(vPos).y * 0.5 + 0.5;
        vec3 col = mix(uBot, uMid, smoothstep(0.0, 0.45, h));
        col = mix(col, uTop, smoothstep(0.4, 0.95, h));
        float glow = pow(1.0 - abs(normalize(vPos).x - 0.22), 9.0) * smoothstep(0.08, 0.5, h);
        col += uGlow * glow * (0.2 + 0.035 * sin(uTime * 0.35));
        gl_FragColor = vec4(col, 1.0);
      }`
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(70, 32, 16), skyMat));

  const world = new THREE.Group();
  scene.add(world);

  // —— distant ridges ——
  const ridges = [
    { y: -0.85, z: -18, w: 56, d: 20, segs: lite ? 40 : 72, h: 4.4, color: 0x0D1813 },
    { y: -0.55, z: -12, w: 42, d: 16, segs: lite ? 36 : 60, h: 3.0, color: 0x162820 },
    { y: -0.25, z: -7.2, w: 32, d: 12, segs: lite ? 28 : 48, h: 1.9, color: 0x22382D }
  ];
  ridges.forEach((r, idx) => {
    const geo = ridgeGeometry(r.w, r.d, r.segs, (x, z) => {
      const nx = x / r.w;
      const nz = z / r.d;
      const base = Math.exp(-nx * nx * 2.0) * r.h;
      const wavy = Math.sin(nx * Math.PI * (2.2 + idx)) * 0.32 * r.h
        + Math.sin(nx * 8 + nz * 3) * 0.11 * r.h
        + Math.cos(nx * 5.2 - nz * 2) * 0.07 * r.h;
      const edge = Math.max(0, 1 - Math.abs(nx) * 1.12);
      return Math.max(0, (base * 0.55 + wavy) * edge);
    });
    const mesh = new THREE.Mesh(geo, makeMat(r.color, { roughness: 0.95 }));
    mesh.position.set(0, r.y, r.z);
    world.add(mesh);
  });

  // mist sheets
  const mistGeo = new THREE.PlaneGeometry(44, 7);
  function mistMaterial(opacity){
    return new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: {
        uColor: { value: new THREE.Color(0xC9B8A3) },
        uOpacity: { value: opacity },
        uTime: { value: 0 },
        uShift: { value: Math.random() * 10 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 uColor; uniform float uOpacity,uTime,uShift;
        varying vec2 vUv;
        void main(){
          float n = sin((vUv.x + uShift) * 5.5 + uTime * 0.12) * 0.5 + 0.5;
          float a = smoothstep(0.0, 0.32, vUv.y) * smoothstep(1.0, 0.42, vUv.y);
          a *= smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          a *= (0.5 + 0.5 * n) * uOpacity;
          gl_FragColor = vec4(uColor, a);
        }`
    });
  }
  const mists = [];
  for (let i = 0; i < (lite ? 2 : 3); i++) {
    const m = new THREE.Mesh(mistGeo, mistMaterial(0.07 - i * 0.018));
    m.position.set((i - 1) * 2.2, 0.85 + i * 0.3, -4.2 - i * 1.6);
    m.rotation.x = -0.1;
    world.add(m);
    mists.push(m);
  }

  // —— courtyard stage (mid-ground, biased right) ——
  const yard = new THREE.Group();
  yard.position.set(2.85, -0.05, 1.15);
  yard.scale.setScalar(1.15);
  world.add(yard);

  // ground disc / terrace
  const groundMat = makeMat(0x1C2A22, { roughness: 0.96 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(5.2, lite ? 32 : 48), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0.01;
  ground.receiveShadow = true;
  yard.add(ground);

  // moss ring
  const moss = new THREE.Mesh(
    new THREE.RingGeometry(2.2, 4.6, lite ? 24 : 40),
    makeMat(0x24382C, { roughness: 1 })
  );
  moss.rotation.x = -Math.PI / 2;
  moss.position.y = 0.02;
  yard.add(moss);

  // stone path
  const stoneMat = makeMat(0x4A453C, { roughness: 0.9 });
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Mesh(
      new THREE.BoxGeometry(0.42 + Math.random() * 0.12, 0.05, 0.32 + Math.random() * 0.1),
      stoneMat
    );
    const t = i / 6;
    s.position.set(-0.15 - t * 0.35 + (Math.random() - 0.5) * 0.08, 0.04, 1.8 - t * 1.55);
    s.rotation.y = (Math.random() - 0.5) * 0.35;
    s.receiveShadow = true;
    yard.add(s);
  }

  // —— cabin ——
  const cabin = buildCabin(lite);
  cabin.position.set(0.35, 0, -1.35);
  cabin.rotation.y = -0.42;
  cabin.scale.setScalar(1.12);
  yard.add(cabin);

  // low fence / posts
  const postMat = makeMat(0x2A2218, { roughness: 0.85 });
  for (let i = 0; i < 5; i++) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.55, 6), postMat);
    post.position.set(-1.8 + i * 0.55, 0.28, 1.55);
    post.castShadow = true;
    yard.add(post);
    if (i < 4) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.03), postMat);
      rail.position.set(-1.55 + i * 0.55, 0.38, 1.55);
      yard.add(rail);
    }
  }

  // bench
  const bench = new THREE.Group();
  const plank = makeMat(0x3A2E22, { roughness: 0.82 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.28), plank);
  seat.position.y = 0.28;
  const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.24), plank);
  const leg2 = leg1.clone();
  leg1.position.set(-0.35, 0.14, 0);
  leg2.position.set(0.35, 0.14, 0);
  bench.add(seat, leg1, leg2);
  bench.position.set(-1.35, 0, 0.35);
  bench.rotation.y = 0.5;
  yard.add(bench);

  // pine silhouettes behind cabin
  for (let i = 0; i < (lite ? 3 : 5); i++) {
    const pine = buildPine(0.55 + Math.random() * 0.35);
    pine.position.set(-1.2 + i * 0.85 + (i > 2 ? 0.6 : 0), 0, -2.4 - (i % 2) * 0.4);
    pine.scale.y = 0.9 + Math.random() * 0.35;
    yard.add(pine);
  }

  // —— campfire ——
  const fireGroup = new THREE.Group();
  fireGroup.position.set(0.15, 0, 1.2);
  yard.add(fireGroup);

  // stone ring
  const ringStone = makeMat(0x3D3A34, { roughness: 0.92 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const st = new THREE.Mesh(
      new THREE.SphereGeometry(0.09 + (i % 2) * 0.02, 5, 4),
      ringStone
    );
    st.position.set(Math.cos(a) * 0.38, 0.07, Math.sin(a) * 0.38);
    st.scale.y = 0.65;
    fireGroup.add(st);
  }

  // crossed logs in pit
  const logMat = makeMat(0x2C2118, { roughness: 0.9 });
  const pitLog1 = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.7, 6), logMat);
  pitLog1.rotation.z = Math.PI / 2;
  pitLog1.rotation.y = 0.4;
  pitLog1.position.y = 0.08;
  const pitLog2 = pitLog1.clone();
  pitLog2.rotation.y = -0.9;
  fireGroup.add(pitLog1, pitLog2);

  // warm fire light
  const fireLight = new THREE.PointLight(0xFF9A4A, 2.1, 11, 2);
  fireLight.position.set(0, 0.5, 0);
  if (!lite) {
    fireLight.castShadow = true;
    fireLight.shadow.mapSize.set(512, 512);
    fireLight.shadow.camera.near = 0.1;
    fireLight.shadow.camera.far = 10;
  }
  fireGroup.add(fireLight);
  const fireGlow = new THREE.PointLight(0xC4844A, 0.55, 5, 2);
  fireGlow.position.set(0, 0.25, 0);
  fireGroup.add(fireGlow);

  // flame billboards (shader quads)
  const flameCount = lite ? 4 : 6;
  const flames = [];
  for (let i = 0; i < flameCount; i++) {
    const fm = createFlameMaterial(0.55 + i * 0.08);
    const flame = new THREE.Mesh(new THREE.PlaneGeometry(0.48 - i * 0.04, 0.72 - i * 0.05), fm);
    flame.position.set((Math.random() - 0.5) * 0.1, 0.38 + i * 0.025, (Math.random() - 0.5) * 0.1);
    flame.renderOrder = 2;
    fireGroup.add(flame);
    flames.push(flame);
  }

  // ember particles
  const emberCount = lite ? 32 : 64;
  const emberGeo = new THREE.BufferGeometry();
  const emberPos = new Float32Array(emberCount * 3);
  const emberVel = [];
  for (let i = 0; i < emberCount; i++) {
    emberPos[i * 3] = (Math.random() - 0.5) * 0.2;
    emberPos[i * 3 + 1] = Math.random() * 0.6;
    emberPos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    emberVel.push({
      vx: (Math.random() - 0.5) * 0.15,
      vy: 0.25 + Math.random() * 0.45,
      vz: (Math.random() - 0.5) * 0.15,
      life: Math.random()
    });
  }
  emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
  const emberMat = new THREE.PointsMaterial({
    color: 0xFFB060,
    size: lite ? 0.035 : 0.045,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  });
  const embers = new THREE.Points(emberGeo, emberMat);
  fireGroup.add(embers);

  // invisible fire hit target
  const fireHit = new THREE.Mesh(
    new THREE.SphereGeometry(0.85, 10, 10),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  fireHit.position.y = 0.4;
  fireHit.userData.kind = 'fire';
  fireGroup.add(fireHit);

  // fire boost state
  let boost = 0; // 0..1 transient fuel intensity
  let baseIntensity = 2.1;

  // —— firewood stack (interactive) ——
  const woods = [];
  const woodHome = new THREE.Group();
  // right of fire — sits in empty mid/lower-right, away from title/CTAs
  woodHome.position.set(1.15, 0, 1.35);
  yard.add(woodHome);

  // ground plate under stack
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.07, 10), makeMat(0x2A241C));
  plate.position.y = 0.03;
  woodHome.add(plate);

  const woodSpecs = [
    { x: -0.14, y: 0.12, z: 0.06, ry: 0.35 },
    { x: 0.14, y: 0.12, z: -0.04, ry: -0.55 },
    { x: -0.02, y: 0.24, z: 0.04, ry: 0.95 },
    { x: 0.08, y: 0.34, z: 0.1, ry: -0.25 }
  ];
  woodSpecs.forEach((sp, idx) => {
    const w = buildFirewood();
    w.position.set(sp.x, sp.y, sp.z);
    w.rotation.y = sp.ry;
    w.rotation.z = (Math.random() - 0.5) * 0.15;
    w.userData = {
      kind: 'wood',
      available: true,
      homePos: w.position.clone(),
      homeRot: w.rotation.clone(),
      idx
    };
    w.castShadow = true;
    woodHome.add(w);
    woods.push(w);
  });
  // stack-level hit volume (easier grab)
  const stackHit = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 0.7, 0.9),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  stackHit.position.set(0, 0.3, 0);
  stackHit.userData = { kind: 'wood', available: true, isStackProxy: true };
  woodHome.add(stackHit);
  // warm rim so logs read against dark ground
  const woodLamp = new THREE.PointLight(0xD4A574, 0.55, 2.8, 2);
  woodLamp.position.set(0.1, 0.55, 0.55);
  woodHome.add(woodLamp);

  // soft pollen near yard
  const dustCount = lite ? 14 : 28;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 8 + 2;
    dustPos[i * 3 + 1] = Math.random() * 2.2 + 0.3;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color: 0xD4A574, size: 0.04, transparent: true, opacity: 0.28, depthWrite: false, sizeAttenuation: true
  }));
  world.add(dust);

  root.classList.add('webgl-on');
  root.classList.remove('no-webgl');
  if (hint) hint.hidden = false;

  // —— interaction ——
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.1);
  const hitPoint = new THREE.Vector3();
  let dragging = null;
  let dragOrigin = null;
  let throwAnim = null;
  let hoverWood = null;
  let pendingWood = null; // click-then-click-fire mode
  const interactables = [...woods, stackHit, fireHit];

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
    if (!hero) return;
    hero.classList.toggle('gl-grab', !!(wood || (pendingWood && fire)));
    hero.classList.toggle('gl-pending', !!pendingWood && !dragging);
  }

  function worldFirePos(){
    const v = new THREE.Vector3(0, 0.4, 0);
    fireGroup.localToWorld(v);
    return v;
  }

  function addFuel(){
    boost = Math.min(1, boost + 0.85);
    baseIntensity = Math.min(3.2, baseIntensity + 0.15);
    // burst embers
    const arr = embers.geometry.attributes.position.array;
    for (let i = 0; i < emberCount; i++) {
      if (Math.random() > 0.45) {
        arr[i * 3 + 1] = 0.1 + Math.random() * 0.2;
        emberVel[i].vy = 0.6 + Math.random() * 0.8;
        emberVel[i].life = 0;
      }
    }
    embers.geometry.attributes.position.needsUpdate = true;
    if (hint) {
      const left = woods.filter(w => w.userData.available).length;
      hint.textContent = left
        ? (left === woods.length - 1 ? '火更旺了。还可再添柴 →' : `余下 ${left} 束柴火`)
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
    try { world.attach(wood); } catch (err) { console.warn('[qiye] attach', err); }
    const start = wood.position.clone();
    let end;
    try {
      end = world.worldToLocal(worldFirePos().clone());
    } catch (err) {
      end = start.clone();
      end.y += 0.2;
    }
    if (!toFire) {
      const dist = start.distanceTo(end);
      if (dist > 2.8) {
        let homeLocal;
        try {
          homeLocal = world.worldToLocal(woodHome.localToWorld(wood.userData.homePos.clone()));
        } catch (err) {
          homeLocal = start.clone();
        }
        throwAnim = {
          wood, t: 0, dur: 0.5, done: false,
          from: start.clone(),
          to: homeLocal,
          midY: start.y + 0.35,
          returning: true
        };
        return;
      }
    }
    throwAnim = {
      wood, t: 0, dur: 0.55, done: false,
      from: start.clone(),
      to: end.clone(),
      midY: Math.max(start.y, end.y) + 1.0,
      returning: false
    };
    // safety: if rAF stalls, still complete the gesture
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
        const local = world.worldToLocal(hitPoint.clone());
        local.y = Math.max(local.y, 0.85);
        dragging.position.copy(local);
      }
      if (hero) hero.classList.add('gl-grabbing');
      return;
    }

    const hits = raycaster.intersectObjects(interactables, true);
    hoverWood = pickWood(hits);
    const fire = pickFire(hits);
    updateCursor(hoverWood, fire);
  }

  function onDown(e){
    if (!visible || uiTarget(e.target)) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    setPointerFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactables, true);
    const wood = pickWood(hits);
    const fire = pickFire(hits);

    // click-wood then click-fire (optional second gesture)
    if (pendingWood && fire && pendingWood !== dragging) {
      startThrow(pendingWood, true);
      e.preventDefault();
      return;
    }

    if (wood) {
      dragging = wood;
      dragOrigin = { x: e.clientX, y: e.clientY };
      world.attach(wood);
      wood.position.y += 0.12;
      pendingWood = wood;
      if (hero) {
        hero.classList.add('gl-grabbing');
        hero.classList.add('is-dragging');
      }
      e.preventDefault();
    }
  }

  function onUp(e){
    if (!dragging) return;
    const wood = dragging;
    dragging = null;
    if (hero) {
      hero.classList.remove('gl-grabbing');
      hero.classList.remove('is-dragging');
    }
    // Pick up → release always tends the fire (drag OR tap).
    // Cancel only if released far outside the courtyard after a long drag.
    setPointerFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([fireHit, stackHit, ...woods], true);
    const nearScene = hits.length > 0 || (() => {
      const p = wood.getWorldPosition(new THREE.Vector3());
      return p.distanceTo(worldFirePos()) < 4.5;
    })();
    startThrow(wood, nearScene || !dragOrigin || (
      Math.hypot((e.clientX - dragOrigin.x), (e.clientY - dragOrigin.y)) < 28
    ));
    e.preventDefault();
  }

  if (hero) {
    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerdown', onDown, { passive: false });
    hero.addEventListener('pointerup', onUp, { passive: false });
    hero.addEventListener('pointercancel', onUp, { passive: false });
    // prevent scroll while dragging on touch
    hero.addEventListener('touchmove', (e) => {
      if (dragging) e.preventDefault();
    }, { passive: false });
  }

  // —— resize / scroll / loop ——
  let w = 1, h = 1, visible = true;
  function layoutForViewport(){
    const mobile = innerWidth < 720;
    if (mobile) {
      yard.position.set(0.55, -0.2, 1.55);
      yard.scale.setScalar(0.92);
      camera.position.set(0.35, 2.7, 9.4);
      camera.lookAt(0.55, 0.55, 0.6);
    } else {
      yard.position.set(2.85, -0.05, 1.15);
      yard.scale.setScalar(1.15);
      camera.position.set(1.35, 2.45, 9.2);
      camera.lookAt(2.2, 0.7, 0.4);
    }
  }

  function resize(){
    const r = hero ? hero.getBoundingClientRect() : { width: innerWidth, height: innerHeight };
    w = Math.max(1, r.width); h = Math.max(1, r.height);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    lite = innerWidth < 720 || coarse;
    layoutForViewport();
  }
  resize();
  addEventListener('resize', resize, { passive: true });

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  if (!coarse) {
    addEventListener('pointermove', (e) => {
      mouse.tx = (e.clientX / innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / innerHeight) * 2 - 1;
    }, { passive: true });
  }

  let scrollFade = 1;
  function onScroll(){
    if (!hero) return;
    const r = hero.getBoundingClientRect();
    const tot = Math.max(1, r.height);
    scrollFade = Math.max(0, Math.min(1, r.bottom / tot));
    visible = r.bottom > 40 && r.top < innerHeight;
    canvas.style.opacity = String(0.12 + scrollFade * 0.88);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const clock = new THREE.Clock();
  let alive = true;
  let look = new THREE.Vector3(1.6, 0.85, -0.2);

  function frame(){
    if (!alive) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;
    const flying = !!(throwAnim && !throwAnim.done);
    if ((!visible || document.hidden) && !flying) return;

    skyMat.uniforms.uTime.value = t;
    mists.forEach((m, i) => {
      m.material.uniforms.uTime.value = t;
      m.position.x = Math.sin(t * 0.06 + i) * 0.5 + (i - 1) * 2.0;
    });

    // fire flicker + boost
    boost = Math.max(0, boost - dt * 0.45);
    const flicker = 1 + Math.sin(t * 11.0) * 0.08 + Math.sin(t * 17.3) * 0.05;
    const fuel = 1 + boost * 1.4;
    fireLight.intensity = baseIntensity * flicker * fuel;
    fireGlow.intensity = 0.45 * flicker * fuel;
    fireLight.position.y = 0.4 + Math.sin(t * 9) * 0.03;

    flames.forEach((f, i) => {
      f.material.uniforms.uTime.value = t;
      f.material.uniforms.uBoost.value = boost;
      f.scale.setScalar(1 + boost * 0.45 + Math.sin(t * 8 + i) * 0.04);
      f.position.y = 0.3 + i * 0.02 + Math.sin(t * 6 + i) * 0.02;
      f.quaternion.copy(camera.quaternion); // billboard
    });

    // embers
    const arr = embers.geometry.attributes.position.array;
    for (let i = 0; i < emberCount; i++) {
      const v = emberVel[i];
      v.life += dt * (0.35 + boost * 0.4);
      arr[i * 3] += v.vx * dt;
      arr[i * 3 + 1] += v.vy * dt * (1 + boost);
      arr[i * 3 + 2] += v.vz * dt;
      if (v.life > 1 || arr[i * 3 + 1] > 1.8) {
        arr[i * 3] = (Math.random() - 0.5) * 0.15;
        arr[i * 3 + 1] = 0.05 + Math.random() * 0.1;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
        v.vx = (Math.random() - 0.5) * 0.2;
        v.vy = 0.3 + Math.random() * 0.5;
        v.vz = (Math.random() - 0.5) * 0.2;
        v.life = 0;
      }
    }
    embers.geometry.attributes.position.needsUpdate = true;
    emberMat.opacity = 0.55 + boost * 0.4;

    // throw animation
    if (throwAnim && !throwAnim.done) {
      throwAnim.t += dt;
      const u = Math.min(1, throwAnim.t / Math.max(0.01, throwAnim.dur));
      const e = 1 - Math.pow(1 - u, 3);
      try {
        const p = throwAnim.wood.position;
        const from = throwAnim.from, to = throwAnim.to;
        p.x = from.x + (to.x - from.x) * e;
        p.z = from.z + (to.z - from.z) * e;
        const arc = Math.sin(u * Math.PI) * Math.max(0.2, throwAnim.midY - Math.max(from.y, to.y));
        p.y = from.y + (to.y - from.y) * e + arc;
        throwAnim.wood.rotation.x += dt * 4;
        throwAnim.wood.rotation.z += dt * 2.5;
      } catch (err) {
        finishThrow(throwAnim);
      }
      if (u >= 1) finishThrow(throwAnim);
    }

    // parallax via camera only (keeps throw coords stable)
    mouse.x += (mouse.tx - mouse.x) * 0.035;
    mouse.y += (mouse.ty - mouse.y) * 0.035;
    const mobile = innerWidth < 720;
    const baseCam = mobile
      ? { x: 0.35, y: 2.7, z: 9.4, lx: 0.55, ly: 0.55, lz: 0.6 }
      : { x: 1.35, y: 2.45, z: 9.2, lx: 2.2, ly: 0.7, lz: 0.4 };
    camera.position.x = baseCam.x + mouse.x * 0.32;
    camera.position.y = baseCam.y + mouse.y * -0.12 + Math.sin(t * 0.22) * 0.025;
    camera.position.z = baseCam.z;
    look.set(baseCam.lx + mouse.x * 0.15, baseCam.ly, baseCam.lz);
    camera.lookAt(look);

    // cabin window pulse
    if (cabin.userData.windowLight) {
      cabin.userData.windowLight.intensity = 0.55 + Math.sin(t * 1.2) * 0.06 + boost * 0.15;
    }

    const darr = dust.geometry.attributes.position.array;
    for (let i = 0; i < dustCount; i++) {
      darr[i * 3 + 1] += Math.sin(t * 0.25 + i) * 0.0007;
      darr[i * 3] += Math.cos(t * 0.12 + i * 0.6) * 0.0004;
    }
    dust.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  frame();

  addEventListener('beforeunload', () => { alive = false; });
}

function buildCabin(lite){
  const g = new THREE.Group();
  const wood = makeMat(0x3A2C20, { roughness: 0.86 });
  const woodDark = makeMat(0x2A1F16, { roughness: 0.9 });
  const roofMat = makeMat(0x4A3426, { roughness: 0.78, metalness: 0.06 });
  const copper = makeMat(0xC4844A, { roughness: 0.55, metalness: 0.25 });

  // main body
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.15, 1.25), wood);
  body.position.y = 0.58;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  // side lean-to
  const lean = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.75, 0.9), woodDark);
  lean.position.set(1.05, 0.38, 0.05);
  lean.castShadow = true;
  g.add(lean);

  // gable roof (two slabs)
  const roofL = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.08, 0.85), roofMat);
  roofL.position.set(0, 1.28, -0.28);
  roofL.rotation.x = 0.52;
  const roofR = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.08, 0.85), roofMat);
  roofR.position.set(0, 1.28, 0.28);
  roofR.rotation.x = -0.52;
  g.add(roofL, roofR);

  // lean roof
  const leanRoof = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.06, 1.0), roofMat);
  leanRoof.position.set(1.05, 0.82, 0.05);
  leanRoof.rotation.z = -0.35;
  g.add(leanRoof);

  // ridge beam
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.05, 0.05), copper);
  ridge.position.set(0, 1.48, 0);
  g.add(ridge);

  // chimney
  const chim = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.45, 0.22), makeMat(0x3D3A34));
  chim.position.set(-0.45, 1.55, -0.15);
  g.add(chim);
  const chimCap = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.04, 0.28), copper);
  chimCap.position.set(-0.45, 1.78, -0.15);
  g.add(chimCap);

  // porch posts
  const postGeo = new THREE.CylinderGeometry(0.035, 0.04, 0.95, 6);
  [[-0.7, 0.55], [0.7, 0.55]].forEach(([x, z]) => {
    const p = new THREE.Mesh(postGeo, woodDark);
    p.position.set(x, 0.48, 0.72);
    p.castShadow = true;
    g.add(p);
  });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.06, 0.06), woodDark);
  beam.position.set(0, 0.95, 0.72);
  g.add(beam);

  // door
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.7, 0.04), woodDark);
  door.position.set(0.15, 0.4, 0.64);
  g.add(door);

  // glowing window
  const winMat = new THREE.MeshStandardMaterial({
    color: 0xC4844A,
    emissive: 0xC4844A,
    emissiveIntensity: 0.85,
    roughness: 0.4,
    metalness: 0
  });
  const win = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.28), winMat);
  win.position.set(-0.45, 0.62, 0.64);
  g.add(win);
  const win2 = win.clone();
  win2.position.set(-0.45, 0.62, -0.64);
  win2.rotation.y = Math.PI;
  g.add(win2);

  const windowLight = new THREE.PointLight(0xE8A860, 0.55, 3.5, 2);
  windowLight.position.set(-0.45, 0.62, 0.9);
  g.add(windowLight);
  g.userData.windowLight = windowLight;

  // foundation stones
  const found = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.12, 1.35), makeMat(0x3D3A34, { roughness: 0.95 }));
  found.position.y = 0.06;
  g.add(found);

  return g;
}

function buildPine(h){
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.06, h * 0.35, 5),
    makeMat(0x2A2118)
  );
  trunk.position.y = h * 0.175;
  g.add(trunk);
  const leaf = makeMat(0x1A2F23, { roughness: 0.95 });
  for (let i = 0; i < 3; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.35 - i * 0.07, h * 0.38, 7), leaf);
    cone.position.y = h * 0.35 + i * h * 0.22;
    g.add(cone);
  }
  return g;
}

function buildFirewood(){
  const g = new THREE.Group();
  const mat = makeMat(0x6B4A32, { roughness: 0.82 });
  const endMat = makeMat(0xE8DCC8, { roughness: 0.65 });
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.11, 0.72, 8), mat);
  log.rotation.z = Math.PI / 2;
  log.castShadow = true;
  g.add(log);
  const end1 = new THREE.Mesh(new THREE.CircleGeometry(0.095, 8), endMat);
  end1.position.x = 0.36;
  end1.rotation.y = Math.PI / 2;
  const end2 = end1.clone();
  end2.position.x = -0.36;
  end2.rotation.y = -Math.PI / 2;
  g.add(end1, end2);
  // generous hit proxy for easier grab
  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.45, 0.45),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  g.add(hit);
  return g;
}

function createFlameMaterial(seed){
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uBoost: { value: 0 },
      uSeed: { value: seed }
    },
    vertexShader: `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      uniform float uTime,uBoost,uSeed;
      varying vec2 vUv;
      void main(){
        vec2 uv = vUv;
        float w = sin(uv.y * 10.0 + uTime * 6.0 + uSeed * 5.0) * 0.04 * (1.0 - uv.y);
        float x = abs((uv.x + w) - 0.5) * 2.0;
        float body = smoothstep(0.55, 0.0, x) * smoothstep(0.0, 0.15, uv.y) * smoothstep(1.0, 0.25, uv.y);
        body *= 0.75 + 0.25 * sin(uTime * 9.0 + uv.y * 8.0 + uSeed);
        vec3 col = mix(vec3(0.85, 0.25, 0.05), vec3(1.0, 0.78, 0.35), uv.y);
        col = mix(col, vec3(1.0, 0.95, 0.7), pow(uv.y, 2.5) * 0.5);
        float a = body * (0.55 + uBoost * 0.4);
        gl_FragColor = vec4(col, a);
      }`
  });
}
