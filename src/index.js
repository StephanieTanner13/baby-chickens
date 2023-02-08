import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { Text} from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <div className='canvas1'>
    <Canvas
            flat
            camera={{
                fov: 45,
                near: 0.1,
                far: 50,
                position: [-1, 0, 6]
            }}
        >
            <color args={['#FCF4ED']} attach="background" />

            <ambientLight />
            <Experience />
        </Canvas>
    </div>
    <img className='title' src="/baby-chick.gif"></img>
    </>
)