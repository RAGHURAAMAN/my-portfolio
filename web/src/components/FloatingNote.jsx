import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './FloatingNote.module.css';

const FloatingNote = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;

    return (
        <motion.div
            className={styles.noteContainer}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{
                opacity: 1,
                rotate: [5, 3, 6, 4, 5],
                y: [0, -5, 0, -3, 0]
            }}
            transition={{
                rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
        >
            <button className={styles.closeBtn} onClick={() => setIsVisible(false)}>
                <X size={14} />
            </button>
            <p className={styles.text}>
                "I design things that make sense (mostly)."
            </p>
            <span className={styles.signature}>- Raghu</span>
        </motion.div>
    );
};

export default FloatingNote;
