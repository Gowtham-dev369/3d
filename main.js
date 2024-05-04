import "./style.css"

import * as THREE from "three"

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x6a58e2);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {
		requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
renderer.render( scene, camera );



}

let directionoflight = new THREE.DirectionalLight(0Xffffff,100);
directionoflight.position.set(0,1,0);
directionoflight.castShadow=true
scene.add(directionoflight)

let light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light)


let light1 = new THREE.PointLight(0xc4c4c4,10);
light1.position.set(500,100,0);
scene.add(light1)

let light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(0,100,-500);
scene.add(light2)

let light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(-500,300,0);
scene.add(light3)



loader.load( '/bike.gltf', function ( gltf ) {
  let grinder = gltf.scene.children[0];
  grinder.scale.set(10,10,10)
  // grinder.position.set(310,-40,-100);
  grinder.rotation.set(0,190,0)

	scene.add( gltf.scene );
  animate();
}, undefined, function ( error ) {

	console.error( error );

} );