import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CalendarPicker from "../../components/calendarPicker";

const ConfirmOrder = () => {
    return (
        <>
            <Navbar />
            <div>
                <CalendarPicker />
            </div>
            <Footer />
        </>
    );
};

export default ConfirmOrder;