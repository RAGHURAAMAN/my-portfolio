import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Mail, Linkedin, Twitter, Github, FileText } from 'lucide-react';
import styles from './KeychainFooter.module.css';

const PhysicsKeychain = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const [items, setItems] = useState([]);

    // Configuration
    const LINKS_PER_CHAIN = 5;
    const LINK_HEIGHT = 15;
    const LINK_WIDTH = 6;
    const TAG_WIDTH = 120;
    const TAG_HEIGHT = 60;
    const SPACING = 160;

    const linksData = [
        { label: 'Email', icon: Mail, href: 'mailto:raghuraaman98@gmail.com' },
        { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/raghuraaman-p-s/' },
        { label: 'Twitter', icon: Twitter, href: '#' },
        { label: 'GitHub', icon: Github, href: '#' },
        { label: 'Resume', icon: FileText, href: '#' },
    ];

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Constraint = Matter.Constraint,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;

        // Get container dimensions
        const width = sceneRef.current.clientWidth;
        const height = 400;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: width,
                height: height,
                background: 'transparent',
                wireframes: false, // Keep false for production look, set true if needed
                showAngleIndicator: false,
                pixelRatio: window.devicePixelRatio // Sharp rendering
            }
        });

        // Create bodies
        const world = engine.world;
        const newItems = [];

        const totalWidth = (linksData.length - 1) * SPACING;
        const startX = (width - totalWidth) / 2;
        const startY = 50; // Anchor Y position

        linksData.forEach((link, index) => {
            const x = startX + index * SPACING;

            // 1. Anchor (Static)
            const anchor = Bodies.circle(x, startY, 5, {
                isStatic: true,
                render: { visible: false }
            });

            // 2. Chain Links
            let prevBody = anchor;
            const chainLinks = [];

            for (let i = 0; i < LINKS_PER_CHAIN; i++) {
                const linkBody = Bodies.rectangle(x, startY + (i + 1) * LINK_HEIGHT, LINK_WIDTH, LINK_HEIGHT, {
                    collisionFilter: { group: -1 }, // Don't collide with each other
                    frictionAir: 0.05,
                    render: {
                        fillStyle: '#52525b', // Zinc-600
                        strokeStyle: '#3f3f46',
                        lineWidth: 1
                    }
                });

                const constraint = Constraint.create({
                    bodyA: prevBody,
                    bodyB: linkBody,
                    pointA: i === 0 ? { x: 0, y: 0 } : { x: 0, y: LINK_HEIGHT / 2 },
                    pointB: { x: 0, y: -LINK_HEIGHT / 2 },
                    length: 2,
                    stiffness: 0.9,
                    render: { visible: true, strokeStyle: '#52525b' }
                });

                Composite.add(world, [linkBody, constraint]);
                chainLinks.push(linkBody);
                prevBody = linkBody;
            }

            // 3. Tag (The Card)
            const tagBody = Bodies.rectangle(x, startY + (LINKS_PER_CHAIN + 1) * LINK_HEIGHT + TAG_HEIGHT / 2, TAG_WIDTH, TAG_HEIGHT, {
                chamfer: { radius: 10 },
                frictionAir: 0.02,
                density: 0.002, // Slightly heavier
                render: { visible: false } // We render React component on top
            });

            const tagConstraint = Constraint.create({
                bodyA: prevBody,
                bodyB: tagBody,
                pointA: { x: 0, y: LINK_HEIGHT / 2 },
                pointB: { x: 0, y: -TAG_HEIGHT / 2 },
                length: 5,
                stiffness: 0.9,
                render: { visible: true, strokeStyle: '#52525b' }
            });

            Composite.add(world, [anchor, tagBody, tagConstraint]);

            newItems.push({
                ...link,
                body: tagBody,
                chain: chainLinks
            });
        });

        setItems(newItems);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Run the engine
        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Handle resize
        const handleResize = () => {
            render.canvas.width = sceneRef.current.clientWidth;
            render.canvas.height = 400;

            // Re-center items? 
            // Ideally we should re-calculate positions, but that requires re-creating bodies.
            // For now, let's just reload the page or accept it might be off until reload.
            // Or better: just update canvas size so it doesn't look broken.
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            Composite.clear(world);
            Engine.clear(engine);
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, []);

    // Sync DOM elements with physics bodies
    const itemRefs = useRef([]);

    useEffect(() => {
        const updateLoop = () => {
            if (!engineRef.current) return;

            items.forEach((item, index) => {
                const domNode = itemRefs.current[index];
                if (domNode && item.body) {
                    const { x, y } = item.body.position;
                    const angle = item.body.angle;
                    domNode.style.transform = `translate(${x - TAG_WIDTH / 2}px, ${y - TAG_HEIGHT / 2}px) rotate(${angle}rad)`;
                }
            });

            requestAnimationFrame(updateLoop);
        };

        const animationId = requestAnimationFrame(updateLoop);
        return () => cancelAnimationFrame(animationId);
    }, [items]);

    return (
        <div className={styles.physicsContainer}>
            <div ref={sceneRef} className={styles.canvasWrapper} />

            {/* DOM Elements synced to physics bodies */}
            <div className={styles.domLayer}>
                {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={el => itemRefs.current[index] = el}
                            className={styles.physicsTag}
                            style={{
                                width: TAG_WIDTH,
                                height: TAG_HEIGHT,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                willChange: 'transform'
                            }}
                        >
                            <div className={styles.tagContent}>
                                <Icon size={20} className={styles.icon} />
                                <span className={styles.label}>{item.label}</span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default PhysicsKeychain;
