import * as THREE from 'three';
import red from './textures/red.jpg';
import blue from './textures/blue.jpg';
import yellow from './textures/yellow.jpg';
import orange from './textures/orange.jpg';
import white from './textures/white.jpg';
import green from './textures/green.jpg';

export default class CubeMesh extends THREE.Mesh {
  constructor({ position = new THREE.Vector3(0, 0, 0) }: { position: THREE.Vector3 }) {
    super(new THREE.BoxGeometry(1, 1, 1), [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(red) }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(blue) }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(yellow) }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(orange) }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(white) }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(green) }),
    ]);
    this.position.x = position.x;
    this.position.y = position.y;
    this.position.z = position.z;
  }
}
