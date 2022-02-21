import * as Three from 'three';

let scene, camera, renderer, cube;

function init() {
    scene = new Three.Scene();

    camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    renderer = new Three.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new Three.BoxGeometry(2, 2, 2);
    const material = new Three.MeshBasicMaterial({ color: 0xaaafff });

    // const texture = new Three.TextureLoader().load('textures/crate.gif');
    // const material = new Three.MeshBasicMaterial({ map: texture });
    cube = new Three.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();