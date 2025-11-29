import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, PenTool, Clock } from 'lucide-react';
import styles from './ProjectHero.module.css';

const ProjectHero = ({ title, subtitle, role, duration, team, tools }) => {
    return (
        <div className={styles.heroContainer}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>

                <div className={styles.metaGrid}>
                    <div className={styles.metaItem}>
                        <div className={styles.label}><PenTool size={14} /> Role</div>
                        <div className={styles.value}>{role}</div>
                    </div>
                    <div className={styles.metaItem}>
                        <div className={styles.label}><Clock size={14} /> Duration</div>
                        <div className={styles.value}>{duration}</div>
                    </div>
                    <div className={styles.metaItem}>
                        <div className={styles.label}><Users size={14} /> Team</div>
                        <div className={styles.value}>{team}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectHero;
