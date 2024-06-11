"use client";

import Layout from '../components/layout';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <Layout>
            <div className="aboutUsContainer">
                <h1>About Lil'Bits</h1>
                <p>Welcome to Lil'Bits, where we offer a delightful culinary experience that brings the best of local and international flavors to your table. Our mission is to provide high-quality, delicious meals in a warm and welcoming environment.</p>
                
                <h2>Our Story</h2>
                <p>Founded in 2023, Lil'Bits started as a small family-run restaurant with a passion for good food and great company. Over the years, we have grown into a beloved local establishment known for our diverse menu and exceptional service.</p>
                
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> We use only the freshest ingredients to prepare our dishes.</li>
                    <li><strong>Community:</strong> We are committed to being an integral part of our community and supporting local businesses.</li>
                    <li><strong>Sustainability:</strong> We strive to minimize our environmental impact through sustainable practices.</li>
                    <li><strong>Hospitality:</strong> We aim to create a welcoming atmosphere for all our guests.</li>
                </ul>

                <h2>Meet the Team</h2>
                <p>Our team is composed of experienced chefs, dedicated staff, and friendly servers who are all passionate about making your dining experience memorable. We believe that good food brings people together, and we look forward to welcoming you to Lil'Bits.</p>

                <h2>Contact Us</h2>
                <p>Have any questions or want to make a reservation? Feel free to reach out to us at (123) 456-7890 or email us at info@lilbits.com. We are here to ensure you have a fantastic dining experience with us.</p>
            </div>
        </Layout>
    );
};

export default AboutUs;
