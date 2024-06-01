import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Drinks from "./././drink";


const Drink = () => {

    return (
        <>
            <Navbar />
            <div>
                <Drinks />
            </div>
            <Footer />
        </>
    );
};

export default Drink;