import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutBento.module.css';

const AboutBento = () => {
    return (
        <div className={styles.bentoContainer}>
            {/* Card 1: Systems (Large) */}
            <motion.div
                className={`${styles.card} ${styles.cardLarge} ${styles.bgBlue}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.cardContent}>
                    <div>
                        <h3>I think in systems</h3>
                        <p>Mapping flows, dependencies, and edge cases. Structure before visuals.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Data (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall} ${styles.bgPurple}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.cardContent}>
                    <div>
                        <h3>Data & Intuition</h3>
                        <p>Using metrics to calm the gut feeling.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 3: Writing (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall} ${styles.bgGreen}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.cardContent}>
                    <div>
                        <h3>Writing to think</h3>
                        <p>Clarifying thoughts through words.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 4: Playful Exploration (Wide) */}
            <motion.div
                className={`${styles.card} ${styles.cardWide} ${styles.bgCream}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.cardContent}>
                    <div>
                        <h3>Playful Exploration</h3>
                        <p>Always experimenting with new tools and dimensions.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutBento;
