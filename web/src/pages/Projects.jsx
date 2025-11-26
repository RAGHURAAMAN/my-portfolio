import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Grid, List } from 'lucide-react';
import ProjectSection from '../components/ProjectSection';
import TableOfContents from '../components/TableOfContents';
import ProjectFolder from '../components/ProjectFolder';
import ProjectList from '../components/ProjectList';
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
        role: 'Product Designer',
        duration: 'Spring 2024',
        color: '#F3F4F6', // Unified Subtle Gray
        image: '/projects/project_thumbnail_compensation_1764131038904.png'
    },
    {
        id: 'fintech',
        title: 'Fintech Dashboard',
        role: 'UI Designer',
        duration: 'Winter 2023',
        color: '#F3F4F6', // Unified Subtle Gray
        image: '/projects/project_thumbnail_fintech_1764131056651.png'
    },
    {
        id: 'travel',
        title: 'Travel App',
        role: 'UX Designer',
        duration: 'Fall 2023',
        color: '#F3F4F6', // Unified Subtle Gray
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
                        <p className={styles.pageSubtitle}>Blood, sweat, and tears were sacrificed.</p>

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

            <TableOfContents sections={sections} />

            <div className={styles.projectHeader}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.mainTitle}
                >
                    Designing a Zero-to-One Compensation Product
                </motion.h1>
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

            <ProjectSection id="challenge" title="The Challenge">
                <p>Starting from scratch is both exciting and daunting. At my previous role, I was tasked with designing a compensation tool. However, there was no clear vision or roadmap, and plans seemed to shift weekly. This constant pivoting created uncertainty, but it also gave us room to explore.</p>
                <p>We started with some key questions:</p>
                <ul>
                    <li>How can compensation play a more effective role in hiring and retaining talent?</li>
                    <li>What if we could build a tool to decide all compensation numbers in one place, irrespective of the tools being used?</li>
                    <li>How can we help managers make objective and ethical compensation decisions?</li>
                    <li>Can AI help simulate budgets, offering tailored compensation options for business units and teams?</li>
                </ul>
            </ProjectSection>

            <ProjectSection id="beginning" title="Where We Began">
                <p>The journey wasn’t conventional. While we adhered to some standard practices, we took risks, made decisions collaboratively, and prioritized validating ideas quickly. Here’s how we got started:</p>
                <p><strong>Stakeholder Study:</strong> We interviewed key stakeholders to understand their vision, potential buyer personas, and ideal processes.</p>
                <div className={styles.imagePlaceholder}>[Stakeholder Study Image]</div>
                <p><strong>Survey Research:</strong> We conducted surveys to uncover how structured organizations currently manage compensation.</p>
                <div className={styles.imagePlaceholder}>[Survey Research Image]</div>
            </ProjectSection>

            <ProjectSection id="insights" title="Key Insights">
                <p>After discussions with stakeholders and a few interested salespeople, a core insight emerged:</p>
                <blockquote className={styles.quote}>
                    Managers and team owners lack a <strong>centralized, user-friendly tool</strong> to make fair and ethical compensation decisions.
                </blockquote>
                <p>These insights shaped our <strong>primary goals</strong>:</p>
                <ul>
                    <li><strong>Streamline compensation cycles.</strong></li>
                    <li><strong>Improve decision-making visibility</strong> through automation and data-driven insights.</li>
                </ul>
            </ProjectSection>

            <ProjectSection id="solution" title="Defining the Solution">
                <h3>1. Our Hypothesis</h3>
                <p>Current compensation tools are complex, time-consuming, and lack actionable insights aligned with budgets and retention goals. A new tool could simplify this process.</p>

                <h3>2. Key Features Designed</h3>
                <ul>
                    <li><strong>Centralized Platform:</strong> Unified access to all compensation data.</li>
                    <li><strong>Budget Simulation with AI:</strong> Simulate multiple scenarios for informed decisions.</li>
                    <li><strong>Objective Insights:</strong> Offer managers data-driven, fair, and compliant recommendations.</li>
                </ul>
                <div className={styles.imagePlaceholder}>[UI Mockup Placeholder]</div>
            </ProjectSection>

            <ProjectSection id="ambiguity" title="Navigating Ambiguity">
                <h3>How I Brought Clarity to the Team</h3>
                <ul>
                    <li><strong>Collaboration:</strong> Regular syncs with stakeholders to validate ideas and adjust priorities.</li>
                    <li><strong>Transparency:</strong> Documenting and communicating evolving requirements clearly.</li>
                    <li><strong>Iterative Design:</strong> Rapid prototyping and user feedback loops to refine the solution.</li>
                </ul>
                <div className={styles.imagePlaceholder}>[Workflow Visual Placeholder]</div>
            </ProjectSection>

            <ProjectSection id="impact" title="Impact and Results">
                <h3>Quantitative Outcomes</h3>
                <ul>
                    <li>Reduced time spent on compensation planning by X%.</li>
                    <li>Increased user satisfaction by Y%.</li>
                </ul>
                <h3>Qualitative Feedback</h3>
                <p>Managers reported feeling more confident and objective in their decisions.</p>
                <div className={styles.imagePlaceholder}>[Data Visualization Placeholder]</div>
            </ProjectSection>

            <ProjectSection id="learnings" title="Challenges and Learnings">
                <h3>Challenges Faced</h3>
                <ul>
                    <li>Balancing between evolving requirements and delivering quickly.</li>
                    <li>Addressing the lack of an initial clear vision.</li>
                </ul>
                <h3>Key Learnings</h3>
                <ul>
                    <li>Early stakeholder alignment is crucial.</li>
                    <li>Iterative design ensures flexibility without losing sight of the goals.</li>
                </ul>
            </ProjectSection>

            <ProjectSection id="next" title="Next Steps">
                <p>While the initial version of the tool achieved significant milestones, we identified areas for future improvements:</p>
                <ul>
                    <li><strong>Predictive Insights:</strong> Incorporating advanced AI to forecast long-term budget impacts.</li>
                    <li><strong>Scalability:</strong> Adapting the tool for organizations of varying sizes.</li>
                </ul>
            </ProjectSection>

            <ProjectSection id="reflections" title="Reflections">
                <p>Designing a zero-to-one product taught me how to navigate ambiguity and bring clarity to complex challenges. It was a rollercoaster ride, but by focusing on stakeholder needs and iterative development, we built something impactful.</p>
            </ProjectSection>

            <div style={{ height: '20vh' }}></div>
        </div>
    );
};

export default Projects;
