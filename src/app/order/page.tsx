import Link from "next/link";
import Navbar from "../components/navbar";
import Orders from "./order";


const Order = () => {
    return (
    <>
            <Navbar />
        <div>
            <h1>Orders</h1>
            <Orders/>
            
            <Link href="/">Here will be a list of my orders</Link>

            <li><Link href="/order/drink">List of drinks</Link></li>
        </div>
        </>
    );
};

export default Order;