import React from "react";
import Stickybar from "./Stickybar";
// import Logo from "../assets/images/DP-Retail.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { useCategory } from "../CategoryContext";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

const Sidebar = () => {
  const [showCart, setShowCart] = useState(false);

  const { category } = useCategory();
  return (
    <div>
      <Stickybar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" >
              {/* <img className="" src={Logo} /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* {category?.map((value) => (
                <li className="nav-item">
                  <a className="nav-link" >
                    {value[1]}
                  </a>
                </li>
              ))} */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Benifit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="icon">
            <ul className="d-flex list-style-none">
              <li className="icon-button" title="Login">
                <a >
                  <AiOutlineUser />
                </a>
              </li>
              <li className="icon-button" title="Wishlist">
                <a >
                  <AiOutlineHeart />
                </a>
              </li>
              <li
                className="icon-button"
                title="Cart"
                onClick={()=>setShowCart(true)}
              >
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="topbar d-none d-xl-block border-top">
        <div className="container text-center">
          <ul className="list-inline align-items-center mb-0">
            {category?.map((value,key) => (
              <li className="list-inline-item mr-5" key={key}>
                <a className="nav-link" >
                  {value[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     <CartSidebar  showCart={showCart} setShowCart={setShowCart}/>
    </div>
  );
};

export default Sidebar;
