import React from 'react';
import './footer.css';

const Footerr = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};


const Footer = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="footer">{<Footerr />}</div>
        // 1--->
    );
};

export default Footer;
