import * as Three from "three";

export class Sandbox {
  scene;
  camera;
  renderer;
  cube;

  constructor() {
    this.scene = new Three.Scene();

    this.camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new Three.WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);

    const geometry = new Three.BoxGeometry(2, 2, 2);
    const material = new Three.MeshBasicMaterial({ color: 0xaaafff });

    // const texture = new Three.TextureLoader().load('textures/crate.gif');
    // const material = new Three.MeshBasicMaterial({ map: texture });
    this.cube = new Three.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }
  show(){
    window.addEventListener("resize", onWindowResize, false);
    animate();
  }
}

const _this = this;

function animate() {
  requestAnimationFrame(_this.animate);

  _this.cube.rotation.x += 0.01;
  _this.cube.rotation.y += 0.01;

  _this.renderer.render(_this.scene, _this.camera);
}

function onWindowResize() {
  _this.camera.aspect = window.innerWidth / window.innerHeight;
  _this.camera.updateProjectionMatrix();
  _this.renderer.setSize(window.innerWidth, window.innerHeight);
}