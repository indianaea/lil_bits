import Link from "next/link";
import Navbar from "../../components/navbar";
import Drinks from "./././drink";

const Drink = () => {
    return (
        <>
        <Navbar />
        <div>
            <h1>Drinks</h1>
            <Drinks/>

            <Link href="/">Here will be a list of all drinks</Link>
        </div>
        </>
    );
};

export default Drink;