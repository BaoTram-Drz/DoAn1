import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';


const CircleContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 010%;
  width: 100%;
  height: 100%;
  canvas {
    width: 100%;
    height: 100%;
  }
`;


function Circle() {
    const circleRef = useRef();
  
    useFrame(() => {
      circleRef.current.rotation.z += 0.01;
    });
  
    const geometry = new THREE.CircleGeometry(1, 32);
    const material = new THREE.MeshBasicMaterial({ color: '#00ff00' });
  
    return (
      <mesh ref={circleRef} geometry={geometry} material={material} />
    );
  }
function Cube() {
    return (
        <CircleContainer>
          <Canvas>
            <Circle />
          </Canvas>
        </CircleContainer>
      );
  }
  
  export default Cube;
  