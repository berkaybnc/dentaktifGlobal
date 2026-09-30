/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - HERO 3D INTERACTIVE CANVAS (THREE.JS)
   Abstract Luxury Dental Geometry & Parallax Particle System
   ========================================================================== */

export function initHero3D() {
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    console.warn('Three.js or hero-3d-canvas not found, skipping 3D initialization.');
    return;
  }

  // 1. Scene Setup
  const scene = new THREE.Scene();
  
  // 2. Camera Setup
  const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
  );
  camera.position.z = 12;

  // 3. Renderer Setup
  const renderer = new THREE.WebGLRenderer({ 
    canvas, 
    alpha: true, 
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 4. Create Pristine 3D Molar Tooth Geometry
  const toothGeo = new THREE.CylinderGeometry(1.4, 0.4, 3.4, 64, 64);
  const pos = toothGeo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    if (y > 0.3) {
      const bump1 = Math.exp(-((x - 0.65) ** 2 + (z - 0.65) ** 2) * 2.8) * 0.5;
      const bump2 = Math.exp(-((x + 0.65) ** 2 + (z - 0.65) ** 2) * 2.8) * 0.5;
      const bump3 = Math.exp(-((x - 0.65) ** 2 + (z + 0.65) ** 2) * 2.8) * 0.5;
      const bump4 = Math.exp(-((x + 0.65) ** 2 + (z + 0.65) ** 2) * 2.8) * 0.5;
      y += bump1 + bump2 + bump3 + bump4;

      const centerDist = Math.sqrt(x * x + z * z);
      if (centerDist < 0.5) {
        y -= (0.5 - centerDist) * 0.35;
      }
    }

    if (y < -0.2) {
      const rootSeparation = Math.sin((-y - 0.2) * 1.5) * 0.6;
      if (x >= 0) {
        x += rootSeparation;
      } else {
        x -= rootSeparation;
      }
    }

    pos.setXYZ(i, x, y, z);
  }
  toothGeo.computeVertexNormals();

  const toothMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.1,
    transmission: 0.15,
    thickness: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 0.95,
    metalness: 0.05,
    ior: 1.5,
  });

  const mainMesh = new THREE.Mesh(toothGeo, toothMaterial);
  scene.add(mainMesh);

  // 4b. Gold Smile Halo Ring
  const haloGeo = new THREE.TorusGeometry(3.0, 0.08, 16, 100);
  const haloMat = new THREE.MeshStandardMaterial({
    color: 0xd97706,
    metalness: 0.9,
    roughness: 0.2,
  });
  const haloMesh = new THREE.Mesh(haloGeo, haloMat);
  haloMesh.rotation.x = Math.PI / 3;
  scene.add(haloMesh);

  // 5. Surrounding Gold Crystal Particles
  const particlesCount = 80;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  const goldColor = new THREE.Color(0xd97706);
  const cyanColor = new THREE.Color(0x38bdf8);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 18;
    positions[i + 1] = (Math.random() - 0.5) * 18;
    positions[i + 2] = (Math.random() - 0.5) * 18;

    const mixedColor = Math.random() > 0.5 ? goldColor : cyanColor;
    colors[i] = mixedColor.r;
    colors[i + 1] = mixedColor.g;
    colors[i + 2] = mixedColor.b;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // 6. Lighting (Medical Luxury Ambiance)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
  keyLight.position.set(5, 5, 8);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xd97706, 1.8);
  fillLight.position.set(-5, -5, 5);
  scene.add(fillLight);

  // 7. Mouse Parallax Interactions (Restricted Hover Bounds)
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (event) => {
    const rawX = (event.clientX - window.innerWidth / 2) * 0.00025;
    const rawY = (event.clientY - window.innerHeight / 2) * 0.00025;
    mouseX = Math.max(-0.15, Math.min(0.15, rawX));
    mouseY = Math.max(-0.15, Math.min(0.15, rawY));
  });

  // 8. Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // 9. Render Loop
  function animate() {
    requestAnimationFrame(animate);

    // Smooth Lerp Parallax
    targetX += (mouseX - targetX) * 0.025;
    targetY += (mouseY - targetY) * 0.025;

    mainMesh.rotation.x += 0.001;
    mainMesh.rotation.y += 0.0015;
    mainMesh.rotation.x += targetY * 0.2;
    mainMesh.rotation.y += targetX * 0.2;

    haloMesh.rotation.z += 0.002;
    haloMesh.rotation.y += 0.001;

    particlesMesh.rotation.y -= 0.0003;

    renderer.render(scene, camera);
  }

  animate();
}
