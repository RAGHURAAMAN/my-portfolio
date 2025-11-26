import React, { useState, useEffect } from 'react';
import styles from './TableOfContents.module.css';

const TableOfContents = ({ sections }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.toc}>
            <div className={styles.scaleContainer}>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`${styles.tickContainer} ${activeId === section.id ? styles.active : ''}`}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <span className={styles.label}>{section.title}</span>
                        <div className={styles.tick}></div>
                    </div>
                ))}
                <div className={styles.verticalLine}></div>
            </div>
        </nav>
    );
};

export default TableOfContents;
