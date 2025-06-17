"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiExpress,
    SiNestjs,
    SiAwslambda,
    SiAmazoncloudwatch,
    SiTerraform,
    SiJenkins,
    SiKubernetes,
    SiDynatrace,
    SiElasticsearch,
    SiRust,
    SiJira,
    SiGrafana,
    SiPrometheus,
    SiAmazonrds,
    SiFirebase,
    SiPuppeteer
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
    const backendTech: SkillItem[] = [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiPuppeteer, name: "Puppeteer" }
    ];

    const databases: SkillItem[] = [
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiAmazonrds, name: "Amazon RDS" },
        { icon: SiFirebase, name: "Firebase" }
    ];

    const cloudInfra: SkillItem[] = [
        { icon: FaAws, name: "AWS" },
        { icon: SiAwslambda, name: "Lambda" },
        { icon: SiAmazoncloudwatch, name: "CloudWatch" },
        { icon: SiTerraform, name: "Terraform" },
        { icon: SiKubernetes, name: "Kubernetes" }
    ];

    const devOpsTools: SkillItem[] = [
        { icon: FaDocker, name: "Docker" },
        { icon: SiJenkins, name: "Jenkins" },
        { icon: FaGitAlt, name: "Git" },
        { icon: SiJira, name: "Jira" }
    ];

    const monitoringTools: SkillItem[] = [
        { icon: SiDynatrace, name: "Dynatrace" },
        { icon: SiElasticsearch, name: "ELK Stack" },
        { icon: SiGrafana, name: "Grafana" },
        { icon: SiPrometheus, name: "Prometheus" }
    ];

    const languages: SkillItem[] = [
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiRust, name: "Rust" }
    ];



    // Helper function to render skill section with professional styling
    const renderSkillSection = (title: string, skills: SkillItem[], sectionIndex: number) => {
        const gradients = [
            'linear-gradient(135deg, #4a38c2, #8f38c2)',
            'linear-gradient(135deg, #8f38c2, #c238b0)',
            'linear-gradient(135deg, #c238b0, #b0c238)',
            'linear-gradient(135deg, #b0c238, #38c24a)',
            'linear-gradient(135deg, #38c24a, #4a38c2)',
            'linear-gradient(135deg, #4a38c2, #c238b0)'
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
                        className="w-16 h-1 rounded-full"
                        style={{ background: gradients[sectionIndex % gradients.length] }}
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
                                    className="p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all duration-300"
                                    style={{ background: `${gradients[sectionIndex % gradients.length]}15` }}
                                    whileHover={{
                                        background: gradients[sectionIndex % gradients.length],
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
        <section id="skills" className="relative py-24 px-4 lg:px-0 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
            {/* Gradient Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10" style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5" style={{ background: 'linear-gradient(135deg, #38c24a, #4a38c2)' }}></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-primary"
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
                            I specialize in <span className="gradient-text-secondary font-semibold">backend engineering</span> and <span className="gradient-text-secondary font-semibold">cloud infrastructure</span> with a focus on building scalable, high-performance systems.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 px-4 sm:px-0">
                            Here are the technologies and tools I work with to deliver robust solutions.
                        </p>
                    </motion.div>

                    {/* Gradient Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="w-24 h-1 mx-auto mt-8 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                    ></motion.div>
                </motion.div>

                <div ref={ref} className="space-y-4">
                    {renderSkillSection("Backend Technologies", backendTech, 0)}
                    {renderSkillSection("Database Systems", databases, 1)}
                    {renderSkillSection("Cloud & Infrastructure", cloudInfra, 2)}
                    {renderSkillSection("DevOps Tools", devOpsTools, 3)}
                    {renderSkillSection("Monitoring & Observability", monitoringTools, 4)}
                    {renderSkillSection("Programming Languages", languages, 5)}
                </div>
            </div>
        </section>
    );
};

export default Skills;