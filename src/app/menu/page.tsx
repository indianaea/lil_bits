"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Menu() {
  return (
    <>
    <div className="page-body">
      <div className="page-header">
        <Navbar />
      </div>
      <div className="page-main">
        <div>Menu will be here</div> 
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>    
   </>
  );
}