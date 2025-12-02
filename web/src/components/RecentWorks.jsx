import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import styles from './RecentWorks.module.css';

const RecentWorks = () => {
    const projects = [
        {
            id: 1,
            title: "Compensation Tool",
            description: "Zero-to-one SaaS product for enterprise compensation planning",
            year: "2024",
            role: "Product Design",
            company: "Stealth",
            image: "/projects/project_thumbnail_compensation_1764131038904.png",
            thumbnails: [
                "/projects/project_thumbnail_compensation_1764131038904.png",
                "/projects/project_thumbnail_compensation_1764131038904.png", // Placeholder
                "/projects/project_thumbnail_compensation_1764131038904.png"  // Placeholder
            ]
        },
        {
            id: 2,
            title: "Fintech Dashboard",
            description: "Real-time analytics and reporting for financial teams",
            year: "2023",
            role: "UX/UI Design",
            company: "FinCorp",
            image: "/projects/project_thumbnail_fintech_1764131056651.png",
        },
        {
            id: 3,
            title: "Travel App",
            description: "Mobile experience for collaborative trip planning",
            year: "2023",
            role: "Product Design",
            company: "TravelCo",
            image: "/projects/project_thumbnail_travel_1764131302186.png",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.heading}>Selected Works</h3>
                <Link to="/projects" className={styles.viewAll}>View all projects</Link>
            </div>

            <div className={styles.listContainer}>
                <ProjectList projects={projects} showIcons={false} />
            </div>
        </div>
    );
};

export default RecentWorks;
