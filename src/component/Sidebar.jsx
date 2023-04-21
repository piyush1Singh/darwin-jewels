import React, { useEffect, useState } from "react";
import Stickybar from "./Stickybar";
import Logo from "../assets/images/DP-Retail.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { useCategory } from "../CategoryContext";
import CartSidebar from "./CartSidebar";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    setShowCart(true);
    try {
      const requestOptions = {
        method: "POST",
        credentials: "include",
      };
      const response = await fetch(
        "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Cart/fetchallCart.php",
        requestOptions
      );
      const responseData = await response.json();
      const newArray = responseData.map((value) => ({
        id: value.id,
        quantity: value.quantity,
      }));
      setCart(newArray);
      console.log(cart, "setcart");
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //  fetchData()
  // }, [cart])

  // try {
  //   const response = await axios.post(
  //     "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Cart/fetchallCart.php",
  //     {},
  //     {
  //       withCredentials: true, // enable cookies/session support
  //     }
  //   );
  //   // handle the response here
  //   let resonseData = JSON.stringify(response.data)
  //   let parseData = JSON.parse(resonseData)
  //   console.log(parseData, "clg cart");
  //   console.log(typeof(parseData), "type cart");

  //   setCart(parseData);
  //   console.log(cart)
  // } catch (error) {
  //   // handle the error here
  //   console.error(error);
  // }

  const { category } = useCategory();
  return (
    <div>
      <Stickybar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
              <img src={Logo} />
            </Link>
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
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Benifit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="icon">
            <ul className="d-flex list-style-none">
              <li className="icon-button" title="Login">
                <a>
                  <AiOutlineUser />
                </a>
              </li>
              <li className="icon-button" title="Wishlist">
                <a>
                  <AiOutlineHeart />
                </a>
              </li>
              <li
                className="icon-button"
                title="Cart"
                onClick={() => fetchData()}
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
            {category?.map((value, key) => (
              <li className="list-inline-item mr-5" key={key}>
                <a href={"/categories/" + value[0]} className="nav-link">
                  {value[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CartSidebar cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
