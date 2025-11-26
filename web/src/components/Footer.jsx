import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.socials}>
                    <a href="#" className={styles.link}>Twitter</a>
                    <a href="#" className={styles.link}>LinkedIn</a>
                    <a href="#" className={styles.link}>Email</a>
                </div>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Raghuraaman. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
