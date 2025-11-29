import React from 'react';
import { motion } from 'framer-motion';
import Capabilities from '../components/Capabilities';
import RecentWorks from '../components/RecentWorks';
import HeroLight from '../components/HeroLight';
import styles from './Home.module.css';

const Home = () => {
    const traits = [
        { label: "Introspective", icon: "🔍", color: "#e0e7ff", borderColor: "#818cf8" },
        { label: "Intuitive", icon: "🧠", color: "#cffafe", borderColor: "#22d3ee" },
        { label: "Systems-first", icon: "🧿", color: "#dcfce7", borderColor: "#4ade80" },
    ];

    return (
        <>
            <div className={styles.heroContainer}>
                {/* Volumetric Light Effect */}

                {/* Volumetric Light Effect */}
                <HeroLight />

                <div className={styles.contentWrapper}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={styles.intro}
                    >
                        <span className={styles.greeting}>Hi 👋 I’m</span>
                        <h1 className={styles.name}>Raghuraaman</h1>
                    </motion.div>

                    <motion.h2
                        className={styles.headline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    >
                        Crafting <span className={styles.highlight}>Products & Services</span><br />
                        as <span className={styles.highlight}>Humanly</span> as possible
                    </motion.h2>

                    <motion.p
                        className={styles.subtext}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        Love to Connect the dots, create intuitive designs for boring and annoying problems
                    </motion.p>

                    <motion.div
                        className={styles.traitsContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <span className={styles.imText}>How I work:</span>
                        <div className={styles.badges}>
                            {traits.map((trait, index) => (
                                <motion.div
                                    key={trait.label}
                                    className={styles.badge}
                                    style={{
                                        backgroundColor: trait.color,
                                        border: `1px solid ${trait.borderColor}`
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + (index * 0.1) }}
                                >
                                    <span className={styles.traitIcon}>{trait.icon}</span>
                                    {trait.label}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Scroll to Explore Indicator */}
                    <motion.div
                        className={styles.scrollIndicator}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        onClick={() => {
                            document.getElementById('capabilities-section')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        >
                            ↓ Scroll to explore
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Skills Section */}
            <div className={styles.sectionContainer} id="capabilities-section">
                <Capabilities />
            </div>

            {/* Works Section */}
            <div className={styles.sectionContainer}>
                <RecentWorks />
            </div>
        </>
    );
};

export default Home;
