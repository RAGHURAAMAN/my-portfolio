import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Capabilities.module.css';

const Capabilities = () => {
    const containerRef = useRef(null);

    const cards = [
        {
            id: "product",
            title: "Product Designer",
            desc: "Building digital products with elegant and intuitive designs.",
            color: "#F3F4F6", // Light Gray (Harmony)
            textColor: "#1F2937",
            className: styles.cardLarge, // Spans 2 cols
            delay: 0
        },
        {
            id: "ux",
            title: "UX Researcher",
            desc: "Actionable insights for user satisfaction.",
            color: "#E5E7EB", // Slightly darker gray
            textColor: "#1F2937",
            className: styles.cardSmall,
            delay: 0.1
        },
        {
            id: "service",
            title: "Service Designer",
            desc: "Optimizing user journeys with clear thinking.",
            color: "#D1D5DB", // Even darker gray
            textColor: "#1F2937",
            className: styles.cardSmall,
            delay: 0.2
        },
        {
            id: "eng",
            title: "Software Engineer",
            desc: "Cooking designs into code for fun.",
            color: "#9CA3AF", // Darkest gray accent
            textColor: "#FFFFFF", // White text for contrast
            className: styles.cardWide, // Spans full width
            delay: 0.3
        }
    ];

    return (
        <div className={styles.container} ref={containerRef}>
            <motion.h3
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                What you’ll get
            </motion.h3>

            <div className={styles.bentoGrid}>
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
