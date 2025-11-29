import React from 'react';
import { motion } from 'framer-motion';
import styles from './JourneyTimeline.module.css';

const JourneyTimeline = () => {
    const timelineSteps = [
        {
            id: 'dev',
            label: 'Developer',
            year: 'Past',
            description: 'Building APIs and React components. Focused on writing code.'
        },
        {
            id: 'turning',
            label: 'Turning Point',
            year: 'The Shift',
            description: 'Watched someone struggle with a tool I built. Realized I cared more about why they were confused than how to fix the code.'
        },
        {
            id: 'transition',
            label: 'Transition',
            year: 'Journey',
            description: 'Volunteered for user research. Sat in design critiques. Took on small UX projects alongside dev work.'
        },
        {
            id: 'now',
            label: 'Senior UX Designer',
            year: 'Now',
            description: 'Designing compensation planning tools for enterprise HR teams. Understanding decision-making, mapping workflows, turning spreadsheet chaos into calm interfaces.'
        }
    ];

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelinePath}>
                {timelineSteps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={styles.timelineStep}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div className={styles.stepIndicator}>
                            <div className={styles.dot} />
                            {index < timelineSteps.length - 1 && (
                                <div className={styles.line} />
                            )}
                        </div>
                        <div className={styles.stepContent}>
                            <span className={styles.stepYear}>{step.year}</span>
                            <h3 className={styles.stepLabel}>{step.label}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default JourneyTimeline;
