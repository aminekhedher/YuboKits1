
import mechanicsIcon from '../assets/mechanics.png';
import worldIcon from '../assets/world.png';
import lightIcon from '../assets/light.png';
import communityIcon from '../assets/community.png';
import ceoPic from '../assets/CEO.png';
import iyedPic from '../assets/iyed.png';
import aminePic from '../assets/amine.png';

export const storyMilestones = [
    {
        id: 1,
        year: "June 2023",
        title: "Student For Change Laureate",
        description: "Incubation program founded by the US embassy where we went into intensive 7 months workshops reveling the world of entrepreneurship and innovation ."
    },
    {
        id: 2,
        year: "November 2023",
        title: "GFI university incubation",
        description: "Incubation with GFI university Polytechnique private engineering school developing our solutions and connecting with educator,innovators and robotic students."
    },
    {
        id: 3,
        year: "Present",
        title: "What's up",
        description: "Currently innovating more solutions and undergoing critical development process."
    },
    {
        id: 4,
        year: "Future",
        title: "Our next",
        description: "Aiming to import our needed components and machines for local manufacturing."
    },

];

export const companyValues = [
    {
        id: 1,
        title: "Hands-On Learning",
        description: "We believe true understanding comes from building, breaking, and fixing. Learning is an active, tactile process.",
        icon: mechanicsIcon
    },
    {
        id: 2,
        title: "Accessibility & Inclusion",
        description: "Technology should be for everyone. We design our kits and curriculum to be approachable for all skill levels and backgrounds.",
        icon: worldIcon
    },
    {
        id: 3,
        title: "Innovation & Creativity",
        description: "We don't just follow instructions; we encourage students to remix, mod, and invent their own solutions.",
        icon: lightIcon
    },
    {
        id: 4,
        title: "Community First",
        description: "Education happens best in community. We foster collaboration between students, educators, and makers.",
        icon: communityIcon
    }
];

export const teamMembers = [
    {
        id: 1,
        name: "Ayoub Saoud",
        role: "Founder & CEO",
        image: ceoPic,
        bio: "Electromechanical engineer.",
        funFact: "The first Startup CEO incubated in Polytechnique Sousse",
        linkedin: ""
    },
    {
        id: 2,
        name: "Iyed Amara",
        role: "CTO",
        image: iyedPic,
        bio: "Electromechanical engineer.",
        funFact: "Always Sleepy.",
        linkedin: "#"
    },
    {
        id: 3,
        name: "Amine Kheder",
        role: "IT",
        image: aminePic,
        bio: "Software Engineering student.",
        funFact: "The first intern in YuboKits back then.",
        linkedin: "#"
    }
];

export const impactStats = [
    { id: 1, label: "Students Reached", value: "2000+" },
    { id: 2, label: "Workshops Conducted", value: "10+" },
    { id: 3, label: "Schools Partnered", value: "3" },
    { id: 4, label: "Countries", value: "1" }
];

export const partners = [
    { id: 1, name: "TechHigh", logo: "Create with Code" },
    { id: 2, name: "FutureStem", logo: "Future Builders" },
    { id: 3, name: "Global Edu", logo: "Global Edu" },
    { id: 4, name: "Innovate Lab", logo: "Innovate Lab" },
];
