"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menu = ["Home", "About", "Projects", "Skills", "Contact"];

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-[120px] transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center">
                <motion.div
                    className="flex gap-x-4 items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image
                        alt="logo"
                        src="/profile.jpeg"
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                    <section>
                        <h1 className="text-lg font-bold">Ugochukwu Paul</h1>
                        <p className="text-gray-600 text-sm">Software Engineer</p>
                    </section>
                </motion.div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-x-6">
                    {menu.map((item, i) => (
                        <motion.a
                            href={`#${item.toLowerCase()}`}
                            key={i}
                            className={`${active === item
                                ? "text-accent-color font-bold"
                                : "text-gray-600 hover:text-gray-900"
                                } cursor-pointer transition-colors`}
                            onClick={() => setActive(item)}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <RiCloseLine size={24} />
                        ) : (
                            <RiMenu3Line size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="flex flex-col gap-y-4">
                        {menu.map((item, i) => (
                            <a
                                href={`#${item.toLowerCase()}`}
                                key={i}
                                className={`${active === item
                                    ? "text-accent-color font-bold"
                                    : "text-gray-600"
                                    } cursor-pointer`}
                                onClick={() => {
                                    setActive(item);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar; 