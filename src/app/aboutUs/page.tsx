import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>About us</h1>
                <Link href="/">Here will be a text about the website</Link>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;