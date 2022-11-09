import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

// ANIMATIONS
const tick = () => {
  //   // It's called just once
  //   console.log('Tick ');

  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  //   Update Objects
  // mesh.rotation.x = elapsedTime * Math.PI;
  // mesh.rotation.z = elapsedTime * Math.PI;
  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // Renderer
  renderer.render(scene, camera);

  // Runs with every frame (usually 60fps)
  window.requestAnimationFrame(tick);
};

tick();
