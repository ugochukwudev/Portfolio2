"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaWhatsapp, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #333; border-bottom: 2px solid #5b78e5; padding-bottom: 10px;">New Portfolio Message</h2>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 16px; color: #666;">
                        <strong style="color: #333;">From:</strong> ${formData.name} (${formData.email})
                    </p>
                    <p style="font-size: 16px; color: #666;">
                        <strong style="color: #333;">Subject:</strong> ${formData.subject}
                    </p>
                </div>

                <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Message:</h3>
                    <p style="color: #666; line-height: 1.6;">
                        ${formData.message.replace(/\n/g, '<br>')}
                    </p>
                </div>

                <div style="color: #888; font-size: 14px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                    This message was sent from your portfolio contact form.
                </div>
            </div>
        `;

        try {
            const response = await fetch("https://techxmail.onrender.com/sendmail", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.name,
                    mail: "paulambrose5002@gmail.com",
                    html: emailHtml,
                    subject: "Someone just sent You a message on your portfolio",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitSuccess(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

            // Reset success message after 3 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const contactInfo = [
        { icon: <FaEnvelope size={24} />, title: "Email", value: "paulambrose5002@gmail.com", href: "mailto:paulambrose5002@gmail.com" },
        { icon: <FaWhatsapp size={24} />, title: "WhatsApp", value: "+2348024299898", href: "https://wa.me/2348024299898" }
    ];

    return (
        <section id="contact" className="relative py-24 px-4 lg:px-0 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
            {/* Gradient Background Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10" style={{ background: 'linear-gradient(135deg, #c238b0, #b0c238)' }}></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-5" style={{ background: 'linear-gradient(135deg, #38c24a, #4a38c2)' }}></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
                            Have a <span className="gradient-text-secondary font-semibold">project in mind</span> {`or want to collaborate? I'm always excited to work on innovative backend solutions and scalable systems.`}
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 px-4 sm:px-0">
                            Feel free to reach out using the form below or through my contact information.
                        </p>
                    </motion.div>

                    {/* Gradient Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="w-24 h-1 mx-auto mt-8 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #4a38c2, #8f38c2)' }}
                    ></motion.div>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="glass-effect p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 gradient-text-secondary"
                        >
                            Contact Information
                        </motion.h3>

                        <div className="space-y-6 sm:space-y-8 mb-12">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg"
                                    style={{ background: 'linear-gradient(135deg, #1e293b, #334155)' }}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                >
                                    <motion.div
                                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg"
                                        style={{ background: index === 0 ? 'linear-gradient(135deg, #4a38c2, #8f38c2)' : 'linear-gradient(135deg, #c238b0, #b0c238)' }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {info.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{info.title}</h4>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold text-base sm:text-lg text-gray-200 group-hover:gradient-text-secondary transition-all duration-300 break-all sm:break-normal hover:underline cursor-pointer"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="font-semibold text-base sm:text-lg text-gray-200 group-hover:gradient-text-secondary transition-all duration-300 break-all sm:break-normal">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-secondary">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: FaTwitter, href: "https://x.com/", gradient: 'linear-gradient(135deg, #4a38c2, #8f38c2)' },
                                    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ugochukwu-paul-b62b53258/", gradient: 'linear-gradient(135deg, #8f38c2, #c238b0)' },
                                    { icon: FaGithub, href: "https://github.com/ugochukwudev", gradient: 'linear-gradient(135deg, #c238b0, #b0c238)' },
                                    { icon: FaInstagram, href: "https://web.facebook.com/paul.ambrose.9085/", gradient: 'linear-gradient(135deg, #b0c238, #38c24a)' }
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                                            style={{ background: social.gradient }}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={22} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="glass-effect p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 gradient-text-secondary"
                        >
                            Send Me a Message
                        </motion.h3>

                        {submitSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="p-6 rounded-2xl mb-8 text-white shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #38c24a, #b0c238)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                                        ✓
                                    </div>
                                    <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
                                </div>
                            </motion.div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-gray-200 mb-3 font-semibold">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none focus:border-transparent transition-all duration-300 bg-gray-800 text-gray-200 shadow-sm text-sm sm:text-base"
                                    style={{

                                        boxShadow: 'focus:0 0 0 3px rgba(74, 56, 194, 0.1)'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#4a38c2';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(74, 56, 194, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-gray-200 mb-3 font-semibold">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none transition-all duration-300 bg-gray-800 text-gray-200 shadow-sm text-sm sm:text-base"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#8f38c2';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(143, 56, 194, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="subject" className="block text-gray-200 mb-3 font-semibold">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none transition-all duration-300 bg-gray-800 text-gray-200 shadow-sm text-sm sm:text-base"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#c238b0';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(194, 56, 176, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="Project Inquiry"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-gray-200 mb-3 font-semibold">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none transition-all duration-300 bg-gray-800 text-gray-200 shadow-sm resize-none text-sm sm:text-base"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#b0c238';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(176, 194, 56, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl"
                                    }`}
                                style={{
                                    background: isSubmitting
                                        ? '#9ca3af'
                                        : 'linear-gradient(135deg, #4a38c2, #8f38c2)'
                                }}
                                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;