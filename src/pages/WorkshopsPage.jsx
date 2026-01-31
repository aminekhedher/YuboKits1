import React, { useEffect } from 'react';
import WorkshopHero from '../components/Workshops/WorkshopHero';
import LatestWorkshop from '../components/Workshops/LatestWorkshop';
import WorkshopBenefits from '../components/Workshops/WorkshopBenefits';
import WorkshopTypeCard from '../components/Workshops/WorkshopTypeCard';
import Accordion from '../components/Workshops/Accordion';
import WorkshopInquiryForm from '../components/Workshops/WorkshopInquiryForm';
import { workshopTypes, faqs } from '../data/workshopData';
import styles from './WorkshopsPage.module.css'; // Assuming you might create this later, but for now using inline styles

const WorkshopsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <WorkshopHero />
            <WorkshopBenefits />

            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Our Workshop Programs</h2>
                    <div className={styles.grid}>
                        {workshopTypes.map((type) => (
                            <WorkshopTypeCard key={type.id} type={type} />
                        ))}
                    </div>
                </div>
            </section>

            <LatestWorkshop />

            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            <WorkshopInquiryForm />
        </main>
    );
};

export default WorkshopsPage;
