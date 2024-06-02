import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../common.css'

const AboutUs = () => {
    return (
        <>
        <div className="page-body">
            <div className="page-header">
                <Navbar />
            </div>
        <div className="page-main">
            <h1>About us</h1>
            <Link href="/">Here will be a text about the website</Link>
        </div>
            <div className="page-footer">
                <Footer />
            </div>
        </div>          
        </>
    );
};

export default AboutUs;