import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Orders from "./order";
import RandomDish from "./order";


const Order = () => {
    return (
    <>
        <Navbar />
        <div>
            <RandomDish/>
        </div>
        <Footer />
        </>
    );
};

export default Order;