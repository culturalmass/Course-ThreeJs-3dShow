import { Text3D } from "@react-three/drei";

export const Words = () => {
  return (
    <>
      <Text3D
        font={"/public/fonts/darltalesregular.json"}
        size={0.3}
        height={0.065}
        curveSegments={24}
        position={[-0.5, 1.95, 1.75]}
        rotation={[0, 0.75, 0]}
      >
        3D Show
        <meshStandardMaterial
          color={[0.25, 0.12, 0.41]}
          emissive={[0.9, 0, 0]}
        />
      </Text3D>
      <Text3D
        font={"/public/fonts/darltalesregular.json"}
        size={0.2}
        height={0.065}
        curveSegments={24}
        position={[-0.9, 1.65, 1.75]}
        rotation={[0, 0.75, 0]}
      >
        Nissan GTR R35 Nismo
        <meshStandardMaterial
          color={[0.12, 0.44, 0.12]}
          emissive={[0.75, 0, 0]}
        />
      </Text3D>
    </>
  );
};

export default Words;
