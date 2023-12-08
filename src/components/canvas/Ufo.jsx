import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Ufo = () => {
  const ufo = useGLTF('./ufo/scene.gltf')

  return (
    <primitive 
    object={ufo.scene}
    scale={2}
    position-y={0}
    rotation-y={0}/>
  )
}

const UfoCanvas = () => {
return (
  <Canvas
  shadows
  frameloop="demand"
  gl={{ preserveDrawingBuffer: true }}
  camera={{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  }}
  >
        <spotLight
        position={[-50, 50, 10]}
        angle={0.17}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
  <Suspense fallback={<CanvasLoader/>}>
    <OrbitControls 
    autoRotate
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}/>
    <Ufo />
  </Suspense>
  </Canvas>
)}

export default UfoCanvas;