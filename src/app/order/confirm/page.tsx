import Link from "next/link";
import Navbar from "../../components/navbar";
import Orders from "../order";


const Order = () => {
    return (
        <>
            <Navbar />
            <div>
                <Orders />
            </div>
        </>
    );
};

export default Order;