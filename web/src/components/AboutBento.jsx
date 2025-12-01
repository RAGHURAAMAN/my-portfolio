import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutBento.module.css';

const AboutBento = () => {
    return (
        <motion.div
            className={styles.bentoContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            {/* Card 1: Systems (Large) */}
            <motion.div
                className={`${styles.card} ${styles.cardLarge}`}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                }}
                whileHover={{
                    scale: 1.015,
                    boxShadow: "0 20px 40px -5px rgba(0,0,0,0.08)",
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial="rest"
                animate="rest"
                whileTap="rest"
            >
                <motion.div
                    className={`${styles.cardBg} ${styles.bgBlue}`}
                    variants={{
                        rest: { opacity: 0.05, scale: 1 },
                        hover: { opacity: 0.1, scale: 1.1, transition: { duration: 0.5 } }
                    }}
                />
                <div className={styles.cardContent}>
                    <div>
                        <h3>I think in systems</h3>
                        <p>Mapping flows, dependencies, and edge cases. Structure before visuals.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Data (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall}`}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                }}
                whileHover={{
                    scale: 1.015,
                    boxShadow: "0 20px 40px -5px rgba(0,0,0,0.08)",
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial="rest"
                animate="rest"
                whileTap="rest"
            >
                <motion.div
                    className={`${styles.cardBg} ${styles.bgPurple}`}
                    variants={{
                        rest: { opacity: 0.05, scale: 1 },
                        hover: { opacity: 0.1, scale: 1.1, transition: { duration: 0.5 } }
                    }}
                />
                <div className={styles.cardContent}>
                    <div>
                        <h3>Data & Intuition</h3>
                        <p>Using metrics to calm the gut feeling.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 3: Writing (Small) */}
            <motion.div
                className={`${styles.card} ${styles.cardSmall}`}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                }}
                whileHover={{
                    scale: 1.015,
                    boxShadow: "0 20px 40px -5px rgba(0,0,0,0.08)",
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial="rest"
                animate="rest"
                whileTap="rest"
            >
                <motion.div
                    className={`${styles.cardBg} ${styles.bgGreen}`}
                    variants={{
                        rest: { opacity: 0.05, scale: 1 },
                        hover: { opacity: 0.1, scale: 1.1, transition: { duration: 0.5 } }
                    }}
                />
                <div className={styles.cardContent}>
                    <div>
                        <h3>Writing to think</h3>
                        <p>Clarifying thoughts through words.</p>
                    </div>
                </div>
            </motion.div>

            {/* Card 4: Playful Exploration (Wide) */}
            <motion.div
                className={`${styles.card} ${styles.cardWide}`}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                }}
                whileHover={{
                    scale: 1.015,
                    boxShadow: "0 20px 40px -5px rgba(0,0,0,0.08)",
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
                initial="rest"
                animate="rest"
                whileTap="rest"
            >
                <motion.div
                    className={`${styles.cardBg} ${styles.bgCream}`}
                    variants={{
                        rest: { opacity: 0.05, scale: 1 },
                        hover: { opacity: 0.1, scale: 1.1, transition: { duration: 0.5 } }
                    }}
                />
                <div className={styles.cardContent}>
                    <div>
                        <h3>Playful Exploration</h3>
                        <p>Always experimenting with new tools and dimensions.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutBento;
