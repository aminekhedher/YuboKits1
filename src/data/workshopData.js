// workshopData.js - Data for Workshops page

export const workshopBenefits = [
    {
        id: 1,
        title: "Expert-Led Sessions",
        description: "Our instructors are experienced engineers and educators who know how to inspire and engage students.",
        icon: "👨‍🏫"
    },
    {
        id: 2,
        title: "All Materials Provided",
        description: "We bring everything needed: kits, tools, and 3D printers. You just provide the space.",
        icon: "📦"
    },
    {
        id: 3,
        title: "Curriculum-Aligned",
        description: "Our programs are designed to support STEM standards and classroom learning objectives.",
        icon: "📚"
    },
    {
        id: 4,
        title: "Scalable Programs",
        description: "From small groups of 10 to large assemblies of 100+, we can adapt to your needs.",
        icon: "📈"
    }
];

export const workshopTypes = [
    {
        id: "school",
        title: "School & Classroom Workshops",
        description: "Hands-on robotics sessions integrated into your school day curriculum. Perfect for science classes or STEM days.",
        duration: "1-2 hours",
        ageRange: "8-16 years",
        groupSize: "Up to 30 students",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80",
        highlights: ["NGSS Aligned", "Coding & Mechanical Engineering", "Teacher Resources Included"]
    },
    {
        id: "afterschool",
        title: "After-School Clubs",
        description: "Ongoing weekly programs where students build more complex projects over a semester.",
        duration: "1 hour / week (8-12 weeks)",
        ageRange: "10-18 years",
        groupSize: "15-20 students",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?w=500&q=80",
        highlights: ["Project-Based Learning", "Competitions", "Take-Home Kits Available"]
    },
    {
        id: "events",
        title: "Events & Libraries",
        description: "Engaging one-off workshops for libraries, community centers, birthday parties, or corporate team building.",
        duration: "2-4 hours",
        ageRange: "All ages",
        groupSize: "Flexible",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
        highlights: ["Fun & Interactive", "Quick Success Projects", "Team Building Focus"]
    }
];

export const workshopDetails = [
    {
        id: "curriculum",
        title: "Curriculum & Learning Objectives",
        content: "Our workshops cover core STEM concepts including mechanics, electronics, programming logic, and sensor integration. Students practice problem-solving, teamwork, and design thinking."
    },
    {
        id: "requirements",
        title: "Required Space & Setup",
        content: "We need tables and chairs for participants, access to power outlets, and a projector or screen for instruction. A standard classroom or meeting room setup works perfectly."
    },
    {
        id: "equipment",
        title: "Equipment & Materials",
        content: "YuboKits provides all necessary robotics kits, tools, and safety gear. We handle setup and cleanup."
    },
    {
        id: "safety",
        title: "Safety & Supervision",
        content: "Safety is our priority. All equipment is age-appropriate and well-maintained. Our instructors are background-checked and trained in classroom management and safety protocols."
    }
];

export const faqs = [
    {
        id: 1,
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 3-4 weeks in advance to ensure availability, especially for specific dates or popular times of year."
    },
    {
        id: 2,
        question: "What age groups are appropriate?",
        answer: "Our workshops are customizable for ages 6 to adult. We adjust the complexity of the projects and coding difficulty to match the group's level."
    },
    {
        id: 3,
        question: "Do you provide certificates?",
        answer: "Yes! We can provide digital or printed certificates of completion for all participants upon request."
    },
    {
        id: 4,
        question: "Can workshops be customized?",
        answer: "Absolutely. If you have a specific theme (e.g., Space, Environment) or learning goal, let us know and we can tailor the content."
    }
];
