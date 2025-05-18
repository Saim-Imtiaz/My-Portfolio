import React from 'react';
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png'; // adjust path if needed

const Footer = () => {
    return (
        <footer className="bg-white text-[#101828] border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Logo */}
                <div>
                    <a href="#Home" className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                        <span className="text-lg font-semibold">Saim Imtiaz</span>
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/saim-imtiaz-127648348/" target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-full bg-gray-100 hover:bg-[#24b5d9] hover:text-white transition duration-300">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://wa.me/923019377152" target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-full bg-gray-100 hover:bg-[#24b5d9] hover:text-white transition duration-300">
                        <FaWhatsapp />
                    </a>
                    <a href="https://github.com/Saim-Imtiaz" target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-full bg-gray-100 hover:bg-[#24b5d9] hover:text-white transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="mailto:itssaimofficial.web@gmail.com" target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-full bg-gray-100 hover:bg-[#24b5d9] hover:text-white transition duration-300">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="bg-gray-100 text-center py-4 text-sm text-gray-500 border-t border-gray-200">
                &copy; {new Date().getFullYear()} Saim Imtiaz. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
