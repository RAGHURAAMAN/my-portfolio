import React from 'react';
import { motion } from 'framer-motion';
import styles from './TShapedSkills.module.css';

const TShapedSkills = () => {
    const breadthSkills = [
        "User Research", "Frontend Dev", "Motion Design", "Data Analysis"
    ];

    const depthSkills = [
        { title: "Product Thinking", desc: "Connecting business goals with user needs." },
        { title: "Design Systems", desc: "Scalable, atomic, and accessible UI kits." },
        { title: "Interaction Design", desc: "Micro-interactions that delight and guide." },
    ];

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>The <span className={styles.highlight}>T-Shaped</span> Designer</h3>
            <p className={styles.subheading}>Broad generalist knowledge with deep specialist expertise.</p>

            <div className={styles.tGraph}>
                {/* Breadth Bar (Top Row) */}
                <div className={styles.breadthRow}>
                    {breadthSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className={styles.breadthNode}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

                {/* Depth Column (Center) */}
                <div className={styles.depthColumn}>
                    {depthSkills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className={styles.depthNode}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (index * 0.15) }}
                            viewport={{ once: true }}
                        >
                            <h4 className={styles.depthTitle}>{skill.title}</h4>
                            <p className={styles.depthDesc}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TShapedSkills;
