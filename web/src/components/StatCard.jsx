import React from 'react';
import { motion } from 'framer-motion';
import styles from './StatCard.module.css';

const StatCard = ({ value, label, description }) => {
    return (
        <motion.div
            className={styles.card}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.value}>{value}</div>
            <h4 className={styles.label}>{label}</h4>
            {description && <p className={styles.description}>{description}</p>}
        </motion.div>
    );
};

export default StatCard;
