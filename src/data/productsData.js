import robokit1 from '../assets/robokit1.png';
import robokit2 from '../assets/robokit2.png';
import robokit3 from '../assets/robokit3.jpg';
import robokit4 from '../assets/robokit4.png';
import robokit5 from '../assets/robokit5.jpg';
import robokit6 from '../assets/robokit6.png';
import robokit7 from '../assets/robokit7.jpg';
import robokit8 from '../assets/robokit8.png';
import robokit9 from '../assets/robokit9.jpg';
import robokit10 from '../assets/robokit10.png';
import robokit11 from '../assets/robokit11.jpg';
import robokit12 from '../assets/robokit12.png';
import robokit13 from '../assets/robokit13.jpg';
import robotCarVideo from '../assets/tsawer/ROBOT CAR.mp4';
import armElec from '../assets/tsawer/robot arm elect.jpg';
import droneVideo from '../assets/tsawer/final-assem.mp4';
import trashImg1 from '../assets/tsawer/zebla/zbela.jpg';
import trashImg2 from '../assets/tsawer/zebla/zebla elec (2).jpg';
import terrainImg1 from '../assets/tsawer/toutterrain/karhbaaaa.jpg';
import terrainImg2 from '../assets/tsawer/toutterrain/touterrain3d.jpg';
import tankImg1 from '../assets/tsawer/tank/tank3d.jpg';
import tankImg2 from '../assets/tsawer/tank/krihba.jpg';
import sumoImg1 from '../assets/tsawer/sumo/sumo car.jpg';
import sumoImg2 from '../assets/tsawer/sumo/toutterrain elect.jpg';
import houseImg1 from '../assets/tsawer/smart house/smart house.jpg';
import houseImg2 from '../assets/tsawer/smart house/smart house elect.jpg';
import radarImg1 from '../assets/tsawer/radar/radar3d.jpg';
import radarImg2 from '../assets/tsawer/radar/radar.jpg';
import obstacleImg1 from '../assets/tsawer/capteur obstacl car/karhbacapteur obstacl 3d.jpg';
import obstacleImg2 from '../assets/tsawer/capteur obstacl car/capteur obs cap.jpg';
import motorsImg1 from '../assets/tsawer/6 motors/6 motor car.jpg';
import motorsImg2 from '../assets/tsawer/6 motors/karhbaaar.jpg';

