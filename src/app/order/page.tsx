
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Orders from "./order";


const Order = () => {
    return (
    <div className="page-body">
        <div className="page-header">
            <Navbar /> 
        </div>
        <div className="page-main">
            <Orders/>
        </div>
        <div className="page-footer">
            <Footer /> 
        </div>
      </div>
    );
};

export default Order;