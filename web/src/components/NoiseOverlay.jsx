import React from 'react';
import styles from './NoiseOverlay.module.css';

const NoiseOverlay = () => {
    return (
        <div className={styles.noiseContainer}>
            <div className={styles.noise}></div>
        </div>
    );
};

export default NoiseOverlay;
