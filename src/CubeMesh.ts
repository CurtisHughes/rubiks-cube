import * as THREE from 'three';

export default class CubeMesh extends THREE.Mesh {
  constructor(
      {position = new THREE.Vector3(0, 0, 0)}: { position: THREE.Vector3 },
  ) {
    super(new THREE.BoxGeometry(1, 1, 1), [
      new THREE.MeshBasicMaterial({color: 0xffffff}), // White
      new THREE.MeshBasicMaterial({color: 0xFFD500}), // Yellow
      new THREE.MeshBasicMaterial({color: 0x0051BA}), // Blue
      new THREE.MeshBasicMaterial({color: 0x009E60}), // Green
      new THREE.MeshBasicMaterial({color: 0xFF5800}), // Orange
      new THREE.MeshBasicMaterial({color: 0xC41E3A}), // Red
    ]);
    this.position.x = position.x;
    this.position.y = position.y;
    this.position.z = position.z;

    this.attach(new THREE.BoxHelper(this, 0x0000));
  }
}
