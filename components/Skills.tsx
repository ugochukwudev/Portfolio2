"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
    FaAws, FaDocker, FaGitAlt
} from "react-icons/fa";
import {
    SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs,
    SiExpress, SiTailwindcss, SiFirebase, SiRedux,
    SiNestjs, SiAmazoncloudwatch, SiTerraform, SiJenkins,
    SiKubernetes, SiDynatrace, SiElasticsearch, SiRust, SiJira,
    SiAwslambda, SiGrafana, SiPrometheus, SiAmazonrds
} from "react-icons/si";

// Define skill item type
interface SkillItem {
    icon: React.ReactNode;
    name: string;
}

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    // Organize skills by category for better presentation
    const backendTech: SkillItem[] = [
        { icon: <FaNodeJs size={48} />, name: "Node.js" },
        { icon: <SiExpress size={48} />, name: "Express" },
        { icon: <SiNestjs size={48} />, name: "NestJS" },
        { icon: <SiRust size={48} />, name: "Rust" }
    ];

    const databases: SkillItem[] = [
        { icon: <SiMongodb size={48} />, name: "MongoDB" },
        { icon: <SiPostgresql size={48} />, name: "PostgreSQL" },
        { icon: <SiAmazonrds size={48} />, name: "Amazon RDS" },
        { icon: <SiFirebase size={48} />, name: "Firebase" }
    ];

    const cloudInfra: SkillItem[] = [
        { icon: <FaAws size={48} />, name: "AWS" },
        { icon: <SiAwslambda size={48} />, name: "Lambda" },
        { icon: <SiAmazoncloudwatch size={48} />, name: "CloudWatch" },
        { icon: <SiTerraform size={48} />, name: "Terraform" },
        { icon: <SiKubernetes size={48} />, name: "Kubernetes" }
    ];

    const devOpsTools: SkillItem[] = [
        { icon: <FaDocker size={48} />, name: "Docker" },
        { icon: <SiJenkins size={48} />, name: "Jenkins" },
        { icon: <FaGitAlt size={48} />, name: "Git" },
        { icon: <SiJira size={48} />, name: "Jira" }
    ];

    const monitoringTools: SkillItem[] = [
        { icon: <SiDynatrace size={48} />, name: "Dynatrace" },
        { icon: <SiElasticsearch size={48} />, name: "ELK Stack" },
        { icon: <SiGrafana size={48} />, name: "Grafana" },
        { icon: <SiPrometheus size={48} />, name: "Prometheus" }
    ];

    const languages: SkillItem[] = [
        { icon: <FaJs size={48} />, name: "JavaScript" },
        { icon: <SiTypescript size={48} />, name: "TypeScript" },
        { icon: <SiRust size={48} />, name: "Rust" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Helper function to render skill section
    const renderSkillSection = (title: string, skills: SkillItem[]) => (
        <div>
            <motion.h3
                className="text-2xl font-bold mb-6 pl-4 border-l-4 border-accent-color"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h3>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16"
            >
                {skills.map((skill: SkillItem, index: number) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="text-accent-color mb-3">{skill.icon}</div>
                        <p className="font-medium">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="skills" className="py-20 px-4 lg:px-0 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        I specialize in backend engineering and cloud infrastructure with a focus on building scalable,
                        high-performance systems. Here are the technologies I work with.
                    </p>
                </motion.div>

                <div ref={ref}>
                    {renderSkillSection("Backend Technologies", backendTech)}
                    {renderSkillSection("Database Systems", databases)}
                    {renderSkillSection("Cloud & Infrastructure", cloudInfra)}
                    {renderSkillSection("DevOps Tools", devOpsTools)}
                    {renderSkillSection("Monitoring & Observability", monitoringTools)}
                    {renderSkillSection("Programming Languages", languages)}
                </div>
            </div>
        </section>
    );
};

export default Skills; 