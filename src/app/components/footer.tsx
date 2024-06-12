import React from 'react';
import './footer.css';

const Footerr = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <p>&copy; 2024 Lil' Bits. All rights reserved.</p>
                <div className="footerLinks">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Service</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};


const Footer = () => {
    return (
        <div className="footer">{<Footerr />}</div>
    );
};

export default Footer;
