import * as THREE from 'three';
import { blue, green, orange, red, white, yellow } from './textures';

export const material = [
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(blue) }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(green) }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(orange) }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(red) }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(white) }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(yellow) }),
];
