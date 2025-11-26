import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutBento.module.css';
import { Database, PenTool, Layout, Box } from 'lucide-react';

const AboutBento = () => {
    return (
        <div className={styles.bentoContainer}>
            {/* Card 1: Systems (Large) */}
            <motion.div
                className={`${styles.card} ${styles.cardLarge} ${styles.gradientBlue}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                        <Layout size={32} color="#fff" />
                    </div>
                    <h3>I think in systems</h3>
                    <p>Mapping flows, dependencies, and edge cases. Structure before visuals.</p>
                </div>
                {/* Decorative Grid Background */}
                <div className={styles.gridPattern} />
            </motion.div>

            {/* Card 2: Data (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall} ${styles.bgWhite}`}
                whileHover={{ y: -5 }}
            >
                <motion.div
                    className={styles.floatingShape}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <div className={styles.sphere} />
                </motion.div>
                <div className={styles.cardContent}>
                    <h3>Data & Intuition</h3>
                    <p>Using metrics to calm the gut feeling.</p>
                </div>
            </motion.div>

            {/* Card 3: Writing (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall} ${styles.bgGlass}`}
                whileHover={{ rotate: 1 }}
            >
                <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                        <PenTool size={24} />
                    </div>
                    <h3>Writing to think</h3>
                    <p>Clarifying thoughts through words.</p>
                </div>
            </motion.div>

            {/* Card 4: Playful Shapes (Wide) */}
            <motion.div
                className={`${styles.card} ${styles.cardWide} ${styles.bgGray}`}
            >
                <div className={styles.shapesContainer}>
                    <motion.div
                        className={styles.cube}
                        animate={{ rotateX: 360, rotateY: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    />
                    <motion.div
                        className={styles.pyramid}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                </div>
                <div className={styles.cardContent}>
                    <h3>Playful Exploration</h3>
                    <p>Always experimenting with new tools and dimensions.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutBento;
