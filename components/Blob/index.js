import { useMemo, useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";

const Blob = () => {
    const meshRef = useRef();
    const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
        meshRef.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

        meshRef.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        meshRef.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });
  return (
    <mesh ref={meshRef} scale={1.5} position={[0,0,0]} onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)} >
        <icosahedronGeometry args={[1,20]} />
        <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms}/>
    </mesh>
  )
}

export default Blob;