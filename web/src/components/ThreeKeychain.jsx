import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, useCylinder, usePointToPointConstraint, useSphere } from '@react-three/cannon';
import { Html, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { Mail, Linkedin, Twitter, Github, FileText } from 'lucide-react';
import styles from './KeychainFooter.module.css';




const ThreeKeychain = () => {
    const links = [
        { label: 'Email', icon: Mail, href: 'mailto:raghuraaman98@gmail.com' },
        { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/raghuraaman-p-s/' },
        { label: 'Twitter', icon: Twitter, href: '#' },
        { label: 'GitHub', icon: Github, href: '#' },
        { label: 'Resume', icon: FileText, href: '#' },
    ];

    const spacing = 4; // World units
    const totalWidth = (links.length - 1) * spacing;

    return (
        <div className={styles.threeContainer}>
            <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
                <Physics gravity={[0, -20, 0]} allowSleep={false}>
                    {links.map((link, i) => (
                        <ChainGroup
                            key={i}
                            position={[(i * spacing) - (totalWidth / 2), 4, 0]}
                            {...link}
                        />
                    ))}
                </Physics>
            </Canvas>
        </div>
    );
};

const ChainGroup = ({ position, label, icon: Icon, href }) => {
    // Static Anchor
    const [ref0] = useSphere(() => ({ type: 'Static', args: [0.1], position }));

    // Links
    const [link1] = useBox(() => ({ mass: 0.1, args: [0.1, 0.6, 0.1], position: [position[0], position[1] - 0.5, 0] }));
    const [link2] = useBox(() => ({ mass: 0.1, args: [0.1, 0.6, 0.1], position: [position[0], position[1] - 1.2, 0] }));

    // Constraints
    usePointToPointConstraint(ref0, link1, { pivotA: [0, 0, 0], pivotB: [0, 0.35, 0] });
    usePointToPointConstraint(link1, link2, { pivotA: [0, -0.35, 0], pivotB: [0, 0.35, 0] });

    // Tag
    const tagRef = useRef(null);

    // We need to constrain link2 to tag. 
    // Since DraggableTag creates its own body, we need to pass the ref or create constraint inside?
    // Constraints need refs to bodies.
    // Let's make DraggableTag expose its ref.

    return (
        <>
            <mesh ref={ref0} visible={false} />
            <mesh ref={link1} castShadow><boxGeometry args={[0.1, 0.6, 0.1]} /><meshStandardMaterial color="#71717a" /></mesh>
            <mesh ref={link2} castShadow><boxGeometry args={[0.1, 0.6, 0.1]} /><meshStandardMaterial color="#71717a" /></mesh>

            <ConnectedTag
                linkBody={link2}
                position={[position[0], position[1] - 2.5, 0]}
                label={label}
                Icon={Icon}
                href={href}
            />
        </>
    );
};

const ConnectedTag = ({ linkBody, position, label, Icon, href }) => {
    const { camera } = useThree();
    const [tagRef, api] = useBox(() => ({ mass: 1, args: [2.5, 1.2, 0.1], position }));

    // Connect to chain
    usePointToPointConstraint(linkBody, tagRef, { pivotA: [0, -0.35, 0], pivotB: [0, 0.7, 0] });

    // Drag Logic
    const [hovered, setHover] = useState(false);
    useCursor(hovered, 'grab', 'grabbing');

    const [mouseRef, mouseApi] = useSphere(() => ({ type: 'Kinematic', args: [0.1], position: [0, 0, 0], collisionFilterGroup: 0 }));
    // Constraint
    const [, , constraintApi] = usePointToPointConstraint(mouseRef, tagRef, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] });

    useEffect(() => constraintApi.disable(), []);

    const onPointerDown = (e) => {
        e.stopPropagation();
        e.target.setPointerCapture(e.pointerId);
        constraintApi.enable();
    };

    const onPointerUp = (e) => {
        e.target.releasePointerCapture(e.pointerId);
        constraintApi.disable();
    };

    useFrame((state) => {
        const vec = new THREE.Vector3(state.mouse.x, state.mouse.y, 0.5);
        vec.unproject(camera);
        const dir = vec.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        mouseApi.position.set(pos.x, pos.y, 0);
    });

    // Handle click to open link (if not dragged much)
    const startPos = useRef({ x: 0, y: 0 });
    const onPointerDownLink = (e) => {
        startPos.current = { x: e.clientX, y: e.clientY };
        onPointerDown(e);
    };

    const onPointerUpLink = (e) => {
        onPointerUp(e);
        const dist = Math.hypot(e.clientX - startPos.current.x, e.clientY - startPos.current.y);
        if (dist < 5) {
            window.open(href, '_blank');
        }
    };

    return (
        <>
            <mesh ref={mouseRef} visible={false} />
            <mesh
                ref={tagRef}
                castShadow
                receiveShadow
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onPointerDown={onPointerDownLink}
                onPointerUp={onPointerUpLink}
            >
                <boxGeometry args={[2.5, 1.2, 0.1]} />
                <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.2} />
                <Html
                    transform
                    occlude
                    position={[0, 0, 0.06]}
                    style={{
                        width: '120px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    }}
                >
                    <div className={styles.threeTagContent}>
                        <Icon size={20} color="#18181b" />
                        <span style={{ color: '#18181b', fontWeight: 600, marginLeft: 8, fontSize: '14px' }}>{label}</span>
                    </div>
                </Html>
            </mesh>
        </>
    );
};

export default ThreeKeychain;
