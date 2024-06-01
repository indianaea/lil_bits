import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CalendarPicker from "../../components/calendarPicker";
import PeoplePicker from "../../components/amountPeople";
import EmailInput from "../../components/emailInput";

const ConfirmOrder = () => {
    return (
        <>
            <Navbar />
            <div>
                <CalendarPicker />
                <PeoplePicker />
                <EmailInput />
            </div>
            <Footer />
        </>
    );
};

export default ConfirmOrder;