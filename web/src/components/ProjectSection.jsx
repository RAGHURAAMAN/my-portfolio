import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectSection.module.css';

const ProjectSection = ({ title, children, id }) => {
  return (
    <section id={id} className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