export const products = [
    {
        id: 2,
        name: "Explorer Robotic Kit",
        category: "Cars",
        price: "$159",
        description: "Advanced explorer vehicle with enhanced terrain capabilities",
        fullDescription: "Take your robotics journey further with the Explorer Kit. Designed for rougher terrains and more complex navigation tasks.",
        images: [robokit3, robokit4],
        features: ["Off-road tires", "Enhanced suspension", "GPS module support", "Long-range radio"],
        specs: {
            "Age Range": "12-18 years",
            "Difficulty": "Intermediate",
            "Build Time": "6-8 hours",
            "Programming": "C++ & Python",
            "Sensors": "IMU, GPS ready"
        }
    },
    {
        id: 3,
        name: "Speedster Racing Kit",
        category: "Cars",
        price: "$139",
        description: "High-speed line follower and racing robot",
        fullDescription: "Focus on speed and precision. This kit is perfect for students interested in control theory and fast-paced robotics competitions.",
        images: [robokit5, robokit6],
        features: ["High-speed motors", "Line tracking sensors", "Lightweight chassis", "Tuning software"],
        specs: {
            "Age Range": "10-16 years",
            "Difficulty": "Beginner",
            "Build Time": "3-5 hours",
            "Programming": "Arduino C",
            "Sensors": "5-channel IR line tracker"
        }
    },
    {
        id: 4,
        name: "Heavy Duty Truck Kit",
        category: "Cars",
        price: "$179",
        description: "Programmable transport truck for logistics simulations",
        fullDescription: "Learn about automation in logistics. This truck can carry small loads and follow precise delivery routes.",
        images: [robokit7, robokit8, robotCarVideo],
        features: ["High torque motors", "Cargo bed", "Working lights", "Bluetooth control"],
        specs: {
            "Age Range": "12+ years",
            "Difficulty": "Intermediate",
            "Build Time": "8-10 hours",
            "Programming": "Python",
            "Sensors": "Load sensors, IR"
        }
    },
    {
        id: 5,
        name: "Precision Arm Kit",
        category: "Robotic Arm",
        price: "$199",
        description: "4-Axis robotic arm with high precision servos",
        fullDescription: "Explore industrial automation. This arm can pick and place objects with millimeter precision.",
        images: [robokit9, robokit10, armElec],
        features: ["4-Axis movement", "Exchangeable grippers", "Inverse kinematics support", "Memory play feature"],
        specs: {
            "Age Range": "14+ years",
            "Difficulty": "Advanced",
            "Build Time": "10-12 hours",
            "Programming": "C++ / ROS ready",
            "Payload": "200g"
        }
    },
    {
        id: 6,
        name: "Quad-Copter Builder Kit",
        category: "Drone",
        price: "$249",
        description: "Professional grade DIY drone kit with stabilization",
        fullDescription: "Learn the physics of flight. Build your own quad-copter from scratch and master flight dynamics.",
        images: [robokit11, robokit12, droneVideo],
        features: ["Flight controller", "Brushless motors", "Camera mount", "Telemetry module"],
        specs: {
            "Age Range": "16+ years",
            "Difficulty": "Advanced",
            "Build Time": "12-15 hours",
            "Programming": "Betaflight / Python",
            "Flight Time": "15-20 mins"
        }
    },
    {
        id: 7,
        name: "Hexapod Spider Bot",
        category: "Engineering Projects",
        price: "$229",
        description: "12-Servo biological movement simulation robot",
        fullDescription: "The ultimate challenge in walking robotics. This hexapod simulates realistic spider movements and terrain adaptation.",
        images: [robokit13],
        features: ["12 Servo motors", "Organic movement patterns", "Obstacle avoidance", "Remote APP control"],
        specs: {
            "Age Range": "14+ years",
            "Difficulty": "Advanced",
            "Build Time": "15+ hours",
            "Programming": "C++ / Python",
            "Movement": "6-legged gait"
        }
    },
    {
        id: 8,
        name: "Electric Trash",
        category: "Engineering Projects",
        price: "$89",
        description: "Automatic smart trash bin with motion sensing capabilities",
        fullDescription: "Build your own smart home appliance. This electric trash bin uses ultrasonic sensors to detect proximity and automatically opens its lid using a precision servo motor.",
        images: [trashImg1, trashImg2],
        features: ["Motion detection", "Automatic lid", "Internal LED indicator", "Energy efficient"],
        specs: {
            "Age Range": "8+ years",
            "Difficulty": "Beginner",
            "Build Time": "2-4 hours",
            "Programming": "Block-based",
            "Sensors": "Ultrasonic"
        }
    },
    {
        id: 9,
        name: "All-Terrain Robot",
        category: "Cars",
        price: "$169",
        description: "Powerful 4WD robot designed to conquer rough outdoors and uneven surfaces",
        fullDescription: "Master the outdoors with the All-Terrain Robot. This kit features high-torque motors and heavy-duty treads, making it capable of climbing steep inclines and navigating rocky terrain with ease.",
        images: [terrainImg2, terrainImg1],
        features: ["4-Wheel Drive", "High-grip treads", "Shock absorption", "Long-range control"],
        specs: {
            "Age Range": "12+ years",
            "Difficulty": "Intermediate",
            "Build Time": "6-8 hours",
            "Programming": "C++ / Python",
            "Motors": "4 x 12V High Torque"
        }
    },
    {
        id: 10,
        name: "Smart TankBot",
        category: "Cars",
        price: "$189",
        description: "Advanced crawler robot with heavy-duty tracks for extreme terrain navigation",
        fullDescription: "The Smart TankBot is designed for serious explorers. Featuring a robust tracked drive system and a high-durability chassis, it can overcome obstacles and traverse surfaces where wheeled robots struggle.",
        images: [tankImg1, tankImg2],
        features: ["Dual-track drive", "All-metal chassis option", "Heavy-duty suspension", "FPV Camera ready"],
        specs: {
            "Age Range": "13+ years",
            "Difficulty": "Intermediate",
            "Build Time": "7-9 hours",
            "Programming": "C++ / Python",
            "Drive System": "Continuous Tracks"
        }
    },
    {
        id: 11,
        name: "Sumo Battle Bot",
        category: "Cars",
        price: "$149",
        description: "Highly aggressive and compact robot designed for Sumo wrestling competitions",
        fullDescription: "Built for dominance in the arena. The Sumo Battle Bot is a low-profile, high-traction machine engineered to push opponents out of the ring. Master the tactics of competitive robotics with this tournament-ready kit.",
        images: [sumoImg1, sumoImg2],
        features: ["Ultra-high torque motors", "Precision edge detection", "Weighted chassis for traction", "Bluetooth fighting mode"],
        specs: {
            "Age Range": "10+ years",
            "Difficulty": "Intermediate",
            "Build Time": "5-7 hours",
            "Programming": "Arduino / Custom App",
            "Sensors": "IR Edge & Ultrasonic Proximity"
        }
    },
    {
        id: 12,
        name: "Advanced Smart House Kit",
        category: "Smart House",
        price: "$219",
        description: "Integrated IoT home automation system with multiple sensors and controls",
        fullDescription: "Step into the world of IoT. The Advanced Smart House Kit allows you to build a fully automated miniature home. Control lighting, monitor temperature, and secure the premises using RFID technology. A perfect deep-dive into modern smart home engineering.",
        images: [houseImg1, houseImg2],
        features: ["Multi-sensor integration", "RFID security system", "Automated lighting", "Web dashboard ready"],
        specs: {
            "Age Range": "14+ years",
            "Difficulty": "Intermediate",
            "Build Time": "10-15 hours",
            "Programming": "C++ / Python / Node-RED",
            "Sensors": "Temp, Light, Proximity, RFID"
        }
    },
    {
        id: 13,
        name: "Ultrasonic Radar Kit",
        category: "Engineering Projects",
        price: "$99",
        description: "Advanced scanning system that maps obstacles in a 180-degree field of view",
        fullDescription: "Master the technology used in autonomous vehicles and air traffic control. This kit uses ultrasonic waves to detect objects and visualizes them on your computer screen using Processing. A fascinating project for anyone interested in sensor tech and software visualization.",
        images: [radarImg1, radarImg2],
        features: ["180° sweep rotation", "Real-time visual mapping", "Compact desktop design", "Adjustable detection range"],
        specs: {
            "Age Range": "12+ years",
            "Difficulty": "Intermediate",
            "Build Time": "4-6 hours",
            "Programming": "Arduino / Processing",
            "Sensors": "HC-SR04 Ultrasonic"
        }
    },
    {
        id: 14,
        name: "Obstacle Avoidance Car",
        category: "Cars",
        price: "$129",
        description: "Autonomous vehicle that navigates complex environments by detecting and avoiding obstacles in real-time",
        fullDescription: "The perfect entry point into autonomous vehicles. This kit combines mechanical assembly with sensor-driven logic. Watch your creation navigate through a maze of obstacles using ultrasonic 'eyes' to see its surroundings. It's a foundational project for understanding robotics intelligence.",
        images: [obstacleImg1, obstacleImg2],
        features: ["Smart obstacle detection", "Adjustable sensitivity", "Compact 2WD design", "Extendable sensor mount"],
        specs: {
            "Age Range": "8+ years",
            "Difficulty": "Beginner",
            "Build Time": "4-5 hours",
            "Programming": "C++ / Block-based",
            "Sensors": "Ultrasonic HC-SR04"
        }
    },
    {
        id: 15,
        name: "6-Wheel Drive Explorer",
        category: "Cars",
        price: "$199",
        description: "Advanced 6WD robotic chassis designed for maximum traction and performance on difficult landscapes",
        fullDescription: "Push the boundaries of off-road robotics. The 6-Wheel Drive Explorer is our most robust mobile platform, featuring six independent high-torque motors. This kit is perfect for advanced students looking to master complex motor synchronization and power management in heavy-duty robotic systems.",
        images: [motorsImg1, motorsImg2],
        features: ["6-Wheel independent drive", "Enhanced load capacity", "Rugged all-terrain tires", "Professional grade driver boards"],
        specs: {
            "Age Range": "14+ years",
            "Difficulty": "Advanced",
            "Build Time": "8-10 hours",
            "Programming": "C++ / ROS ready",
            "Motors": "6 x 12V 100RPM"
        }
    }
];
