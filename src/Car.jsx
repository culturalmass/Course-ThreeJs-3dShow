import { useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Car = () => {
  // const gltf = useLoader(GLTFLoader, "models/car/scene.gltf");
  const gltf = useLoader(GLTFLoader, "../public/models/car/scene.gltf");

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
