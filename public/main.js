import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ==========================================
// 1. Initial State & Configuration
// ==========================================

const canvasContainer = document.getElementById('canvas-container');
let scene, camera, renderer, modelGroup, gltfModel;
const clock = new THREE.Clock();

// Base positioning parameters for responsiveness
const basePosition = { x: 1.5, y: 0, z: 0 };

// ==========================================
// 2. Initialize Three.js Scene Setup
// ==========================================

function initThree() {
  // Create Scene
  scene = new THREE.Scene();

  // Create Perspective Camera
  // 45 degrees FOV, aspect ratio, near and far clipping planes
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 6.5); // Position camera straight back

  // Create WebGL Renderer with Alpha (transparency) and Antialiasing enabled
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio to 2 for performance
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; // ACES Filmic Tone Mapping for premium look
  renderer.toneMappingExposure = 1.0;

  // Append WebGL Canvas to container
  canvasContainer.appendChild(renderer.domElement);

  // Initialize lighting
  setupLighting();

  // Load the 3D model
  loadProductModel();
}

// ==========================================
// 3. Premium Studio Lighting Setup
// ==========================================

function setupLighting() {
  // Ambient light for general soft illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  // Main directional light (Key light) casting shadows from top-right-front
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
  keyLight.position.set(5, 5, 4);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.bias = -0.0001;
  scene.add(keyLight);

  // Fill light to soften shadows from bottom-left-back
  const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
  fillLight.position.set(-5, -3, -2);
  scene.add(fillLight);

  // Rim light from the top-back to create a bright halo edge on the glass material
  const rimLight = new THREE.DirectionalLight(0xffffff, 3.5);
  rimLight.position.set(0, 5, -5);
  scene.add(rimLight);
}

// ==========================================
// 4. Model Loading & Material Applications
// ==========================================

function loadProductModel() {
  const loader = new GLTFLoader();

  // Load GLTF from public folder static assets
  loader.load(
    '/assets/Opened Pill.gltf',
    (gltf) => {
      gltfModel = gltf.scene;
      
      // Create a group wrapper to act as an offset and animation pivot
      modelGroup = new THREE.Group();
      
      // Process meshes and configure materials
      gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Check if mesh name suggests glass/clear cap
          // MeshPhysicalMaterial simulates frosty, refractive, high-transmission glass
          const meshName = child.name.toLowerCase();
          if (
            meshName.includes('top') ||
            meshName.includes('glass') ||
            meshName.includes('clear') ||
            meshName.includes('cap')
          ) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 1.0,
              roughness: 0.15,
              metalness: 0.0,
              transmission: 1.0, // High transmission for glass look
              ior: 1.5,          // Index of refraction for glass (1.5)
              thickness: 0.5,    // Refraction thickness
              specularIntensity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1
            });
          } else {
            // For other parts (herbs, bottom cap), improve default standard material properties
            if (child.material) {
              child.material.roughness = 0.45;
              child.material.metalness = 0.1;
            }
          }
        }
      });

      // Normalize size: Fit model within a standard sphere bounding scale
      const box = new THREE.Box3().setFromObject(gltfModel);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetScale = 2.4 / maxDim; // Normalized dimension scale
      gltfModel.scale.set(targetScale, targetScale, targetScale);

      // Centering the model geometry inside the offset group
      const center = box.getCenter(new THREE.Vector3());
      gltfModel.position.sub(center.multiplyScalar(targetScale));

      // Add to group wrapper, then add to scene
      modelGroup.add(gltfModel);
      scene.add(modelGroup);

      // Apply initial dynamic position & layout based on device viewport
      updateModelPosition();

      // Bind GSAP scroll animations once model is loaded
      setupScrollAnimations();
    },
    // Progress Callback
    (xhr) => {
      console.log(`Model loading: ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
    },
    // Error Callback
    (error) => {
      console.error('An error occurred loading the GLTF pill model:', error);
    }
  );
}

// Position model group on screen based on desktop/tablet/mobile ranges
function updateModelPosition() {
  if (!modelGroup) return;

  if (window.innerWidth >= 1024) {
    // Desktop layout: Position model on the right side
    basePosition.x = 1.5;
    basePosition.y = 0;
  } else if (window.innerWidth >= 768) {
    // Tablet layout: Position model slightly shifted right, but closer
    basePosition.x = 0.8;
    basePosition.y = -0.2;
  } else {
    // Mobile layout (Canvas will be hidden via CSS media query, but update position anyway)
    basePosition.x = 0;
    basePosition.y = -0.4;
  }

  modelGroup.position.x = basePosition.x;
  modelGroup.position.y = basePosition.y;
}

// ==========================================
// 5. GSAP ScrollTrigger Animations
// ==========================================

function setupScrollAnimations() {
  if (!modelGroup) return;

  gsap.registerPlugin(ScrollTrigger);

  // Bind the model group rotation and tilt to the scroll progress
  gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2, // Scrub animation smoothly with a 1.2s delay lag
      invalidateOnRefresh: true
    }
  })
  .to(modelGroup.rotation, {
    y: Math.PI * 2,   // Rotate exactly 360 degrees (2*PI radians) on Y-axis
    x: 0.35,          // Tilt slightly forward on X-axis (0.35 radians)
    ease: 'none'
  });
}

// ==========================================
// 6. Lenis Smooth Scroll Setup
// ==========================================

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard Apple easeOutExpo
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
});

// Update Lenis links anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement);
    }
  });
});

// ==========================================
// 7. RequestAnimationFrame Loop
// ==========================================

function animate(time) {
  // Update Lenis scroll calculations
  lenis.raf(time);

  // Soft continuous float breathing effect on the Y-axis using Math.sin
  const elapsedTime = clock.getElapsedTime();
  if (modelGroup) {
    modelGroup.position.y = basePosition.y + Math.sin(elapsedTime * 1.5) * 0.12;
  }

  // Render Scene
  if (scene && camera) {
    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

// ==========================================
// 8. Event Listeners & Bootstrapping
// ==========================================

window.addEventListener('resize', () => {
  // Guard window resize logic for camera setup
  if (!camera || !renderer) return;

  // Update Camera Aspect Ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update Renderer Size & Pixel Ratio
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Recalculate layout offset position
  updateModelPosition();
});

// Start the entire experience
initThree();
requestAnimationFrame(animate);
