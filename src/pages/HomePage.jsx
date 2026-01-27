import React from 'react';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/AboutSection';
import BackedBy from '../components/Home/BackedBy';
import WhoWeAre from '../components/Home/WhoWeAre';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <AboutSection />
            <BackedBy />
            <WhoWeAre />
            <WhyChooseUs />
        </main>
    );
};

export default HomePage;
