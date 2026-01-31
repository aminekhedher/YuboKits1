import React, { useEffect } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactCard from '../components/Contact/ContactCard';
import SimpleContactForm from '../components/Contact/SimpleContactForm';
import SocialLinks from '../components/Contact/SocialLinks';
import { contactMethods } from '../data/contactData';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ backgroundColor: '#fff' }}>
            <ContactHero />

            <section style={{ padding: '5rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {contactMethods.map(method => (
                        <ContactCard
                            key={method.id}
                            title={method.title}
                            email={method.email}
                            description={method.description}
                        />
                    ))}
                </div>
            </section>

            <SimpleContactForm />

            <SocialLinks />
        </main>
    );
};

export default ContactPage;
