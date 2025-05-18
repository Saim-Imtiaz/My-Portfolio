import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactItems = [
    {
        icon: <FaEnvelope className="text-[#24b5d9] text-xl" />,
        title: 'Email',
        value: 'itssaimofficial.web@gmail.com',
    },
    {
        icon: <FaPhone className="text-[#24b5d9] text-xl" />,
        title: 'Phone',
        value: '+92 901 937 7152',
    },
    {
        icon: <FaMapMarkerAlt className="text-[#24b5d9] text-xl" />,
        title: 'Location',
        value: 'Sargodha, Pakistan',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

function Contact() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        const form = event.target;

        emailjs.sendForm('service_y48muds', 'template_fjkfayp', form, 'z25Iiej-TxrSrHfWx')
            .then((result) => {
                setLoading(false);
                setSuccessMessage("Message sent successfully!");

                form.reset();

                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            }, (error) => {
                setLoading(false);
                setErrorMessage("Failed to send the message. Please try again.");
            });
    };

    return (
        <section
            id="Contact"
            className="w-full text-white px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20"
            style={{ backgroundColor: '#101828' }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Contact Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

                        {contactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                custom={index + 1}
                                variants={fadeUp}
                            >
                                <div className="p-3 bg-white/10 rounded-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">{item.title}</h4>
                                    <p className="text-gray-400 text-sm sm:text-base">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1.5}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-4 bg-white/10 text-white border-2 border-transparent rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#24b5d9] shadow-md transition-all duration-300"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-4 bg-white/10 text-white border-2 border-transparent rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#24b5d9] shadow-md transition-all duration-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    className="w-full p-4 bg-white/10 text-white border-2 border-transparent rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#24b5d9] shadow-md transition-all duration-300"
                                    placeholder="Leave your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-[#24b5d9] to-[#2d30df] text-white py-3 px-6 rounded-lg hover:from-[#2d30df] hover:to-[#24b5d9] transition-all duration-300 cursor-pointer"
                            >
                                {loading ? "Submitting..." : "Send Message"}
                            </button>
                        </form>

                        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;