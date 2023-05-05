import { useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
// import { DRACOLoader } from "three/examples/jsm/loaders/dracoloader";

const Car = () => {
  // const gltf = useLoader(GLTFLoader, "models/car/scene.gltf");
  const loader = new GLTFLoader();
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath('/examples/js,/libs/draco/');
  // loader.setDRACOLoader( dracoLoader );

  // Load a glTF resource
  // loader.load(
  //   // resource URL
  //   "models/car/scene.gltf",
  //   // called when the resource is loaded
  //   function (gltf) {
  //     scene.add(gltf.scene);

  //     gltf.animations; // Array<THREE.AnimationClip>
  //     gltf.scene; // THREE.Group
  //     gltf.scenes; // Array<THREE.Group>
  //     gltf.cameras; // Array<THREE.Camera>
  //     gltf.asset; // Object
  //   },
  //   // called while loading is progressing
  //   function (xhr) {
  //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //   },
  //   // called when loading has errors
  //   function (error) {
  //     console.log("An error happened");
  //   }
  // );

  const gltf = useLoader(GLTFLoader, "models/car/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.95, 0.95, 0.95);
    gltf.scene.position.set(0, 0.03, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    let group = gltf.scene.children[0].children[0].children[0];
    group.children[4].rotation.x = t * 2;
    group.children[6].rotation.x = t * 2;
    group.children[5].rotation.x = t * 2;
    group.children[26].rotation.x = t * 2;
  });

  return <primitive object={gltf.scene} />;
};

export default Car;
