"use client";

import { motion } from "framer-motion";
import { RiArrowRightUpLine, RiDownloadLine } from "react-icons/ri";
import Image from "next/image";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-indigo-900/30 pt-20">
            {/* Professional background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
                    style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                    style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
                    style={{ background: 'linear-gradient(135deg, #38c24a, #4a38c2)' }}></div>
            </div>

            {/* Floating tech icons with professional styling */}
            <motion.div
                className="absolute left-[15%] top-[25%] hidden lg:block"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: '#4a38c2', opacity: 0.3 }}
            >
                <FaCode size={40} />
            </motion.div>

            <motion.div
                className="absolute right-[15%] top-[30%] hidden lg:block"
                animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: '#8f38c2', opacity: 0.3 }}
            >
                <FaServer size={36} />
            </motion.div>

            <motion.div
                className="absolute right-[20%] bottom-[25%] hidden lg:block"
                animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: '#c238b0', opacity: 0.3 }}
            >
                <FaDatabase size={38} />
            </motion.div>

            <motion.div
                className="absolute left-[20%] bottom-[30%] hidden lg:block"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: '#38c24a', opacity: 0.3 }}
            >
                <FaCloud size={42} />
            </motion.div>

            {/* Main content container */}
            <div className="container-custom relative z-10 text-center">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 px-4">
                    {/* Professional Hero Image */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Main image container with professional styling */}
                            <div className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] mx-auto">
                                {/* Gradient ring around image */}
                                <div className="absolute inset-0 rounded-full p-1"
                                    style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2, #c238b0)' }}>
                                    <div className="w-full h-full rounded-full bg-white p-2">
                                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                                            <Image
                                                src="/profile.png"
                                                alt="Ugochukwu Paul - Web Developer"
                                                fill
                                                style={{ objectFit: "contain" }}
                                                className="transition-transform duration-500 hover:scale-110"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Professional floating elements */}
                                <motion.div
                                    className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full glass-effect flex items-center justify-center"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                                >
                                    <FaCode className="text-white" size={24} />
                                </motion.div>

                                <motion.div
                                    className="absolute -top-6 -left-6 w-16 h-16 rounded-full glass-effect flex items-center justify-center"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}
                                >
                                    <FaServer className="text-white" size={24} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Text Content */}
                    <motion.article
                        className="text-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {/* Professional greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                                style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)', color: 'white' }}>
                                {` 👋 Hello, I'm Ugochukwu Paul`}
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 text-balance"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 1 }}
                        >
                            Web <span className="gradient-text">Developer</span><br />
                            <span className="gradient-text-secondary"></span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                Crafting <strong className="text-white">robust, scalable web systems</strong> and APIs that power modern applications.
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                                Specializing in cloud architecture, database design, and system optimization with 4+ years of experience
                                building enterprise-grade solutions that handle millions of requests.
                            </p>
                        </motion.div>

                        {/* Professional CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                        >
                            <motion.a
                                href="#projects"
                                className="btn-primary inline-flex items-center justify-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg w-full sm:w-auto"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>View My Work</span>
                                <RiArrowRightUpLine size={20} />
                            </motion.a>

                            <motion.a
                                href="/resume"
                                className="btn-secondary inline-flex items-center justify-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold w-full sm:w-auto"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RiDownloadLine size={20} />
                                <span>View Resume</span>
                            </motion.a>
                        </motion.div>

                        {/* Professional stats or highlights */}
                        <motion.div
                            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                        >
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4+</div>
                                <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold gradient-text-secondary mb-2">50+</div>
                                <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold gradient-text-accent mb-2">∞</div>
                                <div className="text-gray-300 text-sm sm:text-base">Problems Solved</div>
                            </div>
                        </motion.div>
                    </motion.article>
                </div>


            </div>

        </section>
    );
};

export default Hero;