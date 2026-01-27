import React from 'react';
import styles from './TestimonialGallery.module.css';

const testimonials = [
    {
        id: 1,
        quote: "The interactive robotics workshop was the highlight of our STEM week! The kids were completely engaged for 2 hours straight.",
        name: "Sarah Jenkins",
        role: "5th Grade Teacher",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
    },
    {
        id: 2,
        quote: "YuboKits handled everything - equipment, cleanup, and instruction. It was the easiest enrichment program we've ever hosted.",
        name: "Mark Thompson",
        role: "Community Center Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
        id: 3,
        quote: "Professional, fun, and incredibly educational. The instructors really knew how to modify the material for different skill levels.",
        name: "Emily Rodriguez",
        role: "Science Camp Coordinator",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
];

const TestimonialGallery = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Workshops in Action</h2>
            <div className={styles.grid}>
                {testimonials.map((t) => (
                    <div key={t.id} className={styles.card}>
                        <p className={styles.quote}>{t.quote}</p>
                        <div className={styles.author}>
                            <img src={t.image} alt={t.name} className={styles.avatar} />
                            <div className={styles.authorInfo}>
                                <span className={styles.name}>{t.name}</span>
                                <span className={styles.role}>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialGallery;
