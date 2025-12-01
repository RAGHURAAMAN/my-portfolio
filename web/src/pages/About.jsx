import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '../components/PhotoGallery';
import AboutBento from '../components/AboutBento';
import JourneyTimeline from '../components/JourneyTimeline';
import styles from './About.module.css';

const FadeInSection = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0] // Premium cubic-bezier
        }}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <div className="container" style={{ paddingTop: 'var(--header-height)' }}>
            <div className={styles.aboutWrapper}>

                {/* Sidebar / Snapshot */}
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>
                        <FadeInSection>
                            <div className={styles.profileSection}>
                                <h2 className={styles.sidebarTitle}>Quick Profile</h2>
                                <ul className={styles.sidebarList}>
                                    <li><strong>Name:</strong> Raghuraaman</li>
                                    <li><strong>Role:</strong> Senior UX Designer</li>
                                    <li><strong>Based in:</strong> Bangalore, India</li>
                                    <li><strong>Working with:</strong> Product managers, engineers, data teams</li>
                                </ul>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <div className={styles.profileSection}>
                                <h2 className={styles.sidebarTitle}>Currently Exploring</h2>
                                <ul className={styles.sidebarList}>
                                    <li>Design systems that connect Figma to code</li>
                                    <li>AI assisted research workflows</li>
                                    <li>Workflows for healthcare teams</li>
                                    <li>Better ways to handle feedback</li>
                                </ul>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <div className={styles.profileSection}>
                                <h2 className={styles.sidebarTitle}>Mentors on my shelf</h2>
                                <ul className={styles.sidebarList}>
                                    <li>Bianca Sparacino</li>
                                    <li>Brianna Wiest</li>
                                    <li>Seth Godin</li>
                                    <li>Chris Do</li>
                                    <li>Mark Manson</li>
                                </ul>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.3}>
                            <div className={styles.profileSection}>
                                <h2 className={styles.sidebarTitle}>Say Hi</h2>
                                <ul className={styles.sidebarList}>
                                    <li><a href="mailto:raghuraaman98@gmail.com" className={styles.link}>Email</a></li>
                                    <li><a href="https://www.linkedin.com/in/raghuraaman-p-s/" className={styles.link}>LinkedIn</a></li>
                                </ul>
                            </div>
                        </FadeInSection>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <FadeInSection>
                        <section className={styles.introSection}>
                            <h1 className={styles.mainTitle}>
                                Designing clarity<br />
                                <span className={styles.highlight}>from chaos.</span>
                            </h1>
                            <p className={styles.introText}>
                                I help teams build scalable design systems and intuitive products that make complex workflows feel simple.
                            </p>
                        </section>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>My Journey</h2>
                            <JourneyTimeline />
                        </section>
                    </FadeInSection>

                    <FadeInSection delay={0.2}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>How I work and make decisions</h2>
                            <AboutBento />
                        </section>
                    </FadeInSection>

                    <FadeInSection delay={0.3}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Fragments and Collectibles</h2>
                            <p className={styles.muted}>I capture ideas as notes, screenshots, photos and small artifacts.</p>

                            <PhotoGallery />
                        </section>
                    </FadeInSection>

                </main>
            </div>
        </div>
    );
};

export default About;
