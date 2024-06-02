"use client";

import Layout from '../../components/layout';
import CalendarPicker from "../../components/calendarPicker";
import PeoplePicker from "../../components/amountPeople";
import EmailInput from "../../components/emailInput";

const ConfirmOrder = () => {
    return (
        <Layout>
            <CalendarPicker />
            <PeoplePicker />
            <EmailInput />
        </Layout>
    );
};

export default ConfirmOrder;