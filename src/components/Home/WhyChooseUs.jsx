import React from 'react';
import FlipCard from '../UI/FlipCard';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
    const cardsData = [
        {
            id: 1,
            title: "Accessible robotic educational kits",
            description: "Making advanced robotics look easy through STEM educational kits, learning it while building it.",
            icon: "◓" // Circle for education/learning
        },
        {
            id: 2,
            title: "Built by engineers to engineers",
            description: "Carefully crafted be educators and engineers for the future minds and the upcoming generations.",
            icon: "⚙" // Gear for engineering
        },
        {
            id: 3,
            title: "Interchangeable parts",
            description: "Creative designs and interchangeable components exploring unlimited combinations and innovations.",
            icon: "↻" // Circular arrow for interchange
        },
        {
            id: 4,
            title: "Development community",
            description: "open source codes and schematics, easy access to complex programming and 3D designing.",
            icon: "⚉" // Multiple dots for community
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose YuboKits</h2>

                <div className={styles.grid}>
                    {cardsData.map((card) => (
                        <FlipCard
                            key={card.id}
                            frontContent={
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>{card.icon}</div>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <span className={styles.clickBadge}>Click me</span>
                                </div>
                            }
                            backContent={
                                <p className={styles.cardDescription}>{card.description}</p>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
