
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Orders from "./order";


const Order = () => {
    return (
    <div className="page-body">
      <div className="page-header">
        <Navbar />
        <div>
            <Orders/>
        </div>
        <Footer />
      </div>
    </div>
    );
};

export default Order;