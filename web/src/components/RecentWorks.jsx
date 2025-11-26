import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import ProjectFolder from './ProjectFolder';
import styles from './RecentWorks.module.css';

const RecentWorks = () => {
    const projects = [
        {
            id: 1,
            title: "Compensation Tool",
            role: "SaaS Product",
            duration: "2024",
            color: '#F3F4F6', // Unified Subtle Gray
            image: "/projects/project_thumbnail_compensation_1764131038904.png",
        },
        {
            id: 2,
            title: "Fintech Dashboard",
            role: "UI Design",
            duration: "2023",
            color: '#F3F4F6', // Unified Subtle Gray
            image: "/projects/project_thumbnail_fintech_1764131056651.png",
        },
        {
            id: 3,
            title: "Travel App",
            role: "Mobile UX",
            duration: "2023",
            color: '#F3F4F6', // Unified Subtle Gray
            image: "/projects/project_thumbnail_travel_1764131302186.png",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tooltipContainer}>
                    <h3 className={styles.heading}>Selected Works <HelpCircle size={16} className={styles.helpIcon} /></h3>
                    <div className={styles.tooltip}>
                        <p><strong>Why Folders?</strong></p>
                        <p>I love organizing chaos into neat, accessible packages. Just like my design process!</p>
                    </div>
                </div>
                <Link to="/projects" className={styles.viewAll}>View all projects</Link>
            </div>

            <div className={styles.folderGrid}>
                {projects.map((project, index) => (
                    <Link to="/projects" key={project.id} style={{ textDecoration: 'none' }}>
                        <ProjectFolder
                            project={project}
                            index={index}
                            onClick={() => { }} // Navigation handled by Link
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentWorks;
