import React, { useRef, useState } from 'react';
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber';
import { OrbitControls, Html  } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import * as THREE from 'three';

class ScreenComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 530px;
                    height: 420px;
                    background-color: #000000;
                    color: #fff;
                }
            </style>
            <div class="content">
                <h1>Web Component Screen</h1>
                <p>This is a simple screen created with a web component.</p>
                <slot></slot>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['bg-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'bg-color') {
            this.style.setProperty('--bg-color', newValue);
        }
    }
}

customElements.define('screen-component', ScreenComponent);

const Model = ({ onClick }) => {
    const gltf = useLoader(GLTFLoader, '/Recyclemachine.glb');
    const meshRef = useRef();

    return (
        <primitive ref={meshRef} object={gltf.scene} onClick={onClick} />
    );
};


const Scene = ({ onModelClick, targetPosition }) => {
    const { camera } = useThree();

    useFrame(() => {
        if (targetPosition) {
            camera.position.lerp(targetPosition, 0.1);
            camera.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight
                position={[0, 0, -1]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <spotLight
                position={[0, 0, -1]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <pointLight position={[0, 0, -1]} intensity={0.5} />
            <pointLight position={[1, 0, 0]} intensity={3} />
            <pointLight position={[0, 1, 0]} intensity={1.5} />

            <Html position={[0.4, 0.2, 1]}>
                <screen-component>
                    <p>Here you can place more content inside the web component.</p>
                </screen-component>
            </Html>

            <Model onClick={onModelClick} />
        </>
    );
};

const App = () => {
    const [targetPosition, setTargetPosition] = useState(null);
    const [clickCount, setClickCont] = useState(0);

    const handleModelClick = () => {
        if(clickCount === 0){
            setTargetPosition(new THREE.Vector3(0, 0, -1));
        }
        if(clickCount ===1){
            setTargetPosition(new THREE.Vector3(0, 0, -0.2));
        }


        setClickCont(clickCount+1);
    };

    return (
        <Canvas
            style={{ height: "100vh", width: "100vw" }}
            //camera={{ position: [1, 1, -2], fov: 30 }}
            camera={{position: [0,0,-0.2], fov: 30}}
        >
            <Scene onModelClick={handleModelClick} targetPosition={targetPosition} />
        </Canvas>
    );
};

export default App;
