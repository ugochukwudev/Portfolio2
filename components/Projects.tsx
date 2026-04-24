"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });

    const projects = [
        {
            title: "Blockroll - Fintech Platform",
            role: "Lead Frontend Engineer",
            description: "Led frontend development for a sophisticated fintech platform, creating intuitive user interfaces for digital wallet management, seamless money transfers, and real-time transaction tracking. Implemented responsive design patterns and optimized performance for financial dashboard components.",
            image: "/blockroll.png",
            tags: [
                "Next.js",
                "TypeScript",
                "React",
                "Redux",
                "Tailwind CSS",
                "Framer Motion",
                "Chart.js",
                "Responsive Design"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://blockroll.app"
            },
            type: "Professional Work"
        },
        {
            title: "Daba School - Tech Education Platform",
            role: "Frontend Developer",
            description: "Developed an innovative tech education platform with focus on interactive learning experiences. Built responsive user interfaces, student dashboards, and course delivery systems using modern React patterns and component-based architecture.",
            image: "/daba.png",
            tags: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Responsive Design"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://daba.school"
            },
            type: "Professional Work"
        },
        {
            title: "Ivara - UK Tech Agency Website",
            role: "Frontend Developer",
            description: "Crafted a modern, animated website for a UK-based tech agency with engaging user interactions using Lottie animations, responsive design principles, and seamless content management integration. Focused on performance optimization and user experience.",
            image: "/ivara.png",
            tags: [
                "Next.js",
                "React",
                "Tailwind CSS",
                "Lottie Animations",
                "Sanity CMS",
                "Responsive Design",
                "SEO Optimization"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://ivara.co.uk"
            },
            type: "Contract Work"
        },
        {
            title: "Techgix - Tech Blog & Community",
            description: "Built a dynamic tech education platform and community hub with modern frontend architecture. Features include responsive design, optimized performance, and seamless user experience with focus on content presentation and community engagement.",
            image: "/techgix.png",
            tags: [
                "Next.js",
                "React",
                "Tailwind CSS",
                "Sanity CMS",
                "TypeScript",
                "SEO Optimization"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://techgix.ng"
            },
            type: "Personal Project"
        },
        {
            title: "Arewabooks - Digital Book Platform",
            role: "Frontend Lead",
            description: "Developed comprehensive frontend for a digital platform for Hausa language books. Built responsive web and mobile interfaces with e-commerce functionality, digital book reader, and content management integration using React ecosystem.",
            image: "/arewabooks.png",
            tags: [
                "React",
                "React Native",
                "Next.js",
                "Redux Saga",
                "Tailwind CSS",
                "Responsive Design",
                "Mobile Development"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://arewabooks.com"
            },
            type: "Professional Work"
        },
        {
            title: "Sendmail - Email API Service",
            description: "Created a clean, intuitive interface for an open-source email API service. Built responsive documentation site and admin dashboard with focus on developer experience and ease of integration.",
            image: "/sendmail.png",
            tags: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "API Documentation",
                "Responsive Design"
            ],
            links: {
                github: "https://github.com/ugochukwudev/sendMail",
                live: "https://techxmail.onrender.com/api-docs/"
            },
            type: "Open Source"
        },
        {
            title: "Node API Logs - Developer Dashboard",
            role: "Frontend Creator",
            description: "Designed and built an intuitive dashboard interface for Express.js logging solution. Created responsive data visualization components for monitoring API performance, request tracking, and server activity with focus on developer experience.",
            image: "/node-api-logs.png",
            tags: [
                "React",
                "TypeScript",
                "Chart.js",
                "Tailwind CSS",
                "Data Visualization",
                "Dashboard Design"
            ],
            links: {
                github: "https://github.com/ugochukwudev/Node-API-LOGS",
                live: "https://www.npmjs.com/package/node-api-logs"
            },
            type: "Open Source"
        },
        {
            title: "Interactive Portfolio Showcase",
            description: "A modern, responsive portfolio website showcasing frontend development skills with smooth animations, interactive elements, and optimized performance. Built with focus on user experience and visual appeal.",
            image: "/shell-script.png",
            tags: [
                "Next.js",
                "React",
                "TypeScript",
                "Framer Motion",
                "Tailwind CSS",
                "Responsive Design"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://github.com/ugochukwudev"
            },
            type: "Personal Project"
        }
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="projects" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-32 right-20 w-40 h-40 rounded-full" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full" style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full" style={{ background: 'linear-gradient(135deg, #38c24a, #b0c238)' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A curated selection of my recent work showcasing <span className="gradient-text-secondary font-semibold">innovative frontend solutions</span> and expertise in creating engaging, high-performance web experiences.
                    </motion.p>
                    <div className="w-32 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group glass-effect rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Project Image with Gradient Overlay */}
                            <div className="relative h-48 sm:h-56 lg:h-[320px] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-700 group-hover:scale-110"
                                    priority={index === 0}
                                    quality={100}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a38c2, #8f38c2' : index % 3 === 1 ? '#c238b0, #b0c238' : '#38c24a, #b0c238'})` }}>
                                </div>

                                {/* Project Type Badge */}
                                {project.type && (
                                    <div className="absolute top-4 right-4">
                                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md"
                                            style={{ background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a38c2, #8f38c2' : index % 3 === 1 ? '#c238b0, #b0c238' : '#38c24a, #b0c238'})` }}>
                                            {project.type}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:gradient-text-primary transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    {project.role && (
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                                                style={{ background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a38c2, #8f38c2' : index % 3 === 1 ? '#c238b0, #b0c238' : '#38c24a, #b0c238'})` }}>
                                                {project.role}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                                    {project.tags.map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-gray-700 text-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <motion.a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 w-full sm:w-auto"
                                        style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub size={18} />
                                        <span>Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:text-white w-full sm:w-auto"
                                        style={{
                                            borderColor: '#c238b0',
                                            color: '#c238b0'
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            background: 'linear-gradient(135deg, #c238b0, #b0c238)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Professional CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold gradient-text-secondary mb-4">
                            Interested in More?
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Explore my complete portfolio on GitHub to see more projects, contributions, and frontend experiments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://github.com/ugochukwudev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white shadow-lg transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub size={20} />
                                <span>View All Projects</span>
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:text-white"
                                style={{
                                    borderColor: '#c238b0',
                                    color: '#c238b0'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    background: 'linear-gradient(135deg, #c238b0, #b0c238)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{`Let's Collaborate`}</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;