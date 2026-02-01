import robokit1 from '../assets/robokit1.png';
import robokit3 from '../assets/robokit3.jpg';
import robokit5 from '../assets/robokit5.jpg';
import robokit7 from '../assets/robokit7.jpg';
import robokit9 from '../assets/robokit9.jpg';
import robokit11 from '../assets/robokit11.jpg';
import robokit13 from '../assets/robokit13.jpg';
import truckTuto from '../assets/tsawer/video tuto.mp4';

import engineeringIcon from '../assets/engineering.png';
import carIcon from '../assets/car.png';
import droneIcon from '../assets/drone.png';
import armIcon from '../assets/robotic-arm.png';
import truckIcon from '../assets/truck.png';
import racerIcon from '../assets/racer.png';
import planeIcon from '../assets/airplane.png';
import homeIcon from '../assets/home-security.png';

export const categories = [
    { id: 'all', name: 'All Projects', icon: engineeringIcon, count: 6 },
    { id: 'cars', name: 'Cars', icon: carIcon, count: 3 },
    { id: 'truck', name: 'Truck', icon: truckIcon, count: 0 },
    { id: 'racer', name: 'Racer', icon: racerIcon, count: 0 },
    { id: 'drone', name: 'Drone', icon: droneIcon, count: 1 },
    { id: 'plane', name: 'Plane', icon: planeIcon, count: 0 },
    { id: 'arm', name: 'Robotic Arm', icon: armIcon, count: 1 },
    { id: 'smart-house', name: 'Smart House', icon: homeIcon, count: 0 },
    { id: 'engineering', name: 'Engineering Projects', icon: engineeringIcon, count: 1 }
];

export const projectsByCategory = {
    cars: [
        {
            id: 'car-explorer',
            name: 'Explorer Robotic Kit',
            category: 'cars',
            image: robokit3,
            description: 'Advanced explorer vehicle with enhanced terrain capabilities',
            difficulty: 'Intermediate',
            time: '6-8 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Terrain adaptation', 'Wireless telemetry'],
            components: ['Off-road tires', 'IMU sensor'],
            skills: ['Mechanical Design', 'Telemetry']
        },
        {
            id: 'car-speedster',
            name: 'Speedster Racing Kit',
            category: 'cars',
            image: robokit5,
            description: 'High-speed line follower and racing robot',
            difficulty: 'Beginner',
            time: '3-5 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Control theory', 'High precision movement'],
            components: ['Racing motors', 'IR sensor array'],
            skills: ['PID Control', 'Agile Build']
        },
        {
            id: 'car-truck',
            name: 'Heavy Duty Truck Kit',
            category: 'cars',
            image: robokit7,
            video: truckTuto,
            description: 'Programmable transport truck for logistics simulations',
            difficulty: 'Intermediate',
            time: '8-10 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Logistics automation', 'Precision route following'],
            components: ['Torque motors', 'Load sensor'],
            skills: ['Automation', 'Route Planning']
        }
    ],
    arm: [
        {
            id: 'arm-precision',
            name: 'Precision Arm Kit',
            category: 'arm',
            image: robokit9,
            description: '4-Axis robotic arm with high precision servos',
            difficulty: 'Advanced',
            time: '10-12 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Inverse kinematics', 'Industrial automation'],
            components: ['4 x MG996R Servos', 'Gripper mechanism'],
            skills: ['Kinematics', 'Servo Control']
        }
    ],
    drone: [
        {
            id: 'drone-quad',
            name: 'Quad-Copter Builder Kit',
            category: 'drone',
            image: robokit11,
            description: 'Professional grade DIY drone kit with stabilization',
            difficulty: 'Advanced',
            time: '12-15 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Flight dynamics', 'Aerodynamics'],
            components: ['Brushless motors', 'Flight controller'],
            skills: ['Avionics', 'System Integration']
        }
    ],
    engineering: [
        {
            id: 'engineering-spider',
            name: 'Hexapod Spider Bot',
            category: 'engineering',
            image: robokit13,
            description: '12-Servo biological movement simulation robot',
            difficulty: 'Advanced',
            time: '15+ hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Biomimicry', 'Complex gait generation'],
            components: ['12 x Mini Servos', 'Arduino Mega'],
            skills: ['Biomimicry', 'Complex Motion']
        }
    ]
};

export const getAllProjects = () => {
    return Object.values(projectsByCategory).flat();
};

export const getProjectsByCategory = (categoryId) => {
    if (categoryId === 'all') {
        return getAllProjects();
    }
    return projectsByCategory[categoryId] || [];
};
