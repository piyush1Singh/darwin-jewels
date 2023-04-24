import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import { CartContext } from "../CartContext";

const ProductModal = (props) => {
  const { quantity, saveToCart, setQuantity } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    saveToCart(e, props.productId);
  };

  return (
    <Modal
      className="modal-xxl"
      show={props.show}
      onHide={props.handleClose}
      size="xl"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="pt-0">
          <div className="row">
            <div className="col-md-6 pr-xl-5 mb-8 mb-md-0 pl-xl-8">
              <div className="galleries-product product galleries-product-02 position-relative">
                <div className="position-absolute pos-fixed-top-right z-index-2">
                  <div className="content-change-vertical">
                    <a
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to wishlist"
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mt-3 mr-3"
                    >
                      <svg className="icon icon-star-light fs-24"></svg>
                    </a>
                  </div>
                </div>
                <div className="view-slider-for mx-0">
                  <div className="box px-0">
                    <div className="card p-0 rounded-0 border-0">
                      <a className="card-img">
                        {Array.isArray(props.productId) &&
                        props.productId.length ? (
                          <img
                            src={`../../Admin-panel/Dashboard-admin/src/assets/productImages/${props.productId[0][3]}`}
                            alt="product gallery"
                          />
                        ) : (
                          <h1>No img Found</h1>
                        )}
                      </a>
                    </div>
                  </div>
                  {/* <div className="box px-0">
                    <div className="card p-0 rounded-0 border-0">
                      <a
                        href="images/Necklaces/1/Necklaces_1_500x500.jpg"
                        className="card-img"
                      >
                        <img
                          src="images/Necklaces/1/Necklaces_1_500x500.jpg"
                          alt="product gallery"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="box px-0">
                    <div className="card p-0 rounded-0 border-0">
                      <a href="images/bracelet/01/01.jpg" className="card-img">
                        <img
                          src="images/bracelet/01/01.jpg"
                          alt="product gallery"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="box px-0">
                    <div className="card p-0 rounded-0 border-0">
                      <a href="images/pendent/1.jpg" className="card-img">
                        <img src="images/pendent/1.jpg" alt="product gallery" />
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* <div className="view-slider-nav mx-n1">
                  <div className="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/rings/IMG_20230220_151206.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div className="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/Necklaces/1/Necklaces_1_500x500.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div className="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/bracelet/01/01.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div className="box py-4 px-1 cursor-pointer">
                    <img src="images/pendent/1.jpg" alt="product gallery" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-6 pl-xl-6 pr-xl-8">
              <p className="d-flex align-items-center mb-3">
                <span className="text-line-through">$39.00</span>
                <span className="fs-18 text-secondary font-weight-bold ml-3">
                  ₹ 3,58,755
                </span>
                <span className="badge badge-primary fs-16 ml-4 font-weight-600 px-3">
                  20%
                </span>
              </p>
              <h2 className="fs-24 mb-2">Geometric Fleur CZ Diamond Ring</h2>
              <div className="d-flex align-items-center flex-wrap mb-3 lh-12">
                <p className="mb-0 font-weight-600 text-secondary">4.86</p>
                <ul className="list-inline d-flex mb-0 px-3 rating-result">
                  <li className="list-inline-item mr-0">
                    <span className="text-primary fs-12 lh-2">
                      <i className="fas fa-star"></i>
                    </span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <span className="text-primary fs-12 lh-2">
                      <i className="fas fa-star"></i>
                    </span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <span className="text-primary fs-12 lh-2">
                      <i className="fas fa-star"></i>
                    </span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <span className="text-primary fs-12 lh-2">
                      <i className="fas fa-star"></i>
                    </span>
                  </li>
                  <li className="list-inline-item mr-0">
                    <span className="text-primary fs-12 lh-2">
                      <i className="fas fa-star"></i>
                    </span>
                  </li>
                </ul>
                <a className="pl-3 border-left border-gray-2 text-body">
                  Read 2947 reviews
                </a>
              </div>
              <p className="mb-4 mr-xl-6">
                A diamond ring is a type of jewelry that features one or more
                diamonds mounted onto a band, usually made of precious metals
                such as gold or platinum.
              </p>
              <p className="mb-2" />
              <form>
                <div className="form-group shop-swatch mb-4 d-flex align-items-center">
                  <span className="font-weight-600 text-secondary mr-4">
                    Size:
                  </span>
                  <ul className="list-inline d-flex justify-content-start mb-0">
                    <li className="list-inline-item mr-2 selected font-weight-600">
                      <a
                        className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                        data-var="full size"
                      >
                        Full size
                      </a>
                    </li>
                    <li className="list-inline-item font-weight-600">
                      <a
                        className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                        data-var="mini size"
                      >
                        Mini size
                      </a>
                    </li>
                  </ul>
                  <select
                    name="swatches"
                    className="form-select swatches-select d-none"
                    aria-label="Default select example"
                  >
                    <option selected value="full size">
                      Full size
                    </option>
                    <option value="mini size">Mini size</option>
                  </select>
                </div>
                <div className="row align-items-end no-gutters mx-n2">
                  <div className="col-sm-4 form-group px-2 mb-6">
                    <label
                      className="text-secondary font-weight-600 mb-3"
                      htmlhtmlFor="quickview-number"
                    >
                      Quantity:
                    </label>
                    <div className="input-group position-relative w-100">
                      <a className="down position-absolute pos-fixed-left-center pl-4 z-index-2">
                        <i className="far fa-minus"></i>
                      </a>
                      <input
                        name="number"
                        type="number"
                        id="quickview-number"
                        className="form-control w-100 px-6 text-center input-quality text-secondary h-60 fs-18 font-weight-bold border-0"
                        minLength={1}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                      <a className="up position-absolute pos-fixed-right-center pr-4 z-index-2">
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-8 mb-6 w-100 px-2">
                    {Array.isArray(props.productId) &&
                    props.productId.length ? (
                      <button
                        className="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
                        onClick={(e) =>
                          handleAddToCart(e, props.productId[0][0])
                        }
                      >
                        Add To Bag
                      </button>
                    ) : (
                      <h1>No Id Found</h1>
                    )}
                  </div>
                </div>
              </form>
              <div className="d-flex align-items-center flex-wrap">
                <a className="text-decoration-none font-weight-bold fs-16 mr-6 d-flex align-items-center">
                  <svg className="icon icon-star-light fs-20"></svg>
                  <span className="ml-2">Add to wishlist</span>
                </a>
                <a className="text-decoration-none font-weight-bold fs-16 d-flex align-items-center">
                  <svg className="icon icon-ShareNetwork"></svg>
                  <span className="ml-2">Share</span>
                </a>
              </div>
              <ul className="list-unstyled border-top pt-5 mt-5">
                <li className="row mb-2">
                  <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                    Sku:
                  </span>
                  <span className="d-block col-8 col-lg-10 fs-14">SF09281</span>
                </li>
                <li className="row mb-2">
                  <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                    Categories:
                  </span>
                  <span className="d-block col-8 col-lg-10 fs-14">
                    Makeup, Skincare
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
