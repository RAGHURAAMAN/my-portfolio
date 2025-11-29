import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectFolder.module.css';

const ProjectFolder = ({ project, onClick, index }) => {
    return (
        <motion.div
            className={styles.folderContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
        >
            {/* Folder Back (Static) */}
            <div className={styles.folderBack} style={{ '--folder-color': project.color }}>
                <div className={styles.tab}>
                    <span className={styles.duration}>{project.duration}</span>
                </div>
            </div>

            {/* Decorative Paper 1 (Back) */}
            <motion.div
                className={`${styles.paper} ${styles.paperDecorative}`}
                variants={{
                    hover: { y: -50, rotate: -5, x: -10 }
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            />

            {/* Decorative Paper 2 (Middle) */}
            <motion.div
                className={`${styles.paper} ${styles.paperDecorative}`}
                variants={{
                    hover: { y: -50, rotate: 5, x: 10 }
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6, delay: 0.05 }}
            />

            {/* Main Paper / Content (Front) */}
            <motion.div
                className={styles.paper}
                variants={{
                    hover: { y: -60, rotate: -2 } // Slight tilt for main paper too
                }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 0.1 }}
            >
                <div className={styles.imageWrapper}>
                    {project.image ? (
                        <img src={project.image} alt={project.title} className={styles.coverImage} />
                    ) : (
                        <div className={styles.placeholderImage} />
                    )}
                </div>
                {/* Title removed from here as per user request, moved to front */}
            </motion.div>

            {/* Folder Front (Static Cover) */}
            <div className={styles.folderFront} style={{ '--folder-color': project.color }}>
                <div className={styles.frontContent}>
                    <span className={styles.folderLabel}>{project.title}</span>
                    <p className={styles.folderDescription}>{project.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectFolder;
