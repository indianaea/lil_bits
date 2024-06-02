import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CalendarPicker from "../../components/calendarPicker";
import PeoplePicker from "../../components/amountPeople";
import EmailInput from "../../components/emailInput";
import '../../common.css'

const ConfirmOrder = () => {
    return (
        <>
          <div className="page-body">
            <div className="page-header">
                <Navbar />
            </div>
            <div className="page-body">
                <CalendarPicker />
                <PeoplePicker />
                <EmailInput />
            </div>
            <div className="page-footer">
                <Footer />
            </div>
            </div>
        </>
    );
};

export default ConfirmOrder;