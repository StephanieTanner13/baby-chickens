import { Center, useTexture, useGLTF, OrbitControls, MeshWobbleMaterial, MeshDistortMaterial, useCursor, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Texture } from 'three'
import { RigidBody, Physics, Debug } from '@react-three/rapier'


export default function Experience() {
    const { nodes } = useGLTF('./model/littlechickens.glb')

    const bakedTexture = useTexture('./model/baked4.png')
    bakedTexture.flipY = false

    const leaf = useRef()
    console.log(leaf.current)
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame(() => {
        //console.log(leaf.current)
        leaf.current.factor = THREE.MathUtils.lerp(leaf.current.factor, hovered ? 0.5 : 0, hovered ? 0.2 : 0.01)
    })


    return <>
        <PresentationControls snap global zoom={0.8}  azimuth={[-Math.PI / 8, Math.PI / 8]} polar={[0, Math.PI / 8]}>
        <Center>
            {/* floor */}
            <mesh
                geometry={nodes.Trace001.geometry}
                material={nodes.Trace001.material}
                rotation={[Math.PI / 2, -0.01, 0]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* Largest leaf in the back */}
            <mesh
                onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
                geometry={nodes.Trace002.geometry}
                material={nodes.Trace002.material}
                position={[-0.92, 0.09, -0.7]}>
                <MeshWobbleMaterial ref={leaf} speed={4} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            {/* Middle Chick */}
            <mesh
                geometry={nodes.Trace003.geometry}
                material={nodes.Trace003.material}
                position={[-0.45, 0.23, 0.5]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            {/* Right Chick */}
            <mesh
                geometry={nodes.Trace004.geometry}
                material={nodes.Trace004.material}
                position={[0.33, 0.05, 0]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            {/* Right Grass */}
            <mesh
                geometry={nodes.Trace005.geometry}
                material={nodes.Trace005.material}
                position={[0.77, 0, 0.14]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            {/* Left Chick */}
            <mesh
                geometry={nodes.Trace006.geometry}
                material={nodes.Trace006.material}
                position={[-1.22, 0.04, 0.94]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            <mesh
                geometry={nodes.Trace007.geometry}
                material={nodes.Trace007.material}
                position={[0.89, 0.08, 0.06]}>
                <MeshWobbleMaterial factor={0.06} speed={5} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace008.geometry}
                material={nodes.Trace008.material}
                position={[-1.13, 0.11, -0.38]}>
                <MeshWobbleMaterial factor={0.1} speed={5} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace009.geometry}
                material={nodes.Trace009.material}
                position={[-0.76, 0.08, -0.45]}>
                <MeshWobbleMaterial factor={0.15} speed={2} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace010.geometry}
                material={nodes.Trace010.material}
                position={[-1.04, 0.07, -0.15]}
                rotation={[0, 0, -0.12]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace011.geometry}
                material={nodes.Trace011.material}
                position={[0.87, 0.62, 0]}>
                <MeshWobbleMaterial factor={0.06} speed={4} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace012.geometry}
                material={nodes.Trace012.material}
                position={[0.89, 0.32, -0.48]}
                rotation={[0, 0, 0.22]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace013.geometry}
                material={nodes.Trace013.material}
                position={[0.04, 0.28, -0.87]}
                rotation={[0, 0, 0.4]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace014.geometry}
                material={nodes.Trace014.material}
                position={[0.83, 0.15, 0.11]}
                rotation={[0, 0, 0.43]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace017.geometry}
                material={nodes.Trace017.material}
                position={[-1.49, 0.03, 0.5]}>
                <MeshWobbleMaterial factor={0.03} speed={6} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace018.geometry}
                material={nodes.Trace018.material}
                position={[-1.41, -0.02, 0.64]}
                rotation={[0, 0, 0.08]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace019.geometry}
                material={nodes.Trace019.material}
                position={[0.07, 0, -0.63]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace020.geometry}
                material={nodes.Trace020.material}
                position={[-0.66, -0.02, -0.1]}>
                <MeshWobbleMaterial factor={0.1} speed={3} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace021.geometry}
                material={nodes.Trace021.material}
                position={[-0.95, 0, -0.1]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh
                geometry={nodes.Trace023.geometry}
                material={nodes.Trace023.material}
                position={[-1.42, 0.01, 0.58]}>
                <MeshWobbleMaterial factor={0.07} speed={3} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace024.geometry}
                material={nodes.Trace024.material}
                position={[0.13, -0.03, -0.52]}>
                <MeshWobbleMaterial factor={0.13} speed={3} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
            <mesh
                geometry={nodes.Trace015.geometry}
                material={nodes.Trace015.material}
                position={[-1.78, -0.02, -0.1]}>
                <MeshWobbleMaterial factor={0.13} speed={3} map={bakedTexture}>
                </MeshWobbleMaterial>
            </mesh>
        </Center>
        </PresentationControls>
    </>
}