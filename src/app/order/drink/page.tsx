import Link from "next/link";
import Navbar from "../../components/navbar";

const Drink = () => {
    return (
        <>
        <Navbar />
        <div>
            <h1>Drinks</h1>
            <Link href="/">Here will be a list of all drinks</Link>
        </div>
        </>
    );
};

export default Drink;