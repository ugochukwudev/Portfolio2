"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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



    // Helper function to render skill section
    const renderSkillSection = (title: string, skills: SkillItem[]) => (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <Icon size={48} />
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
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