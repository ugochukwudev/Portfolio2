"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaServer, FaCloud, FaDatabase, FaSitemap, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function About() {
    const ref = useRef(null);
    const expertiseRef = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });
    const isExpertiseInView = useInView(expertiseRef, {
        once: true,
        amount: 0.3
    });
    const experience = "4+";

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

    const skills = [
        { icon: <FaServer size={24} />, title: "Backend Engineering", desc: "Building robust, scalable server-side applications and APIs with high performance" },
        { icon: <FaCloud size={24} />, title: "Cloud Engineering", desc: "Designing and implementing cloud-native solutions with focus on scalability and reliability" },
        { icon: <FaDatabase size={24} />, title: "Database Design", desc: "Architecting efficient database schemas and optimizing for performance and scale" },
        { icon: <FaSitemap size={24} />, title: "System Design", desc: "Creating resilient distributed systems with focus on scalability and maintainability" },
        { icon: <FaJs size={24} />, title: "JavaScript", desc: "Expert in modern JavaScript, including ES6+ features, async programming, and Node.js ecosystem" },
        { icon: <SiTypescript size={24} />, title: "TypeScript", desc: "Proficient in TypeScript development with strong typing and object-oriented principles" }
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full" style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full" style={{ background: 'linear-gradient(135deg, #38c24a, #b0c238)' }}></div>
            </div>
            <div className="container-custom relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-5xl md:text-6xl font-bold mb-6 gradient-text-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Passionate backend engineer with <span className="gradient-text-secondary font-semibold">4+ years of expertise</span> in building scalable,
                        high-performance systems that power modern applications and drive business growth.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Left Column - Professional Image */}
                    <motion.div variants={itemVariants} className="relative group order-2 lg:order-1">
                        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
                            <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)', padding: '4px' }}>
                                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                                    {/* Dark overlay for light background balance */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-10"></div>
                                    <Image
                                        src="/profile.png"
                                        alt="Ugochukwu Paul"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className="transition-transform duration-700 group-hover:scale-110 relative z-0"
                                    />
                                    {/* Additional subtle overlay for better contrast */}
                                    <div className="absolute inset-0 bg-slate-900/20 z-5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-2xl shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -top-8 -left-8 w-20 h-20 border-4 rounded-2xl"
                            style={{ borderColor: '#38c24a' }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Right Column - Professional Content */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold gradient-text-secondary mb-4">
                                Backend Engineering Excellence
                            </h3>
                            <div className="w-24 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            {`I'm a`} <span className="gradient-text-primary font-semibold">Software Engineer</span> with <span className="gradient-text-secondary font-semibold">{experience} years of experience</span>, specializing in building scalable backend systems and cloud infrastructure that power enterprise-level applications.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            My expertise lies in designing and implementing <span className="gradient-text-accent font-semibold">robust backend solutions</span> that handle millions of requests while maintaining optimal performance and security standards.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            {`My approach combines technical excellence with methodical problem-solving. I thrive on challenging projects that require innovative thinking and meticulous attention to system architecture. Beyond coding, I'm passionate about exploring emerging technologies and contributing to open-source initiatives.`}
                        </motion.p>

                        {/* Professional Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                            <motion.div
                                className="glass-effect p-4 sm:p-6 rounded-2xl text-center group cursor-pointer"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <h3 className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-2">4+</h3>
                                <p className="text-gray-300 font-medium text-sm sm:text-base">Years Experience</p>
                                <div className="w-full h-1 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                            </motion.div>
                            <motion.div
                                className="glass-effect p-4 sm:p-6 rounded-2xl text-center group cursor-pointer"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <h3 className="text-3xl sm:text-4xl font-bold gradient-text-secondary mb-2">50+</h3>
                                <p className="text-gray-300 font-medium text-sm sm:text-base">Projects Completed</p>
                                <div className="w-full h-1 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Professional Expertise Section */}
                <motion.div
                    ref={expertiseRef}
                    className="mt-32"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isExpertiseInView ? "visible" : "hidden"}
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-6">
                            My Expertise
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Specialized skills and technologies that drive <span className="gradient-text-secondary font-semibold">exceptional backend solutions</span>
                        </p>
                        <div className="w-32 h-1 rounded-full mx-auto mt-8" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {/* Background Gradient on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                                    style={{ background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a38c2, #8f38c2' : index % 3 === 1 ? '#c238b0, #b0c238' : '#38c24a, #b0c238'})` }}>
                                </div>

                                {/* Icon Container */}
                                <motion.div
                                    className="relative mb-6 p-4 rounded-2xl w-fit"
                                    style={{ background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a38c2, #8f38c2' : index % 3 === 1 ? '#c238b0, #b0c238' : '#38c24a, #b0c238'})` }}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-white text-3xl">{skill.icon}</div>
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text-primary transition-all duration-300">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                    {skill.desc}
                                </p>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-500"
                                    style={{ borderColor: `${index % 3 === 0 ? '#4a38c2' : index % 3 === 1 ? '#c238b0' : '#38c24a'}` }}>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

