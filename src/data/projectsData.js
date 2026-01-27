// projectsData.js - Sample project data organized by category

export const categories = [
    { id: 'all', name: 'All Projects', icon: '/src/assets/engineering.png', count: 24 },
    { id: 'cars', name: 'Cars', icon: '/src/assets/car.png', count: 5 },
    { id: 'truck', name: 'Trucks', icon: '/src/assets/truck.png', count: 3 },
    { id: 'racer', name: 'Racers', icon: '/src/assets/racer.png', count: 4 },
    { id: 'drone', name: 'Drones', icon: '/src/assets/drone.png', count: 3 },
    { id: 'plane', name: 'Planes', icon: '/src/assets/airplane.png', count: 2 },
    { id: 'arm', name: 'Robotic Arms', icon: '/src/assets/robotic-arm.png', count: 3 },
    { id: 'house', name: 'Smart House', icon: '/src/assets/home-security.png', count: 2 },
    { id: 'engineering', name: 'Engineering', icon: '/src/assets/engineering.png', count: 2 }
];

export const projectsByCategory = {
    cars: [
        {
            id: 'car-1',
            name: 'Autonomous Line Follower',
            category: 'cars',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            description: 'Build a car that autonomously follows lines using infrared sensors',
            difficulty: 'Intermediate',
            time: '4-6 hours',
            githubUrl: 'https://github.com/yubokits/line-follower',
            pdfUrl: '/instructions/line-follower.pdf',
            learningObjectives: [
                'Sensor integration and calibration',
                'PID control algorithm basics',
                'Motor control programming',
                'Real-time decision making'
            ],
            components: ['Motor driver L298N', 'IR sensors x3', 'Arduino Uno', 'Chassis kit', 'Battery pack'],
            skills: ['Arduino Programming', 'Circuit Design', 'Sensor Calibration']
        },
        {
            id: 'car-2',
            name: 'Obstacle Avoidance Car',
            category: 'cars',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            description: 'Smart car that detects and avoids obstacles using ultrasonic sensors',
            difficulty: 'Beginner',
            time: '3-4 hours',
            githubUrl: 'https://github.com/yubokits/obstacle-car',
            pdfUrl: '/instructions/obstacle-car.pdf',
            learningObjectives: [
                'Ultrasonic sensor operation',
                'Decision logic programming',
                'Distance measurement concepts',
                'Motor control basics'
            ],
            components: ['HC-SR04 Ultrasonic', 'Motor driver', 'Arduino', 'Chassis', 'Servo motor'],
            skills: ['Basic Programming', 'Electronics', 'Problem Solving']
        },
        {
            id: 'car-3',
            name: 'Bluetooth Controlled Car',
            category: 'cars',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            description: 'Control your car wirelessly via smartphone app',
            difficulty: 'Beginner',
            time: '2-3 hours',
            githubUrl: 'https://github.com/yubokits/bt-car',
            pdfUrl: '/instructions/bt-car.pdf',
            learningObjectives: [
                'Wireless communication basics',
                'Bluetooth module integration',
                'App-hardware interaction',
                'Command parsing'
            ],
            components: ['HC-05 Bluetooth', 'Motor driver', 'Arduino', 'Chassis', 'Battery'],
            skills: ['Wireless Communication', 'Mobile Integration', 'Programming']
        }
    ],

    drone: [
        {
            id: 'drone-1',
            name: 'Mini Quadcopter',
            category: 'drone',
            image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
            description: 'Build and program a stable flying quadcopter drone',
            difficulty: 'Advanced',
            time: '8-10 hours',
            githubUrl: 'https://github.com/yubokits/quadcopter',
            pdfUrl: '/instructions/quadcopter.pdf',
            learningObjectives: [
                'Flight dynamics and stability',
                'IMU sensor fusion',
                'PID tuning for stability',
                'Radio control integration'
            ],
            components: ['Flight controller', 'Brushless motors x4', 'ESCs', 'LiPo battery', 'Frame kit'],
            skills: ['Advanced Programming', 'Physics', 'Control Systems']
        }
    ],

    arm: [
        {
            id: 'arm-1',
            name: '4-Axis Robotic Arm',
            category: 'arm',
            image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400',
            description: 'Programmable robotic arm with gripper for pick-and-place tasks',
            difficulty: 'Intermediate',
            time: '5-7 hours',
            githubUrl: 'https://github.com/yubokits/robot-arm',
            pdfUrl: '/instructions/robot-arm.pdf',
            learningObjectives: [
                'Servo motor control',
                'Inverse kinematics basics',
                'Coordinate systems',
                'Sequential programming'
            ],
            components: ['Servo motors x5', 'Arduino Mega', 'Arm frame', 'Gripper', 'Power supply'],
            skills: ['Kinematics', 'Programming', 'Mechanical Assembly']
        }
    ],

    house: [
        {
            id: 'house-1',
            name: 'Smart Home Automation',
            category: 'house',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400',
            description: 'IoT-enabled smart home with automated lights, temperature, and security',
            difficulty: 'Intermediate',
            time: '6-8 hours',
            githubUrl: 'https://github.com/yubokits/smart-home',
            pdfUrl: '/instructions/smart-home.pdf',
            learningObjectives: [
                'IoT concepts and protocols',
                'Sensor network design',
                'Home automation logic',
                'Web interface creation'
            ],
            components: ['ESP32', 'DHT22 sensor', 'Relay modules', 'PIR sensor', 'LED strips'],
            skills: ['IoT', 'Web Development', 'Networking']
        }
    ]
};

// Get all projects across categories
export const getAllProjects = () => {
    return Object.values(projectsByCategory).flat();
};

// Get projects by category
export const getProjectsByCategory = (categoryId) => {
    if (categoryId === 'all') {
        return getAllProjects();
    }
    return projectsByCategory[categoryId] || [];
};
