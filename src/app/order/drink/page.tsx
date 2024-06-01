import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Drinks from "./././drink";
import '../../common.css'

const Drink = () => {

return (
  <>
    <div className="page-body">
      <div className="page-header">
        <Navbar />
      </div>
      <div className="page-main">
        <Drinks />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
   </>
  );
};

export default Drink;