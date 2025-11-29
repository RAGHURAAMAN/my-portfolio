import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import styles from './Capabilities.module.css';

const Capabilities = () => {
    const containerRef = useRef(null);
    const [hasBeenDragged, setHasBeenDragged] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    const cards = [
        {
            id: "product",
            title: "Product Designer",
            desc: "Systems-first design for enterprise tools. I map flows, dependencies, and edge cases before touching visuals.",
            color: "#E8F4F8", // Light blue
            textColor: "#1F2937",
            className: styles.cardLarge,
            delay: 0
        },
        {
            id: "ux",
            title: "UX Researcher",
            desc: "Research that drives decisions. I turn user interviews and data into clear, prioritized insights.",
            color: "#F0E8F8", // Light purple
            textColor: "#1F2937",
            className: styles.cardSmall,
            delay: 0.1
        },
        {
            id: "service",
            title: "Service Designer",
            desc: "End-to-end journey mapping. I design across touchpoints to make processes smoother for teams and users.",
            color: "#E8F8F0", // Light green
            textColor: "#1F2937",
            className: styles.cardSmall,
            delay: 0.2
        },
        {
            id: "eng",
            title: "Software Engineer",
            desc: "Design-to-code handoff with precision. I prototype in React to validate ideas fast and communicate with engineers.",
            color: "#F8F0E8", // Light cream/beige
            textColor: "#1F2937",
            className: styles.cardWide,
            delay: 0.3
        }
    ];

    const handleReset = () => {
        setResetKey(prev => prev + 1);
        setHasBeenDragged(false);
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.headerContainer}>
                <motion.h3
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What you'll get
                </motion.h3>

                <AnimatePresence>
                    {hasBeenDragged && (
                        <motion.button
                            className={styles.resetButton}
                            onClick={handleReset}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="Reset Layout"
                        >
                            <RotateCcw size={20} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <div className={styles.bentoGrid} key={resetKey}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`${styles.card} ${card.className}`}
                        style={{ backgroundColor: card.color, color: card.textColor }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: card.delay, duration: 0.4 }}
                        viewport={{ once: true }}
                        drag
                        dragConstraints={containerRef}
                        dragElastic={0.1}
                        onDragStart={() => setHasBeenDragged(true)}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        whileDrag={{ scale: 1.05, zIndex: 20, cursor: 'grabbing' }}
                    >
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <p className={styles.cardDesc}>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Capabilities;
