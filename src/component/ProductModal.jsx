import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ProductModal = (props) => {
  console.log(props.show);
console.log(props.productId)

 
  return (
    <Modal
      className="modal-xxl"
      show={props.show}
      onHide={props.handleClose}
      size="xl"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div class="pt-0">
          <div class="row">
            <div class="col-md-6 pr-xl-5 mb-8 mb-md-0 pl-xl-8">
              <div class="galleries-product product galleries-product-02 position-relative">
                <div class="position-absolute pos-fixed-top-right z-index-2">
                  <div class="content-change-vertical">
                    <a
                      href=""
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to wishlist"
                      class="add-to-wishlist d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mt-3 mr-3"
                    >
                      <svg class="icon icon-star-light fs-24"></svg>
                    </a>
                  </div>
                </div>
                <div class="view-slider-for mx-0">
                  <div class="box px-0">
                    <div class="card p-0 rounded-0 border-0">
                      <a href="" class="card-img">
                        {Array.isArray(props.productId) && props.productId.length ? (
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
                  {/* <div class="box px-0">
                    <div class="card p-0 rounded-0 border-0">
                      <a
                        href="images/Necklaces/1/Necklaces_1_500x500.jpg"
                        class="card-img"
                      >
                        <img
                          src="images/Necklaces/1/Necklaces_1_500x500.jpg"
                          alt="product gallery"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="box px-0">
                    <div class="card p-0 rounded-0 border-0">
                      <a href="images/bracelet/01/01.jpg" class="card-img">
                        <img
                          src="images/bracelet/01/01.jpg"
                          alt="product gallery"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="box px-0">
                    <div class="card p-0 rounded-0 border-0">
                      <a href="images/pendent/1.jpg" class="card-img">
                        <img src="images/pendent/1.jpg" alt="product gallery" />
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* <div class="view-slider-nav mx-n1">
                  <div class="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/rings/IMG_20230220_151206.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div class="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/Necklaces/1/Necklaces_1_500x500.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div class="box py-4 px-1 cursor-pointer">
                    <img
                      src="images/bracelet/01/01.jpg"
                      alt="product gallery"
                    />
                  </div>
                  <div class="box py-4 px-1 cursor-pointer">
                    <img src="images/pendent/1.jpg" alt="product gallery" />
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-md-6 pl-xl-6 pr-xl-8">
              <p class="d-flex align-items-center mb-3">
                <span class="text-line-through">$39.00</span>
                <span class="fs-18 text-secondary font-weight-bold ml-3">
                  ₹ 3,58,755
                </span>
                <span class="badge badge-primary fs-16 ml-4 font-weight-600 px-3">
                  20%
                </span>
              </p>
              <h2 class="fs-24 mb-2">Geometric Fleur CZ Diamond Ring</h2>
              <div class="d-flex align-items-center flex-wrap mb-3 lh-12">
                <p class="mb-0 font-weight-600 text-secondary">4.86</p>
                <ul class="list-inline d-flex mb-0 px-3 rating-result">
                  <li class="list-inline-item mr-0">
                    <span class="text-primary fs-12 lh-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </li>
                  <li class="list-inline-item mr-0">
                    <span class="text-primary fs-12 lh-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </li>
                  <li class="list-inline-item mr-0">
                    <span class="text-primary fs-12 lh-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </li>
                  <li class="list-inline-item mr-0">
                    <span class="text-primary fs-12 lh-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </li>
                  <li class="list-inline-item mr-0">
                    <span class="text-primary fs-12 lh-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </li>
                </ul>
                <a href="" class="pl-3 border-left border-gray-2 text-body">
                  Read 2947 reviews
                </a>
              </div>
              <p class="mb-4 mr-xl-6">
                A diamond ring is a type of jewelry that features one or more
                diamonds mounted onto a band, usually made of precious metals
                such as gold or platinum.
              </p>
              <p class="mb-2" />
              <form>
                <div class="form-group shop-swatch mb-4 d-flex align-items-center">
                  <span class="font-weight-600 text-secondary mr-4">
                    Size:{" "}
                  </span>
                  <ul class="list-inline d-flex justify-content-start mb-0">
                    <li class="list-inline-item mr-2 selected font-weight-600">
                      <a
                        href=""
                        class="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                        data-var="full size"
                      >
                        Full size
                      </a>
                    </li>
                    <li class="list-inline-item font-weight-600">
                      <a
                        href=""
                        class="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                        data-var="mini size"
                      >
                        Mini size
                      </a>
                    </li>
                  </ul>
                  <select
                    name="swatches"
                    class="form-select swatches-select d-none"
                    aria-label="Default select example"
                  >
                    <option selected value="full size">
                      Full size
                    </option>
                    <option value="mini size">Mini size</option>
                  </select>
                </div>
                <div class="row align-items-end no-gutters mx-n2">
                  <div class="col-sm-4 form-group px-2 mb-6">
                    <label
                      class="text-secondary font-weight-600 mb-3"
                      for="quickview-number"
                    >
                      Quantity:{" "}
                    </label>
                    <div class="input-group position-relative w-100">
                      <a
                        href=""
                        class="down position-absolute pos-fixed-left-center pl-4 z-index-2"
                      >
                        <i class="far fa-minus"></i>
                      </a>
                      <input
                        name="number"
                        type="number"
                        id="quickview-number"
                        class="form-control w-100 px-6 text-center input-quality text-secondary h-60 fs-18 font-weight-bold border-0"
                        value="1"
                        required
                      />
                      <a
                        href=""
                        class="up position-absolute pos-fixed-right-center pr-4 z-index-2"
                      >
                        <i class="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-8 mb-6 w-100 px-2">
                    <button
                      type="submit"
                      class="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
                    >
                      Add To Bag
                    </button>
                  </div>
                </div>
              </form>
              <div class="d-flex align-items-center flex-wrap">
                <a
                  href=""
                  class="text-decoration-none font-weight-bold fs-16 mr-6 d-flex align-items-center"
                >
                  <svg class="icon icon-star-light fs-20"></svg>
                  <span class="ml-2">Add to wishlist</span>
                </a>
                <a
                  href=""
                  class="text-decoration-none font-weight-bold fs-16 d-flex align-items-center"
                >
                  <svg class="icon icon-ShareNetwork"></svg>
                  <span class="ml-2">Share</span>
                </a>
              </div>
              <ul class="list-unstyled border-top pt-5 mt-5">
                <li class="row mb-2">
                  <span class="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                    Sku:
                  </span>
                  <span class="d-block col-8 col-lg-10 fs-14">SF09281</span>
                </li>
                <li class="row mb-2">
                  <span class="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                    Categories:
                  </span>
                  <span class="d-block col-8 col-lg-10 fs-14">
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
