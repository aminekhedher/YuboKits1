import React from 'react';
import styles from './TeamGrid.module.css';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/aboutData';

const TeamGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Minds Behind Neobotic</h2>
                <div className={styles.grid}>
                    {teamMembers.map(member => (
                        <TeamMemberCard
                            key={member.id}
                            {...member}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
