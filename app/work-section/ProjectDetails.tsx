export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    available: boolean;
}

export const devProjects = [
    {
        id: 0,
        name: "3D Animation",
        description: 
            "Developing website involves creating your website, making it one of the m...",
        technologies: ["Blender", "Keyshot", "Maya"],
        github: "https://github.com/",
        demo: "https://www.youtube.com/@frontendadvance",
        image: require("../../public/projects/hero-img.png"),
        available: true,
    },
    {
        id: 1,
        name: "Game Art",
        description: 
            "Developing website involves creating your website, making it one of the m...",
        technologies: ["Blender", "Keyshot", "Maya"],
        github: "https://github.com/",
        demo: "https://www.youtube.com/@frontendadvance",
        image: require("../../public/projects/hero-img.png"),
        available: true,
    },
    {
        id: 2,
        name: "AI Sketches",
        description: 
            "Developing website involves creating your website, making it one of the m...",
        technologies: ["Blender", "Keyshot", "Maya"],
        github: "https://github.com/",
        demo: "https://www.youtube.com/@frontendadvance",
        image: require("../../public/projects/hero-img.png"),
        available: true,
    },
    {
        id: 3,
        name: "Motion",
        description: 
            "Developing website involves creating your website, making it one of the m...",
        technologies: ["Blender", "Keyshot", "Maya"],
        github: "https://github.com/",
        demo: "https://www.youtube.com/@frontendadvance",
        image: require("../../public/projects/hero-img.png"),
        available: true,
    },
    {
        id: 4,
        name: "App Design",
        description: 
            "Developing website involves creating your website, making it one of the m...",
        technologies: ["Blender", "Keyshot", "Maya"],
        github: "https://github.com/",
        demo: "https://www.youtube.com/@frontendadvance",
        image: require("../../public/projects/hero-img.png"),
        available: true,
    },
    
];
