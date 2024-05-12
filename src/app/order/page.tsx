import Link from "next/link";

const Order = () => {
    return (
        <div>
            <h1>Orders</h1>
            
            <Link href="/">Here will be a list of my orders</Link>

            <li><Link href="/order/drink">List of drinks</Link></li>
        </div>
    );
};

export default Order;