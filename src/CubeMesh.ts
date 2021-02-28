import * as THREE from 'three';

type CubeMeshProps = {
  position: THREE.Vector3;
  material: THREE.MeshBasicMaterial[];
};

export default class CubeMesh extends THREE.Mesh {
  constructor({ position, material }: CubeMeshProps) {
    super(new THREE.BoxGeometry(1, 1, 1), material);
    this.position.x = position.x;
    this.position.y = position.y;
    this.position.z = position.z;
  }
}
