import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, FileText } from 'lucide-react';
import styles from './KeychainFooter.module.css';

const KeychainItem = ({ icon: Icon, label, href, index, total, color, dragConstraints, spacing }) => {
    // Calculate position on the rod
    // Center the group of items
    // const spacing is now passed as prop
    const totalWidth = (total - 1) * spacing;
    const startX = -totalWidth / 2;
    const x = startX + index * spacing;

    // Random initial rotation for natural feel
    const initialRotate = Math.random() * 4 - 2; // -2 to 2 degrees

    return (
        <motion.div
            className={styles.keychainWrapper}
            style={{ left: `calc(50% + ${x}px)` }}
            initial={{ rotate: initialRotate }}
            whileHover={{
                rotate: [0, -10, 8, -6, 4, 0],
                transition: { duration: 2, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            drag
            dragConstraints={dragConstraints}
            dragElastic={0.2}
        >
            <div className={styles.ring} />
            <div className={styles.connector} />
            <div className={styles.tag} style={{ backgroundColor: color }}>
                <Icon size={18} className={styles.icon} style={{ color: '#1f2937' }} />
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    style={{ color: '#1f2937' }}
                    draggable={false} // Prevent native link dragging
                    onPointerDown={(e) => e.stopPropagation()} // Optional: allows clicking without dragging? No, user wants drag.
                // Actually, if we want to drag by grabbing text, we shouldn't stop propagation.
                // But we want to prevent click if dragged. Browser usually handles this if we don't prevent default.
                >
                    {label}
                </a>
            </div>
        </motion.div>
    );
};

const KeychainFooter = () => {
    const links = [
        { label: 'Email', icon: Mail, href: 'mailto:raghuraaman98@gmail.com', color: '#e0f2fe' }, // Pastel Sky
        { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/raghuraaman-p-s/', color: '#e0e7ff' }, // Pastel Indigo
        { label: 'Twitter', icon: Twitter, href: '#', color: '#fae8ff' }, // Pastel Fuchsia
        { label: 'GitHub', icon: Github, href: '#', color: '#f3f4f6' }, // Pastel Gray
        { label: 'Resume', icon: FileText, href: '#', color: '#ffe4e6' }, // Pastel Rose
    ];

    const [spacing, setSpacing] = React.useState(160);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSpacing(80); // Tighter spacing for mobile
            } else if (window.innerWidth < 1024) {
                setSpacing(120); // Medium spacing for tablet
            } else {
                setSpacing(160); // Default spacing
            }
        };

        handleResize(); // Set initial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerRef = React.useRef(null);

    return (
        <footer className={styles.footerContainer} ref={containerRef}>


            <div className={styles.rodContainer}>
                <div className={styles.rod} />

                {links.map((link, index) => (
                    <KeychainItem
                        key={link.label}
                        {...link}
                        index={index}
                        total={links.length}
                        spacing={spacing}
                        dragConstraints={containerRef}
                    />
                ))}

                {/* Mini Copper Keychain (Decorative) */}
                <motion.div
                    className={styles.keychainWrapper}
                    style={{ left: `calc(50% + ${(links.length * 160) / 2 + 60}px)` }} // Offset to the right
                    initial={{ rotate: 5 }}
                    whileHover={{ rotate: [5, -5, 3, -3, 0] }}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                >
                    <div className={styles.ring} style={{ borderColor: '#b45309', width: 20, height: 20 }} />
                    <div className={styles.connector} style={{ height: 8, background: 'linear-gradient(to right, #78350f, #b45309, #78350f)' }} />
                    <div className={styles.tag} style={{
                        background: 'linear-gradient(145deg, #b45309, #78350f)',
                        minWidth: 'auto',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <div style={{ width: 12, height: 12, background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }} />
                    </div>
                </motion.div>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Raghuraaman. All rights reserved.
            </div>
        </footer>
    );
};

export default KeychainFooter;
