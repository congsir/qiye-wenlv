/* 栖野文旅 — Hero WebGL
   Atmospheric misty mountain ridges + soft dawn copper light.
   Elegant landscape feel — no sphere/balloon piles. */
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
  const geo = new THREE.PlaneGeometry(width, depth, segs, Math.max(4, (segs/4)|0));
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

function init(){
  const canvas = document.getElementById('gl');
  if (!canvas) return;
  const hero = document.getElementById('hero');
  let lite = innerWidth < 720 || coarse;

  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: !lite, alpha: false, powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, lite ? 1.2 : 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x0B1611, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x14261C, 0.028);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
  camera.position.set(0, 2.4, 9.2);

  // soft ambient + copper dawn key
  scene.add(new THREE.AmbientLight(0x6B7F70, 0.55));
  const key = new THREE.DirectionalLight(0xD4A574, 1.15);
  key.position.set(-6, 5, 4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x4A6B57, 0.35);
  fill.position.set(5, 2, -3);
  scene.add(fill);
  const rim = new THREE.PointLight(0xC4844A, 0.55, 40);
  rim.position.set(2, 3.5, 2);
  scene.add(rim);

  // sky dome gradient via large back plane shader
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uTop: { value: new THREE.Color(0x1A2F23) },
      uMid: { value: new THREE.Color(0x243D32) },
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
        float glow = pow(1.0 - abs(normalize(vPos).x - 0.15), 8.0) * smoothstep(0.1, 0.55, h);
        col += uGlow * glow * (0.22 + 0.04 * sin(uTime * 0.4));
        gl_FragColor = vec4(col, 1.0);
      }`
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(60, 32, 16), skyMat);
  scene.add(sky);

  const group = new THREE.Group();
  scene.add(group);

  // layered mountain ridges
  const ridges = [
    { y: -0.6, z: -14, w: 48, d: 18, segs: lite ? 48 : 80, h: 3.8, color: 0x0F1C16, opacity: 1 },
    { y: -0.35, z: -9, w: 36, d: 14, segs: lite ? 40 : 64, h: 2.6, color: 0x1A2F23, opacity: 1 },
    { y: -0.1, z: -5.2, w: 28, d: 10, segs: lite ? 32 : 56, h: 1.7, color: 0x2A4034, opacity: 1 }
  ];

  ridges.forEach((r, idx) => {
    const geo = ridgeGeometry(r.w, r.d, r.segs, (x, z) => {
      const nx = x / r.w;
      const nz = z / r.d;
      const base = Math.exp(-nx * nx * 2.2) * r.h;
      const wavy = Math.sin(nx * Math.PI * (2.4 + idx)) * 0.35 * r.h
        + Math.sin(nx * 9 + nz * 3) * 0.12 * r.h
        + Math.cos(nx * 5.5 - nz * 2) * 0.08 * r.h;
      const edge = Math.max(0, 1 - Math.abs(nx) * 1.15);
      return Math.max(0, (base * 0.55 + wavy) * edge);
    });
    const mat = new THREE.MeshStandardMaterial({
      color: r.color,
      roughness: 0.92,
      metalness: 0.02,
      flatShading: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, r.y, r.z);
    group.add(mesh);
  });

  // soft mist sheets (planes with alpha gradient)
  const mistGeo = new THREE.PlaneGeometry(40, 6);
  function mistMaterial(opacity){
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uColor: { value: new THREE.Color(0xC9B8A3) },
        uOpacity: { value: opacity },
        uTime: { value: 0 },
        uShift: { value: Math.random() * 10 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform vec3 uColor; uniform float uOpacity,uTime,uShift;
        varying vec2 vUv;
        void main(){
          float n = sin((vUv.x + uShift) * 6.0 + uTime * 0.15) * 0.5 + 0.5;
          float a = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
          a *= smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
          a *= (0.55 + 0.45 * n) * uOpacity;
          gl_FragColor = vec4(uColor, a);
        }`
    });
  }
  const mists = [];
  for (let i = 0; i < (lite ? 2 : 3); i++) {
    const m = new THREE.Mesh(mistGeo, mistMaterial(0.14 - i * 0.03));
    m.position.set((i - 1) * 2.5, 0.6 + i * 0.35, -3.5 - i * 1.8);
    m.rotation.x = -0.12;
    group.add(m);
    mists.push(m);
  }

  // distant pavilion / dwelling silhouette — simple, architectural, restrained
  const pavilion = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x1A1814, roughness: 0.85, metalness: 0.05 });
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(0.85, 0.45, 4),
    new THREE.MeshStandardMaterial({ color: 0xC4844A, roughness: 0.55, metalness: 0.15 })
  );
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 1.05;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), wood);
  body.position.y = 0.45;
  const postL = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6), wood);
  const postR = postL.clone();
  postL.position.set(-0.45, 0.45, 0.35);
  postR.position.set(0.45, 0.45, 0.35);
  pavilion.add(roof, body, postL, postR);
  pavilion.position.set(3.2, 0.55, -4.8);
  pavilion.scale.setScalar(0.85);
  group.add(pavilion);

  // very few soft floating pollen / dust — billboard sprites, NOT dense spheres
  const dustCount = lite ? 18 : 36;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i*3] = (Math.random() - 0.5) * 14;
    dustPos[i*3+1] = Math.random() * 3.5 + 0.4;
    dustPos[i*3+2] = -Math.random() * 12 - 1;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xD4A574,
    size: lite ? 0.045 : 0.055,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    sizeAttenuation: true
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  group.add(dust);

  root.classList.add('webgl-on');
  root.classList.remove('no-webgl');

  let w = 1, h = 1, visible = true;
  function resize(){
    const r = hero ? hero.getBoundingClientRect() : { width: innerWidth, height: innerHeight };
    w = Math.max(1, r.width); h = Math.max(1, r.height);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    lite = innerWidth < 720 || coarse;
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
    visible = r.bottom > 0 && r.top < innerHeight;
    canvas.style.opacity = String(0.15 + scrollFade * 0.85);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const clock = new THREE.Clock();
  let alive = true;
  function frame(){
    if (!alive) return;
    requestAnimationFrame(frame);
    if (!visible && document.hidden) return;
    const t = clock.getElapsedTime();
    skyMat.uniforms.uTime.value = t;
    mists.forEach((m, i) => {
      m.material.uniforms.uTime.value = t;
      m.position.x = Math.sin(t * 0.07 + i) * 0.6 + (i - 1) * 2.2;
    });
    // gentle breathing of group + mouse parallax
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    group.rotation.y = mouse.x * 0.06;
    group.position.y = Math.sin(t * 0.25) * 0.04;
    camera.position.x = mouse.x * 0.35;
    camera.position.y = 2.4 + mouse.y * -0.15 + Math.sin(t * 0.2) * 0.03;
    camera.lookAt(0, 1.1, -4);
    // dust drift
    const arr = dust.geometry.attributes.position.array;
    for (let i = 0; i < dustCount; i++) {
      arr[i*3+1] += Math.sin(t * 0.3 + i) * 0.0008;
      arr[i*3] += Math.cos(t * 0.15 + i * 0.7) * 0.0005;
    }
    dust.geometry.attributes.position.needsUpdate = true;
    pavilion.position.y = 0.55 + Math.sin(t * 0.35) * 0.02;
    renderer.render(scene, camera);
  }
  frame();

  addEventListener('beforeunload', () => { alive = false; });
}
