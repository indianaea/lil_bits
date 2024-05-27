import Link from "next/link";
import Navbar from "../components/navbar";
import Orders from "./order";


const Order = () => {
    return (
    <>
        <Navbar />
        <div>
            <h1>My orders</h1>
            <Orders/>

            <li><Link href="/order/drink">List of drinks</Link></li>
        </div>
        </>
    );
};

export default Order;