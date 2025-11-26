import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '../components/PhotoGallery';
import AboutBento from '../components/AboutBento';
import styles from './About.module.css';

const About = () => {
    return (
        <div className="container" style={{ paddingTop: 'var(--header-height)' }}>
            <motion.div
                className={styles.aboutWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                {/* Sidebar / Snapshot */}
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>
                        <div className={styles.profileSection}>
                            <h2 className={styles.sidebarTitle}>Quick Profile</h2>
                            <ul className={styles.sidebarList}>
                                <li><strong>Name:</strong> Raghuraaman</li>
                                <li><strong>Role:</strong> Senior UX Designer</li>
                                <li><strong>Based in:</strong> [City, Country]</li>
                                <li><strong>Working with:</strong> Product managers, engineers, data teams</li>
                            </ul>
                        </div>

                        <div className={styles.profileSection}>
                            <h2 className={styles.sidebarTitle}>Currently Exploring</h2>
                            <ul className={styles.sidebarList}>
                                <li>Design systems that connect Figma to code</li>
                                <li>AI assisted research workflows</li>
                                <li>Workflows for healthcare teams</li>
                                <li>Better ways to handle feedback</li>
                            </ul>
                        </div>

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

                        <div className={styles.profileSection}>
                            <h2 className={styles.sidebarTitle}>Say Hi</h2>
                            <ul className={styles.sidebarList}>
                                <li><a href="mailto:your@email.com" className={styles.link}>Email</a></li>
                                <li><a href="#" className={styles.link}>LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <section className={styles.section}>
                        <h1 className={styles.mainTitle}>Hi, I am Raghuraaman</h1>
                        <p className={styles.introText}>
                            A designer who writes to understand, and builds systems to make work calmer.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Where I am now</h2>
                        <p>
                            I work as a Senior UX Designer at [Company], designing [type of products]. Most of my time goes into understanding how people use [domain] tools, mapping messy workflows, and turning them into interfaces that feel calm and predictable.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How I got here</h2>
                        <p>
                            The first time design felt real to me was when... [Story placeholder]. Before design, I spent my time... [Story placeholder].
                        </p>
                        <p>
                            The moment I decided to shift from development to design was when... [Story placeholder].
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How I work and make decisions</h2>
                        <AboutBento />
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Fragments and Collectibles</h2>
                        <p className={styles.muted}>I capture ideas as notes, screenshots, photos and small artifacts.</p>

                        <PhotoGallery />
                    </section>

                </main>
            </motion.div>
        </div>
    );
};

export default About;
