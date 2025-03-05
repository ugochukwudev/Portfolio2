"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaServer, FaCloud, FaDatabase, FaSitemap } from "react-icons/fa";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const skills = [
        { icon: <FaServer size={24} />, title: "Backend Engineering", desc: "Building robust, scalable server-side applications and APIs with high performance" },
        { icon: <FaCloud size={24} />, title: "Cloud Engineering", desc: "Designing and implementing cloud-native solutions with focus on scalability and reliability" },
        { icon: <FaDatabase size={24} />, title: "Database Design", desc: "Architecting efficient database schemas and optimizing for performance and scale" },
        { icon: <FaSitemap size={24} />, title: "System Design", desc: "Creating resilient distributed systems with focus on scalability and maintainability" }
    ];

    return (
        <section id="about" className="py-20 px-4 lg:px-0 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Left Column - Image */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src="/profile.jpeg"
                                alt="Ugochukwu Paul"
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-color rounded-lg z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent-color rounded-lg z-0" />
                    </motion.div>

                    {/* Right Column - About Text */}
                    <div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-bold mb-6 relative"
                        >
                            About Me
                            <span className="block w-20 h-1 bg-accent-color mt-4"></span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-600 mb-6">
                            I'm a passionate Software Engineer with expertise in building robust, scalable, and high-performance backend systems.
                            With a strong foundation in server-side technologies and cloud infrastructure, I create resilient and maintainable solutions.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-gray-600 mb-8">
                            My approach combines technical excellence with methodical problem-solving. I enjoy working on challenging projects that require
                            innovative thinking and attention to detail in system architecture. When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or optimizing cloud infrastructure.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 text-center mt-10">
                            <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <h3 className="text-4xl font-bold text-accent-color">4+</h3>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <h3 className="text-4xl font-bold text-accent-color">50+</h3>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Expertise Section */}
                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">My Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg bg-white shadow-md card-hover"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="mb-4 text-accent-color">{skill.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                                <p className="text-gray-600">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 