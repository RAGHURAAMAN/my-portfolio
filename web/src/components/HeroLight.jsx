import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroLight.module.css';

const HeroLight = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects - Increased intensity
    const y1 = useTransform(scrollY, [0, 500], [0, 300]); // Moves faster
    const opacity1 = useTransform(scrollY, [0, 300], [0.9, 0]);

    const y2 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity2 = useTransform(scrollY, [0, 400], [0.6, 0]);

    return (
        <div className={styles.lightContainer} ref={containerRef}>
            {/* Main central beam */}
            <motion.div
                className={styles.beamPrimary}
                style={{ y: y1, opacity: opacity1 }}
            />

            {/* Secondary ambient beams */}
            <motion.div
                className={styles.beamSecondary}
                style={{ y: y2, opacity: opacity2 }}
            />

            {/* Dust motes / particles effect could go here later */}
        </div>
    );
};

export default HeroLight;
