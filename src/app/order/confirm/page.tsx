import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Orders from "../order";


const Order = () => {
    return (
        <>
            <Navbar />
            <div>
                <Orders />
            </div>
            <Footer />
        </>
    );
};

export default Order;