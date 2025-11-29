import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, MapPin, CircleDot, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Brand */}
                    <div className={styles.brandColumn}>
                        <h2 className={styles.logo}>Raghuraaman</h2>
                        <p className={styles.tagline}>
                            Crafting products & services as humanly as possible.
                        </p>
                        <div className={styles.status}>
                            <span className={styles.statusDot}></span>
                            <span className={styles.statusText}>Open to opportunities</span>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Explore</h3>
                        <ul className={styles.linkList}>
                            <li><Link to="/" className={styles.link}>Home</Link></li>
                            <li><Link to="/projects" className={styles.link}>Works</Link></li>
                            <li><Link to="/about" className={styles.link}>About</Link></li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1pLxIgDHfXmtNXgHA4XE2jtPAUxifWHaI/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    Resume <ArrowUpRight size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Connect</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <Twitter size={18} /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="mailto:raghuraamanps@gmail.com" className={styles.link}>
                                    <Mail size={18} /> Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Location */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Location</h3>
                        <div className={styles.locationInfo}>
                            <MapPin size={18} className={styles.icon} />
                            <span>Bangalore, India</span>
                        </div>
                        <p className={styles.timezone}>
                            IST (UTC+05:30)
                        </p>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Raghuraaman PS. All rights reserved.
                    </p>
                    <p className={styles.credit}>
                        Built with React & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
