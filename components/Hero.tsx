"use client";

import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="pt-24 md:pt-32 pb-16 px-4 lg:px-[120px] min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Animated background elements - subtle and sophisticated */}
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-100 blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100 blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-pink-100 blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-yellow-100 blur-3xl opacity-10 animate-pulse"></div>

            {/* Floating tech icons - subtle and symmetric */}
            <motion.div
                className="absolute left-1/4 top-1/4 hidden lg:block text-accent-color/20"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaCode size={30} />
            </motion.div>

            <motion.div
                className="absolute right-1/4 top-1/4 hidden lg:block text-accent-color/20"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaServer size={30} />
            </motion.div>

            <motion.div
                className="absolute right-1/3 bottom-1/4 hidden lg:block text-accent-color/20"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaDatabase size={30} />
            </motion.div>

            <motion.div
                className="absolute left-1/3 bottom-1/4 hidden lg:block text-accent-color/20"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaCode size={30} />
            </motion.div>

            {/* Main content - centered layout */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 px-4">
                {/* Hero Image - Centered above text */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        {/* Main image container with decorative frame */}
                        <div className="relative h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full overflow-hidden">
                            {/* Background gradient for image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-20"></div>

                            {/* Image with frame */}
                            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Ugochukwu Paul - Software Engineer"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="z-10"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent-color/10 -z-10"
                            animate={{
                                y: [0, -5, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 6,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        ></motion.div>
                        <motion.div
                            className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-accent-color/20 -z-10"
                            animate={{
                                y: [0, 5, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Text Content - Centered */}
                <motion.article
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Engineering <span className="gradient-text">Softwares</span> to Perfection
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-gray-600 text-lg mb-4">
                            Passionate software engineer crafting elegant solutions to complex problems.
                            Building intuitive interfaces and robust backend systems that elevate user experiences.
                        </p>
                        <p className="text-gray-600 text-lg mb-8">
                            With a focus on clean code and modern technologies, I aim to create impactful digital solutions
                            that make a difference in how we interact with technology.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-10 flex flex-wrap gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.a
                            href="#projects"
                            className="bg-black text-white rounded-full px-8 py-3 flex items-center gap-x-2 hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-lg font-medium">View Projects</span>
                            <RiArrowRightUpLine size={18} />
                        </motion.a>

                        <motion.a
                            href="https://docs.google.com/document/d/13zS6CVDaOixIyy9_a6XQ8yEim6wN2bXL/edit?usp=sharing&ouid=111447241901309072190&rtpof=true&sd=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-black rounded-full px-8 py-3 flex items-center gap-x-2 hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-lg font-medium">Resume</span>
                            <RiArrowRightUpLine size={18} className="transition-all" />
                        </motion.a>
                    </motion.div>
                </motion.article>
            </div>

            {/* Scroll indicator - Hidden on mobile, better positioned */}
            <motion.a
                href="#about"
                className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center z-10 cursor-pointer hover:opacity-80 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { delay: 2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
            >
                <span className="text-sm font-medium text-gray-500 mb-2">Scroll down</span>
                <motion.div
                    className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center"
                >
                    <motion.div
                        className="w-1.5 h-3 bg-accent-color rounded-full"
                        animate={{
                            y: [0, 4, 0],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    ></motion.div>
                </motion.div>
            </motion.a>

        </section>
    );
};

export default Hero; 