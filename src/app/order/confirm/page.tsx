"use client";

import Layout from '../../components/layout';
import CalendarPicker from "../../components/calendarPicker";
import PeoplePicker from "../../components/amountPeople";
import EmailInput from "../../components/emailInput";
import TotalOrder from "./confirm"

const ConfirmOrder = () => {
    return (
        <Layout>
            <CalendarPicker />
            <PeoplePicker />
            <EmailInput />
            <TotalOrder/>           
        </Layout>
    );
};

export default ConfirmOrder;