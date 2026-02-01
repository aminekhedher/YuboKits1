import robokit1 from '../assets/robokit1.png';
import robokit3 from '../assets/robokit3.jpg';
import robokit5 from '../assets/robokit5.jpg';
import robokit7 from '../assets/robokit7.jpg';
import robokit9 from '../assets/robokit9.jpg';
import robokit11 from '../assets/robokit11.jpg';
import robokit13 from '../assets/robokit13.jpg';
import trashImg1 from '../assets/tsawer/zebla/zbela.jpg';
import terrainImg1 from '../assets/tsawer/toutterrain/karhbaaaa.jpg';
import terrainImg2 from '../assets/tsawer/toutterrain/touterrain3d.jpg';
import tankImg1 from '../assets/tsawer/tank/tank3d.jpg';
import sumoImg1 from '../assets/tsawer/sumo/sumo car.jpg';
import houseImg1 from '../assets/tsawer/smart house/smart house.jpg';
import radarImg1 from '../assets/tsawer/radar/radar3d.jpg';
import obstacleImg1 from '../assets/tsawer/capteur obstacl car/karhbacapteur obstacl 3d.jpg';
import motorsImg1 from '../assets/tsawer/6 motors/6 motor car.jpg';
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
    { id: 'all', name: 'All Projects', icon: engineeringIcon, count: 14 },
    { id: 'cars', name: 'Cars', icon: carIcon, count: 8 },
    { id: 'truck', name: 'Truck', icon: truckIcon, count: 0 },
    { id: 'racer', name: 'Racer', icon: racerIcon, count: 0 },
    { id: 'drone', name: 'Drone', icon: droneIcon, count: 1 },
    { id: 'plane', name: 'Plane', icon: planeIcon, count: 0 },
    { id: 'arm', name: 'Robotic Arm', icon: armIcon, count: 1 },
    { id: 'smart-house', name: 'Smart House', icon: homeIcon, count: 1 },
    { id: 'engineering', name: 'Engineering Projects', icon: engineeringIcon, count: 3 }
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
        },
        {
            id: 'car-terrain',
            name: 'All-Terrain Robot',
            category: 'cars',
            image: terrainImg2,
            description: 'Powerful 4WD robot designed to conquer rough outdoors and uneven surfaces',
            difficulty: 'Intermediate',
            time: '6-8 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Traction control', 'High-torque motor management'],
            components: ['4 x High-torque motors', 'Large treads', 'L298N driver'],
            skills: ['Mechanical Design', 'Motor Control']
        },
        {
            id: 'car-tank',
            name: 'Smart TankBot',
            category: 'cars',
            image: tankImg1,
            description: 'Advanced crawler robot with heavy-duty tracks for extreme terrain navigation',
            difficulty: 'Intermediate',
            time: '7-9 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Tracked locomotion physics', 'Obstacle clearance'],
            components: ['Dual motor tracks', 'Steel chassis', 'ESP32 controller'],
            skills: ['Mechanical Engineering', 'Advanced Robotics']
        },
        {
            id: 'car-sumo',
            name: 'Sumo Battle Bot',
            category: 'cars',
            image: sumoImg1,
            description: 'Highly aggressive and compact robot designed for Sumo wrestling competitions',
            difficulty: 'Intermediate',
            time: '5-7 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Proximity detection', 'Push-force physics'],
            components: ['High torque metal gear motors', 'IR edge sensors', 'Heavy weight plates'],
            skills: ['Competitive Robotics', 'Sensor Logic']
        },
        {
            id: 'car-obstacle',
            name: 'Obstacle Avoidance Car',
            category: 'cars',
            image: obstacleImg1,
            description: 'Autonomous vehicle that navigates complex environments by detecting and avoiding obstacles in real-time',
            difficulty: 'Beginner',
            time: '4-5 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Proximity sensing', 'Autonomous decision making'],
            components: ['Ultrasonic sensor', 'L298N driver', 'Smart car chassis'],
            skills: ['Coding', 'Electronics']
        },
        {
            id: 'car-6motors',
            name: '6-Wheel Drive Explorer',
            category: 'cars',
            image: motorsImg1,
            description: 'Advanced 6WD robotic chassis designed for maximum traction and performance on difficult landscapes',
            difficulty: 'Advanced',
            time: '8-10 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Multi-motor synchronization', 'Independent suspension physics'],
            components: ['6 x DC High Torque Motors', 'Reinforced chassis', 'High-current motor driver'],
            skills: ['Mechanical Engineering', 'Power Systems']
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
        },
        {
            id: 'engineering-trash',
            name: 'Electric Trash',
            category: 'engineering',
            image: trashImg1,
            description: 'Automatic smart trash bin with motion sensing capabilities',
            difficulty: 'Beginner',
            time: '2-4 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Motion sensing', 'Servo control mechanics'],
            components: ['Ultrasonic sensor', 'Micro servo', 'Arduino Uno'],
            skills: ['Electronics', 'Basic Coding']
        },
        {
            id: 'engineering-radar',
            name: 'Ultrasonic Radar System',
            category: 'engineering',
            image: radarImg1,
            description: 'Advanced scanning system that maps obstacles in a 180-degree field of view',
            difficulty: 'Intermediate',
            time: '4-6 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['Object mapping', 'Processing software integration'],
            components: ['Ultrasonic sensor', 'TowerPro Servo', 'Base turret system'],
            skills: ['Data Visualization', 'Signal Processing']
        }
    ],
    'smart-house': [
        {
            id: 'house-smart',
            name: 'Advanced Smart House',
            category: 'smart-house',
            image: houseImg1,
            description: 'Integrated IoT home automation system with multiple sensors and controls',
            difficulty: 'Intermediate',
            time: '10-15 hours',
            githubUrl: '#',
            pdfUrl: '#',
            learningObjectives: ['IoT integration', 'Smart energy management'],
            components: ['Light sensors', 'Temperature control', 'RFID lock system'],
            skills: ['Home Automation', 'Network Integration']
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
