"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/ugochukwudev" },
    { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/ugochukwu-paul-b62b53258/" },
    { icon: <FaTwitter size={20} />, url: "https://x.com/" },
    { icon: <FaInstagram size={20} />, url: "https://web.facebook.com/paul.ambrose.9085/" }
  ];

  return (
    <footer className="mt-20 py-12 px-4 lg:px-0 border-t border-gray-700 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Ugochukwu Paul</h3>
            <p className="text-gray-400 mb-6">
              Web Developer specializing in creating beautiful, functional, and user-friendly
              digital experiences with clean code and modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-accent-color hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-color transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <div className="flex gap-4">
              <motion.a
                href="mailto:paulambrose5002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-accent-color hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={16} />
              </motion.a>
              <motion.a
                href="https://wa.me/2348024299898"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-accent-color hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400"
        >
          <p>
            © {currentYear} Ugochukwu Paul. All rights reserved. Made with{" "}
            <FaHeart className="inline text-red-500 mx-1" size={14} /> using Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;