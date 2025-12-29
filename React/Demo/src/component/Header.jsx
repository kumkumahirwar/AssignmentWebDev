import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <div className="d-flex justify-content-between align-items-center p-2 bg-black text-secondary shadow rounded sticky-top">
            {/* <h1 id="head"><i className="bi bi-x-octagon-fill"></i>Hellow world</h1> */}
            <h3>My Website</h3>
            <div className="d-flex gap-4">
            <Link to={"/"} className="text-decoration-none text-light">Home</Link>
             <Link to={"/about"} className="text-decoration-none text-light">About</Link>
              <Link to={"/contact"} className="text-decoration-none text-light">Contact</Link>
               <Link to={"/product"} className="text-decoration-none text-light">Product</Link>
            </div>
        </div>
        
        </>
    );
};
export default Header;