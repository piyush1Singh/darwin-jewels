import React from "react";
import {RxCross2} from "react-icons/rx"

const CartSidebar = (props) => {
  return (
    <div>
    <div className={`canvas-sidebar cart-canvas ${props.showCart ? "show" : ""}`}>
        <div className="canvas-overlay"></div>
        <div className="card border-0 pt-4 pb-7 h-100">
          <div className="px-6 text-right">
            <span className="canvas-close d-inline-block fs-24 mb-1 ml-auto lh-1 text-primary">
            <RxCross2  onClick={()=>props.setShowCart(false)}/>
            </span>
          </div>
          <div className="card-header bg-transparent p-0 mx-6">
            <h3 className="fs-24 mb-5">Shopping bag</h3>
            <p className="fs-15 font-weight-500 text-body mb-5">
              <span className="d-inline-block mr-2 fs-15 text-secondary">
                <i className="far fa-check-circle"></i>
              </span>
              Your cart is saved for the next{" "}
              <span className="text-secondary">4m34s</span>
            </p>
          </div>
          <div className="card-body px-6 pt-7 overflow-y-auto">
            <div className="mb-4 d-flex">
              <a  className="d-flex align-items-center mr-2 text-muted">
           {/* <RxCross2 /> */}
              </a>
              <div className="media w-100">
                <div className="w-60px mr-3">
                  {/* <img
                    src="images/product/product-01.jpg"
                    alt="Natural Coconut Cleansing Oil"
                  /> */}
                </div>
                <div className="media-body d-flex">
                  <div className="cart-price pr-6">
                    <p className="fs-14 font-weight-bold text-secondary mb-1">
                      <span className="font-weight-500 fs-13 text-line-t    hrough text-body mr-1">
                        $39.00
                      </span>
                      ₹ 3,58,755
                    </p>
                    <a href="product-detail.html" className="text-secondary">
                      Geometric Fleur CZ Diamond Ring
                    </a>
                  </div>
                  <div className="position-relative ml-auto">
                    <div className="input-group">
                      <a
                        
                        className="down position-absolute pos-fixed-left-center pl-2"
                      >
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        type="number"
                        className="number-cart w-90px px-6 text-center h-40px bg-input border-0"
                      />
                      <a
                        
                        className="up position-absolute pos-fixed-right-center pr-2"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 d-flex">
              <a  className="d-flex align-items-center mr-2 text-muted">
                <i className="fal fa-times"></i>
              </a>
              <div className="media w-100">
                <div className="w-60px mr-3">
                  {/* <img src="images/product/product-02.jpg" alt="Super Pure" /> */}
                </div>
                <div className="media-body d-flex">
                  <div className="cart-price pr-6">
                    <p className="fs-14 font-weight-bold text-secondary mb-1">
                      <span className="font-weight-500 fs-13 text-line-through text-body mr-1">
                        $39.00
                      </span>
                      ₹ 3,58,755
                    </p>
                    <a  className="text-secondary">
                      Super Pure
                    </a>
                  </div>
                  <div className="position-relative ml-auto">
                    <div className="input-group">
                      <a
                        
                        className="down position-absolute pos-fixed-left-center pl-2"
                      >
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        type="number"
                        className="number-cart w-90px px-6 text-center h-40px bg-input border-0"
                      />
                      <a
                        
                        className="up position-absolute pos-fixed-right-center pr-2"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 d-flex">
              <a  className="d-flex align-items-center mr-2 text-muted">
                <i className="fal fa-times"></i>
              </a>
              <div className="media w-100">
                <div className="w-60px mr-3">
                  {/* <img
                    src="images/product/product-03.jpg"
                    alt="Cleansing Balm"
                  /> */}
                </div>
                <div className="media-body d-flex">
                  <div className="cart-price pr-6">
                    <p className="fs-14 font-weight-bold text-secondary mb-1">
                      <span className="font-weight-500 fs-13 text-line-through text-body mr-1">
                        $39.00
                      </span>
                      ₹ 3,58,755
                    </p>
                    <a href="product-detail.html" className="text-secondary">
                      Cleansing Balm
                    </a>
                  </div>
                  <div className="position-relative ml-auto">
                    <div className="input-group">
                      <a
                        
                        className="down position-absolute pos-fixed-left-center pl-2"
                      >
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        type="number"
                        className="number-cart w-90px px-6 text-center h-40px bg-input border-0"
                      />
                      <a
                        
                        className="up position-absolute pos-fixed-right-center pr-2"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer mt-auto border-0 bg-transparent px-6 pb-0 pt-5">
            <div className="d-flex align-items-center mb-2">
              <span className="text-secondary fs-15">Total price:</span>
              <span className="d-block ml-auto fs-24 font-weight-bold text-secondary">
                $106.00
              </span>
            </div>
            <a
              href="checkout.html"
              className="btn btn-secondary btn-block mb-3 bg-hover-primary border-hover-primary"
            >
              Check Out
            </a>
            <a
              href="shopping-cart.html"
              className="btn btn-outline-secondary btn-block"
            >
              View Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
