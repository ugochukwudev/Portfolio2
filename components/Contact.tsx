"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });
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

    const contactInfo = [
        { icon: <FaEnvelope size={24} />, title: "Email", value: "paulambrose5002@gmail.com" },
        { icon: <FaMapMarkerAlt size={24} />, title: "Location", value: "Remote" }
    ];

    return (
        <section id="contact" className="py-20 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information.
                    </p>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold mb-8"
                        >
                            Contact Information
                        </motion.h3>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg"
                                >
                                    <div className="w-12 h-12 rounded-full bg-accent-color bg-opacity-10 flex items-center justify-center text-accent-color">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-sm mb-1">{info.title}</h4>
                                        <p className="font-medium">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent-color hover:text-white transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/ugochukwu-paul-b62b53258/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent-color hover:text-white transition-colors">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href="https://github.com/ugochukwudev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent-color hover:text-white transition-colors">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://web.facebook.com/paul.ambrose.9085/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-accent-color hover:text-white transition-colors">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-white rounded-xl shadow-lg p-8"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold mb-6"
                        >
                            Send Me a Message
                        </motion.h3>

                        {submitSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-100 text-green-700 rounded-lg mb-6"
                            >
                                Thank you! Your message has been sent successfully.
                            </motion.div>
                        ) : null}

                        <form onSubmit={handleSubmit}>
                            <motion.div variants={itemVariants} className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent"
                                    placeholder="Project Inquiry"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-accent-color hover:bg-accent-color/90"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 