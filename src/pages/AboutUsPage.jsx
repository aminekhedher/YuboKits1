import React, { useEffect } from 'react';
import AboutHero from '../components/AboutUs/AboutHero';
import StoryTimeline from '../components/AboutUs/StoryTimeline';
import Methodology from '../components/AboutUs/Methodology';
import MissionValues from '../components/AboutUs/MissionValues';
import TeamGrid from '../components/AboutUs/TeamGrid';
import ImpactStats from '../components/AboutUs/ImpactStats';
import AboutCTA from '../components/AboutUs/AboutCTA';

// Simple page styling mostly handled by global styles and component-level CSS
const AboutUsPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <AboutHero />
            <StoryTimeline />
            <Methodology />
            <MissionValues />
            <ImpactStats />
            <TeamGrid />
            <AboutCTA />
        </main>
    );
};

export default AboutUsPage;
