import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


const Receipt = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Here is your receipt</h1>
                <Link href="/">Here will be a text about the website</Link>
            </div>
            <Footer />
        </>
    );
};

export default Receipt;