import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Grid, List } from 'lucide-react';
import ProjectSection from '../components/ProjectSection';
import TableOfContents from '../components/TableOfContents';
import ProjectFolder from '../components/ProjectFolder';
import ProjectList from '../components/ProjectList';
import ProjectHero from '../components/ProjectHero';
import StatCard from '../components/StatCard';
import styles from './Projects.module.css';

const sections = [
    { id: 'challenge', title: 'The Challenge' },
    { id: 'beginning', title: 'Where We Began' },
    { id: 'insights', title: 'Key Insights' },
    { id: 'solution', title: 'Defining the Solution' },
    { id: 'ambiguity', title: 'Navigating Ambiguity' },
    { id: 'impact', title: 'Impact and Results' },
    { id: 'learnings', title: 'Challenges and Learnings' },
    { id: 'next', title: 'Next Steps' },
];

const projectsData = [
    {
        id: 'compensation',
        title: 'Compensation Tool',
        description: 'Zero-to-one SaaS product for enterprise compensation planning',
        duration: 'Spring 2024',
        color: 'var(--bento-blue)',
        image: '/projects/project_thumbnail_compensation_1764131038904.png'
    },
    {
        id: 'fintech',
        title: 'Fintech Dashboard',
        description: 'Real-time analytics and reporting for financial teams',
        duration: 'Winter 2023',
        color: 'var(--bento-purple)',
        image: '/projects/project_thumbnail_fintech_1764131056651.png'
    },
    {
        id: 'travel',
        title: 'Travel App',
        description: 'Mobile experience for collaborative trip planning',
        duration: 'Fall 2023',
        color: 'var(--bento-green)',
        image: '/projects/project_thumbnail_travel_1764131302186.png'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const handleProjectClick = (project) => {
        if (project.id === 'compensation') {
            setSelectedProject(project);
            window.scrollTo(0, 0);
        } else {
            alert("Case study coming soon!");
        }
    };

    const handleBack = () => {
        setSelectedProject(null);
        window.scrollTo(0, 0);
    };

    if (!selectedProject) {
        return (
            <div className="container" style={{ paddingTop: 'var(--header-height)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.indexContainer}
                >
                    <div className={styles.header}>
                        <h1 className={styles.pageTitle}>Featured Projects</h1>
                        <p className={styles.pageSubtitle}>Case studies from zero-to-one products, enterprise tools, and complex workflows</p>

                        {/* View Toggle */}
                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.activeToggle : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid View"
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                className={`${styles.toggleButton} ${viewMode === 'list' ? styles.activeToggle : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List View"
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>

                    {viewMode === 'grid' ? (
                        <div className={styles.folderGrid}>
                            {projectsData.map((project, index) => (
                                <ProjectFolder
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    onClick={() => handleProjectClick(project)}
                                />
                            ))}
                        </div>
                    ) : (
                        <ProjectList projects={projectsData} />
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--header-height)' }}>
            <motion.button
                onClick={handleBack}
                className={styles.backButton}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: -5 }}
            >
                <ArrowLeft size={20} /> Back to Projects
            </motion.button>



            <ProjectHero
                title="Designing a Zero-to-One Compensation Product"
                subtitle="Building a centralized tool for enterprise compensation planning from the ground up."
                role="Product Designer"
                duration="Spring 2024"
                team="2 PMs, 4 Engineers"
            />

            <div className={styles.projectHeader}>
                <motion.a
                    href="https://www.figma.com/design/No4GMPu2Mcy2PgxxNA57Vs/MY-Works?node-id=403-24058&t=6mQC9z5dcn6tmago-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.figmaLink}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    View in Figma ↗
                </motion.a>
            </div>

            <div className={styles.contentLayout}>
                <div className={styles.mainColumn}>
                    <ProjectSection id="challenge" title="The Challenge">
                        <p className={styles.leadText}>Starting from scratch is both exciting and daunting. At my previous role, I was tasked with designing a compensation tool. However, there was no clear vision or roadmap, and plans seemed to shift weekly.</p>

                        <div className={styles.insightGrid}>
                            <div className={styles.insightCard}>
                                <h3>The Problem</h3>
                                <p>Managers lacked a centralized tool to make fair compensation decisions, relying on scattered spreadsheets.</p>
                            </div>
                            <div className={styles.insightCard}>
                                <h3>The Goal</h3>
                                <p>Build a unified platform that simulates budgets and offers AI-driven insights for ethical decision making.</p>
                            </div>
                        </div>
                    </ProjectSection>

                    <ProjectSection id="beginning" title="Where We Began">
                        <p>The journey wasn’t conventional. We prioritized validating ideas quickly over rigid processes.</p>
                        <div className={styles.processGrid}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>01</div>
                                <h4>Stakeholder Interviews</h4>
                                <p>Understanding vision and buyer personas.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>02</div>
                                <h4>Survey Research</h4>
                                <p>Uncovering how orgs manage compensation today.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>03</div>
                                <h4>Rapid Prototyping</h4>
                                <p>Testing concepts with real users early.</p>
                            </div>
                        </div>
                    </ProjectSection>

                    <ProjectSection id="insights" title="Key Insights">
                        <blockquote className={styles.quote}>
                            "Managers and team owners lack a <strong>centralized, user-friendly tool</strong> to make fair and ethical compensation decisions."
                        </blockquote>
                    </ProjectSection>

                    <ProjectSection id="solution" title="Defining the Solution">
                        <div className={styles.featureGrid}>
                            <div className={styles.featureCard}>
                                <h3>Centralized Platform</h3>
                                <p>Unified access to all compensation data in one place.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h3>AI Budget Simulation</h3>
                                <p>Simulate multiple scenarios for informed decisions.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h3>Objective Insights</h3>
                                <p>Data-driven recommendations for fair pay.</p>
                            </div>
                        </div>
                    </ProjectSection>

                    <ProjectSection id="impact" title="Impact and Results">
                        <div className={styles.statsGrid}>
                            <StatCard
                                value="40%"
                                label="Time Saved"
                                description="Reduction in compensation planning cycles"
                            />
                            <StatCard
                                value="85%"
                                label="User Satisfaction"
                                description="Positive feedback from beta testing managers"
                            />
                            <StatCard
                                value="100%"
                                label="Adoption"
                                description="Of pilot teams switched from spreadsheets"
                            />
                        </div>
                    </ProjectSection>

                    <ProjectSection id="learnings" title="Reflections">
                        <p>Designing a zero-to-one product taught me how to navigate ambiguity. It was a rollercoaster ride, but by focusing on stakeholder needs and iterative development, we built something impactful.</p>
                    </ProjectSection>
                </div>

                <aside className={styles.sideColumn}>
                    <TableOfContents sections={sections} />
                </aside>
            </div>

            <div style={{ height: '20vh' }}></div>
        </div>
    );
};

export default Projects;
