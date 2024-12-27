import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Particles = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(1000 * 3), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
        >
          <PointMaterial
            transparent
            color="#f272c8"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const ParticlesCanvas = () => {
  return (
    <>
      <div className=" w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Particles />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
    </>
  );
};
export default ParticlesCanvas;
