import React from 'react';
import './footer.css';

const Footerr = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <div className="footerLinks">
                    <a href="/privacyPolicy">Privacy Policy</a>
                    <a href="/termsOfService">Terms of Service</a>
                    <a href="/contact">Contact Us</a>
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
