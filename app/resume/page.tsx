"use client";

import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

const ResumePage = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/cv.pdf";
        link.download = "Ikegbulam-Ugochukwu-Paul-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-blue-600 to-indigo-600"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl bg-gradient-to-br from-indigo-600 to-blue-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-6 blur-3xl bg-gradient-to-br from-slate-600 to-gray-600"></div>
            </div>

            {/* Header */}
            <motion.div
                className="relative z-10 p-4 md:p-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <Link href="/" className="group">
                        <motion.div
                            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
                            whileHover={{ x: -5 }}
                        >
                            <FaArrowLeft className="text-lg" />
                            <span className="text-lg font-medium">Back to Portfolio</span>
                        </motion.div>
                    </Link>

                    <motion.button
                        onClick={handleDownload}
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="text-lg" />
                        <span className="hidden sm:inline">Download Resume</span>
                        <span className="sm:hidden">Download</span>
                    </motion.button>
                </div>

                {/* Title Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-indigo-600 to-blue-700"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaFileAlt size={24} />
                        </motion.div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Resume - <span className="gradient-text">Ikegbulam Ugochukwu Paul</span>
                        </h1>
                    </div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Web Developer specializing in full-stack solutions and modern web technologies
                    </p>
                </motion.div>
            </motion.div>

            {/* PDF Viewer Container */}
            <motion.div
                className="relative z-10 px-4 md:px-8 pb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="glass-effect rounded-3xl p-4 md:p-8 shadow-2xl">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                            <iframe
                                src="/cv.pdf"
                                className="w-full h-[600px] md:h-[800px] lg:h-[900px]"
                                title="Ikegbulam Ugochukwu Paul Resume"
                                style={{ border: 'none' }}
                            />
                        </div>

                        {/* Mobile Download Button */}
                        <motion.div
                            className="mt-6 text-center md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.button
                                onClick={handleDownload}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaDownload className="text-lg" />
                                <span>Download Resume</span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Footer Info */}
            <motion.div
                className="relative z-10 text-center pb-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p className="text-gray-400 text-sm">
                    Last updated: December 2024 | Available for web development opportunities
                </p>
            </motion.div>
        </div>
    );
};

export default ResumePage;