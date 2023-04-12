import React from "react";
import Stickybar from "./Stickybar";
import Logo from "../assets/images/DP-Retail.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { useCategory } from "../CategoryContext";

const Sidebar = () => {
  const { category } = useCategory();
  return (
    <div>
      <Stickybar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">
              <img className="" src={Logo} />
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
                  <a className="nav-link" href="#">
                    {value[1]}
                  </a>
                </li>
              ))} */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Benifit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
         
            </ul>
          </div>
          <div className="icon">
            <ul className="d-flex list-style-none">
              <li className="icon-button" title="Login">
                <a href="#">
                  <AiOutlineUser />
                </a>
              </li>
              <li className="icon-button" title="Wishlist">
                <a href="#">
                  <AiOutlineHeart />
                </a>
              </li>
              <li className="icon-button" title="Cart">
                <a href="#">
                  <AiOutlineShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
