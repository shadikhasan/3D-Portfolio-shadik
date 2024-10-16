import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, error } = useGLTF("./desktop_pc/scene.gltf");

  if (error) {
    console.error("Error loading GLTF model:", error);
    return <CanvasLoader />;
  }

  if (!scene) {
    return <CanvasLoader />;
  }

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.geometry && child.geometry.attributes.position) {
        const positionArray = child.geometry.attributes.position.array;
        for (let i = 0; i < positionArray.length; i++) {
          if (isNaN(positionArray[i])) {
            console.error(`NaN value found in geometry at index ${i} in object: ${child.name || 'Unnamed Mesh'}`);
          }
        }
  
        // After ensuring no NaN values, recompute the bounding sphere
        child.geometry.computeBoundingSphere();
  
        if (isNaN(child.geometry.boundingSphere.radius)) {
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute likely has NaN values.',
            child.geometry
          );
        }
      }
    });
  }, [scene]);
  
  

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.5, -2.2] : [0, -3.5, -1.5]} // Adjust Y position here
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 2, 5], fov: 25 }} // Adjust Y position here if needed
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
