import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Layers, User, Mail, FileText } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'Home', icon: <Home size={20} /> },
        { path: '/projects', label: 'Works', icon: <Layers size={20} /> },
        { path: '/about', label: 'About', icon: <User size={20} /> },
        {
            path: 'https://drive.google.com/file/d/1pLxIgDHfXmtNXgHA4XE2jtPAUxifWHaI/view?usp=drive_link',
            label: 'Resume',
            icon: <FileText size={20} />,
            isExternal: true
        },
        // { path: '/contact', label: 'Contact', icon: <Mail size={20} /> }, // Keeping commented until page exists
    ];

    return (
        <motion.nav
            className={styles.navbarContainer}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.glassPill}>
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            {item.isExternal ? (
                                <a
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.navLink}
                                >
                                    <span className={styles.icon}>{item.icon}</span>
                                    <span className={styles.label}>{item.label}</span>
                                </a>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.active : ''}`
                                    }
                                >
                                    <span className={styles.icon}>{item.icon}</span>
                                    <span className={styles.label}>{item.label}</span>
                                    {/* Active Indicator Background */}
                                    <motion.div
                                        className={styles.activeBackground}
                                        layoutId="navbar-active"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
