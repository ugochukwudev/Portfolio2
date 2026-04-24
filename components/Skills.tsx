"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaReact, FaJs, FaGitAlt, FaNodeJs, FaAws, FaGoogle, FaDocker, FaDatabase } from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiWebpack,
    SiRedux,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiJest,
    SiGraphql,
    SiRailway,
    SiRedis,
    SiSocketdotio
} from "react-icons/si";

// Define skill item type
interface SkillItem {
    icon: React.ComponentType<{ size?: number }>;
    name: string;
}

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
        const updateIconSize = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 640) {
                    setIconSize(28);
                } else if (window.innerWidth < 1024) {
                    setIconSize(32);
                } else {
                    setIconSize(40);
                }
            }
        };

        updateIconSize();
        window.addEventListener('resize', updateIconSize);
        return () => window.removeEventListener('resize', updateIconSize);
    }, []);

    // Organize skills by category for better presentation
    const languages: SkillItem[] = [
        { icon: FaJs, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" }
    ];

    const frontend: SkillItem[] = [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiRedux, name: "Redux" }
    ];

    const backend: SkillItem[] = [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiSocketdotio, name: "Socket.io" }
    ];

    const databases: SkillItem[] = [
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiRedis, name: "Redis" },
        { icon: FaDatabase, name: "SQL" }
    ];

    const apiTools: SkillItem[] = [
        { icon: SiGraphql, name: "GraphQL" },
        { icon: FaJs, name: "REST APIs" }
    ];

    const devTools: SkillItem[] = [
        { icon: FaGitAlt, name: "Git" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: SiJest, name: "Jest" },
        { icon: FaDocker, name: "Docker" }
    ];

    const cloud: SkillItem[] = [
        { icon: FaAws, name: "AWS" },
        { icon: FaGoogle, name: "Google Cloud" },
        { icon: SiRailway, name: "Railway" }
    ];

    // Helper function to render skill section with professional styling
    const renderSkillSection = (title: string, skills: SkillItem[], sectionIndex: number) => {
        const gradients = [
            'from-blue-600 to-indigo-600',
            'from-indigo-600 to-blue-700',
            'from-blue-700 to-slate-600',
            'from-slate-600 to-gray-600',
            'from-gray-600 to-blue-600',
            'from-blue-600 to-indigo-600',
            'from-indigo-600 to-blue-700'
        ];

        return (
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.2 + 0.3 }}
                    className="mb-8"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text-secondary">{title}</h3>
                    <div
                        className={`w-16 h-1 rounded-full bg-gradient-to-r ${gradients[sectionIndex % gradients.length]}`}
                    ></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group glass-effect p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: sectionIndex * 0.2 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                            >
                                <motion.div
                                    className={`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all duration-300 bg-gradient-to-br ${gradients[sectionIndex % gradients.length]} bg-opacity-15`}
                                    whileHover={{
                                        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon
                                            size={iconSize}
                                        />
                                    </motion.div>
                                </motion.div>

                                <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:gradient-text-secondary transition-all duration-300 text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="relative py-24 px-4 lg:px-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Gradient Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-blue-600 to-indigo-600"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 bg-gradient-to-br from-indigo-600 to-blue-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5 bg-gradient-to-br from-slate-600 to-gray-600"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Technical Skills
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
                            I'm a <span className="gradient-text-secondary font-semibold">full-stack web developer</span> with expertise across the entire development stack, from frontend user interfaces to backend systems and cloud deployment.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 px-4 sm:px-0">
                            Here are the technologies I use to build complete, scalable web applications.
                        </p>
                    </motion.div>

                    {/* Gradient Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="w-24 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    ></motion.div>
                </motion.div>

                <div ref={ref} className="space-y-4">
                    {renderSkillSection("Programming Languages", languages, 0)}
                    {renderSkillSection("Frontend Development", frontend, 1)}
                    {renderSkillSection("Backend Development", backend, 2)}
                    {renderSkillSection("Databases", databases, 3)}
                    {renderSkillSection("APIs & Integration", apiTools, 4)}
                    {renderSkillSection("Development Tools", devTools, 5)}
                    {renderSkillSection("Cloud & Deployment", cloud, 6)}
                </div>
            </div>
        </section>
    );
};

export default Skills;