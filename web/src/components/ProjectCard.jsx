import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`${styles.cardContainer} ${isEven ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={styles.content}>
                <div className={styles.imagePlaceholder}>
                    {/* Placeholder for project image */}
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.info}>
                    <span className={styles.year}>{project.year}</span>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Node */}
            <div className={styles.node}></div>
        </motion.div>
    );
};

export default ProjectCard;
