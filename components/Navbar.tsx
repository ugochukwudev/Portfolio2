"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menu = useMemo(() => ["Home", "About", "Projects", "Skills", "Contact"], []);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Get all sections
            const sections = menu.map(item => document.getElementById(item.toLowerCase()));
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            // Find current section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActive(menu[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menu]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "glass-effect py-3 px-6 lg:px-8 shadow-lg"
                : "bg-transparent py-6 px-6 lg:px-8"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Professional Logo */}
                <motion.div
                    className="flex gap-x-4 items-center cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => {
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        setActive('Home');
                    }}
                >
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full p-0.5"
                            style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}>
                            <div className="w-full h-full rounded-full bg-white p-0.5">
                                <Image
                                    alt="Ugochukwu Paul - Backend Engineer"
                                    src="/profile.jpeg"
                                    className="rounded-full object-cover"
                                    width={44}
                                    height={44}
                                />
                            </div>
                        </div>
                    </div>
                    <section className="hidden sm:block">
                        <h1 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            Ugochukwu Paul
                        </h1>
                        <p className="text-gray-300 text-sm font-medium">Backend Engineer</p>
                    </section>
                </motion.div>

                {/* Professional Desktop Menu */}
                <nav className="hidden md:flex items-center gap-x-8">
                    {menu.map((item, i) => (
                        <motion.a
                            href={`#${item.toLowerCase()}`}
                            key={i}
                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${active === item
                                ? "text-white"
                                : "text-gray-300 hover:text-white"
                                } cursor-pointer`}
                            style={active === item ? {
                                background: 'linear-gradient(135deg, #4a38c2, #8f38c2)'
                            } : {}}
                            onClick={() => setActive(item)}
                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {active === item && (
                                <motion.div
                                    className="absolute inset-0 rounded-lg"
                                    style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item}</span>
                        </motion.a>
                    ))}
                </nav>

                {/* Professional Mobile menu button */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 focus:outline-none transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine size={24} />
                            ) : (
                                <RiMenu3Line size={24} />
                            )}
                        </motion.div>
                    </motion.button>
                </div>
            </div>

            {/* Professional Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden absolute top-full left-0 right-0 glass-effect shadow-xl border-t border-white/20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <nav className="container-custom py-6">
                        <div className="flex flex-col gap-y-2">
                            {menu.map((item, i) => (
                                <motion.a
                                    href={`#${item.toLowerCase()}`}
                                    key={i}
                                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${active === item
                                        ? "text-white"
                                        : "text-gray-300 hover:bg-gray-800"
                                        } cursor-pointer`}
                                    style={active === item ? {
                                        background: 'linear-gradient(135deg, #4a38c2, #8f38c2)'
                                    } : {}}
                                    onClick={() => {
                                        setActive(item);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;