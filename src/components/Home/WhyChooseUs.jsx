import React from 'react';
import FlipCard from '../UI/FlipCard';
import styles from './WhyChooseUs.module.css';
import accessibleIcon from '../../assets/accessible.png';
import engineeringIcon from '../../assets/engineering.png';
import interactionIcon from '../../assets/interaction.png';
import communityIcon from '../../assets/community.png';

const WhyChooseUs = () => {
    const cardsData = [
        {
            id: 1,
            title: "Accessible robotic educational kits",
            description: "Making advanced robotics look easy through STEM educational kits, learning it while building it.",
            icon: accessibleIcon
        },
        {
            id: 2,
            title: "Built by engineers to engineers",
            description: "Carefully crafted be educators and engineers for the future minds and the upcoming generations.",
            icon: engineeringIcon
        },
        {
            id: 3,
            title: "Interchangeable parts",
            description: "Creative designs and interchangeable components exploring unlimited combinations and innovations.",
            icon: interactionIcon
        },
        {
            id: 4,
            title: "Development community",
            description: "open source codes and schematics, easy access to complex programming and 3D designing.",
            icon: communityIcon
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
                                    <img src={card.icon} alt={card.title} className={styles.cardIcon} />
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
