import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhotoGallery.module.css';

const PhotoGallery = () => {
    // Placeholder images - in a real app, these would be props or fetched
    const photos = [
        { id: 1, src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60", caption: "Cinque Terre, Italy" },
        { id: 2, src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60", caption: "Venice Canals" },
        { id: 3, src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60", caption: "Alpine Lakes" },
        { id: 4, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60", caption: "Starry Nights" },
        { id: 5, src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=500&auto=format&fit=crop&q=60", caption: "Exploring" },
        { id: 6, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60", caption: "Roadtrip" },
    ];

    return (
        <div className={styles.gallery}>
            {photos.map((photo, index) => (
                <motion.div
                    key={photo.id}
                    className={styles.item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <div className={styles.imageWrapper}>
                        <img src={photo.src} alt={photo.caption} className={styles.image} />
                    </div>
                    <p className={styles.caption}>{photo.caption}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default PhotoGallery;
