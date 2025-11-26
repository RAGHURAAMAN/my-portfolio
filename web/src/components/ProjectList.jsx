import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.css';

const ProjectList = ({ projects }) => {
    const [expandedId, setExpandedId] = useState(projects[0]?.id || 1);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tableHeader}>
                <span className={styles.colName}>Name</span>
                <span className={styles.colCategory}>Discipline</span>
                <span className={styles.colYear}>Year</span>
                <span className={styles.colCompany}>Company</span>
            </div>

            <div className={styles.list}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectRow}>
                        {/* List Item Header */}
                        <div
                            className={`${styles.rowHeader} ${expandedId === project.id ? styles.activeRow : ''}`}
                            onClick={() => toggleExpand(project.id)}
                        >
                            <div className={styles.colName}>
                                <span className={styles.folderIcon}>📂</span>
                                {project.title}
                            </div>
                            <div className={styles.colCategory}>{project.role || project.category}</div>
                            <div className={styles.colYear}>{project.duration || project.year}</div>
                            <div className={styles.colCompany}>
                                {project.company || "Self"}
                                <span className={styles.chevron}>
                                    {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </span>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {expandedId === project.id && (
                                <motion.div
                                    className={styles.expandedContent}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className={styles.contentGrid}>
                                        {/* Left: Main Image */}
                                        <div className={styles.mainImageWrapper}>
                                            <img src={project.image || project.mainImage} alt={project.title} className={styles.mainImage} />
                                        </div>

                                        {/* Right: Details & Thumbnails */}
                                        <div className={styles.detailsWrapper}>
                                            <div className={styles.descriptionBox}>
                                                <p className={styles.description}>{project.description || "A detailed look at the design process and outcome of this project."}</p>
                                                <Link to="/projects" className={styles.projectLink}>
                                                    View Case Study <ArrowUpRight size={16} />
                                                </Link>
                                            </div>

                                            <div className={styles.thumbnailGrid}>
                                                {/* Use thumbnails if available, or placeholders */}
                                                {(project.thumbnails || [1, 2, 3, 4]).map((thumb, idx) => (
                                                    <div key={idx} className={styles.thumbnailWrapper}>
                                                        <img
                                                            src={typeof thumb === 'string' ? thumb : project.image}
                                                            alt="Detail"
                                                            className={styles.thumbnail}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
