import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // For touch swipe handling
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && activeIndex < images.length - 1) setActiveIndex(activeIndex + 1);
        if (isRightSwipe && activeIndex > 0) setActiveIndex(activeIndex - 1);

        setTouchStart(null);
        setTouchEnd(null);
    };

    const isVideo = (url) => {
        if (typeof url !== 'string') return false;
        return url.toLowerCase().endsWith('.mp4') ||
            url.toLowerCase().endsWith('.webm') ||
            url.toLowerCase().endsWith('.ogg');
    };

    return (
        <div className={styles.gallery}>
            <div
                className={styles.mainImageWrapper}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {isVideo(images[activeIndex]) ? (
                    <video
                        src={images[activeIndex]}
                        controls
                        autoPlay
                        muted
                        className={styles.mainVideo}
                    />
                ) : (
                    <img src={images[activeIndex]} alt="Product" className={styles.mainImage} />
                )}
            </div>
            <div className={styles.thumbnails}>
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        className={`${styles.thumbBtn} ${idx === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    >
                        {isVideo(img) ? (
                            <div className={styles.videoThumbPlaceholder}>▶</div>
                        ) : (
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className={styles.thumbImage} />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
