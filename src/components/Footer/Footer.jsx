import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Blog. All rights reserved.</p>
                <div className="mt-4"></div>
                    <Link to="/about" className="text-gray-400 hover:text-white mx-2">About</Link>
                    <Link to="/contact" className="text-gray-400 hover:text-white mx-2">Contact</Link>
                    <Link to="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
                </div>
                <div className="mt-4">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">Facebook</a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">Instagram</a>
                </div>
        </footer>
    );
};

export default Footer;