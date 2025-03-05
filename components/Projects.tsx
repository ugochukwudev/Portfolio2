"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const projects = [
        {
            title: "Blockroll - Fintech Platform",
            role: "Software Engineer",
            description: "Contributed to building a sophisticated fintech platform as part of the engineering team at Blockroll. Led the development of key features including digital wallet management, seamless money transfers, multi-currency support, and real-time transaction tracking. Implemented robust analytics dashboard focusing on scalability and security.",
            image: "/blockroll.png",
            tags: [
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "AWS Lightsail",
                "Redux",
                "Tailwind CSS"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://blockroll.app"
            },
            type: "Professional Work"
        },
        {
            title: "Daba School - Tech Education Platform",
            role: "Software Developer",
            description: "Contributed to developing an innovative tech education platform focused on empowering individuals with practical skills. Built interactive learning experiences, student management systems, and course delivery infrastructure using modern web technologies.",
            image: "/daba.png",
            tags: [
                "Next.js",
                "React",
                "Vite",
                "Node.js",
                "Express",
                "Tailwind CSS"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://daba.school"
            },
            type: "Professional Work"
        },
        {
            title: "Ivara - UK Tech Agency Website",
            role: "Contract Developer",
            description: "Developed a modern, animated website for a UK-based tech agency specializing in web development, app creation, and digital marketing services. Implemented engaging user interactions with Lottie animations, dynamic content management through Sanity CMS, and responsive design principles to showcase the agency's professional services.",
            image: "/ivara.png",
            tags: [
                "Next.js",
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
            description: "A dynamic tech education platform and community hub focused on sharing knowledge through in-depth technical articles. Features include a modern content management system, optimized SEO, responsive design, and seamless email integration for community engagement.",
            image: "/techgix.png",
            tags: [
                "Next.js",
                "React",
                "Sanity CMS",
                "Tailwind CSS",
                "Brevo",
                "SEO Optimization"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://techgix.xyz"
            },
            type: "Personal Project"
        },
        {
            title: "Arewabooks - Hausa Language Book Platform",
            role: "Software Engineer",
            description: "Developed a comprehensive digital platform for buying, selling, and reading Hausa language books. Built both web and mobile applications with features including e-commerce functionality, digital book reader, and content management system. Implemented secure payment processing and robust user authentication.",
            image: "/arewabooks.png",
            tags: [
                "React",
                "React Native",
                "Next.js",
                "Node.js",
                "Express",
                "Redux Saga",
                "Sanity CMS",
                "Tailwind CSS"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://arewabooks.com"
            },
            type: "Professional Work"
        },
        {
            title: "Sendmail - Open Source Email API",
            description: "An open-source email API service that simplifies sending unprofessional emails. Built with Node.js and Nodemailer, this API provides a straightforward solution for processing contact forms and handling email communications. Features include easy integration, customizable email templates, and reliable delivery.",
            image: "/sendmail.png",
            tags: [
                "Node.js",
                "Nodemailer",
                "Express",
                "API Development",
                "Open Source"
            ],
            links: {
                github: "https://github.com/ugochukwudev/sendMail",
                live: "https://techxmail.onrender.com/api-docs/"
            },
            type: "Open Source"
        },
        {
            title: "Node API Logs - Express.js Logging Solution",
            role: "Creator & Maintainer",
            description: "Developed a cost-effective logging solution for Express.js applications in response to a company's need for affordable server monitoring. This open-source library enables developers to view request logs, track API performance, and monitor server activity without third-party services. Features include request body tracking, IP logging, response monitoring, and duration tracking with MongoDB integration.",
            image: "/node-api-logs.png",
            tags: [
                "Node.js",
                "Express.js",
                "TypeScript",
                "MongoDB",
                "API Development",
                "Open Source"
            ],
            links: {
                github: "https://github.com/ugochukwudev/Node-API-LOGS",
                live: "https://www.npmjs.com/package/node-api-logs"
            },
            type: "Open Source"
        },
        {
            title: "Mote - Rust CLI Tool",
            description: "A practical implementation of shell commands in Rust, demonstrating systems programming capabilities. This command-line tool replicates basic shell functionalities like 'cd', 'ls', and other script commands, serving as a hands-on exploration of Rust's systems programming features.",
            image: "/shell-script.png",
            tags: [
                "Rust",
                "Systems Programming",
                "CLI",
                "Shell Scripting"
            ],
            links: {
                github: "https://github.com/ugochukwudev",
                live: "https://github.com/ugochukwudev"
            },
            type: "Personal Project"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="projects" className="py-20 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of my recent work. These projects showcase my skills and experience in developing modern applications.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-[300px] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-500 hover:scale-105"
                                    priority={index === 0}
                                    quality={100}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                {project.role && (
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-accent-color/10 text-accent-color px-3 py-1 rounded-full text-sm font-medium">
                                            {project.role}
                                        </span>
                                        {project.type && (
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                                {project.type}
                                            </span>
                                        )}
                                    </div>
                                )}
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-700 hover:text-accent-color transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub size={18} />
                                        <span>Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-700 hover:text-accent-color transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        <span>Live</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white rounded-full px-8 py-3 hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 