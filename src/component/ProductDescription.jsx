import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../assets/App.css";
import "../index.css";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const ProductDescription = () => {
  const params = useParams();
  const [productDesc, setProductDesc] = useState();
  const [quantity, setQuantity] = useState();
  const fetchProduct = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Product/fetchproductbyid.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: params.id,
        }),
      }
    );
    let data = await url.json();
    setProductDesc(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const saveToCart = async (e, productDesc) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Cart/addProducttoCart.php",
        {
          id: productDesc[0][0],
          quantity: quantity,
        },
        {
          withCredentials: true, // enable cookies/session support
        }
      )
      .then((response) => {
        // handle the response here
        console.log(response.data);
      })
      .catch((error) => {
        // handle the error here
        console.error(error);
      });
  };

  const ratings = (totalStar) => {
    if (totalStar == 1) {
      return (
        <li className="list-inline-item fs-12 text-primary mr-0">
          <AiFillStar />
        </li>
      );
    } else if (totalStar == 2) {
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
        </>
      );
    } else if (totalStar == 3) {
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
        </>
      );
    } else if (totalStar == 4) {
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
        </>
      );
    } else if (totalStar == 5) {
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
        </>
      );
    } else {
    }
  };

  return (
    <Sidebar>
      {productDesc != undefined ? (
        <section
          className="pt-11 pb-11 pb-lg-15 product-details-layout-5"
          data-animated-id="2"
        >
          <div className="container container-xl">
            <div className="row">
              <div
                className="col-md-6 mb-8 mb-md-0 primary-gallery summary-sticky pr-xl-9"
                id="summary-sticky"
              >
                <div className="primary-summary-inner">
                  <div className="galleries-product galleries-product-01 position-relative d-flex ">
                    <div
                      className="slick-slider slider-for mx-0 pl-xl-5 slick-initialized slick-vertical"
                      data-slick-options='{"slidesToShow": 1,"vertical":true, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav","responsive":[{"breakpoint": 1200,"settings": {"vertical": false}}]}'
                    >
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div
                            className="box px-0 slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div className="card p-0 rounded-0 border-0">
                              <a
                                href="images/Necklaces/3/2.jpg"
                                className="card-img"
                                data-gtf-mfp="true"
                                data-gallery-id="02"
                                tabIndex="-1"
                              >
                                <img src={productDesc[0][3]} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <p className="d-flex align-items-center mb-3">
                  <span className="text-line-through">{productDesc[0][4]}</span>
                  <span className="fs-18 text-secondary font-weight-bold ml-3">
                    ₹ 3,41,672
                  </span>
                  <span className="badge badge-primary fs-16 ml-4 font-weight-600 px-3">
                    20%
                  </span>
                </p>
                <h2 className="fs-24 mb-2">{productDesc[0][1]}</h2>
                <div className="d-flex align-items-center flex-wrap mb-3 lh-12">
                  <p className="mb-0 font-weight-600 text-secondary">
                    {productDesc[0][5]}
                  </p>
                  <ul className="list-inline d-flex mb-0 px-3 rating-result">
                    {ratings(productDesc[0][5])}
                  </ul>
                  <a className="pl-3 border-left border-gray-2 text-body">
                    Read 2947 reviews
                  </a>
                </div>
                <p className="mb-5">{productDesc[0][2]}</p>

                <form>
                  <div className="form-group shop-swatch mb-5 d-flex align-items-center">
                    <span className="font-weight-600 text-secondary mr-4">
                      Size:
                    </span>
                    <ul className="list-inline d-flex justify-content-start mb-0">
                      <li className="list-inline-item mr-2 selected font-weight-600">
                        <a
                          href="#"
                          className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                          data-var="full size"
                        >
                          Full size
                        </a>
                      </li>
                      <li className="list-inline-item font-weight-600">
                        <a
                          href="#"
                          className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                          data-var="mini size"
                        >
                          Mini size
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown bootstrap-select form-select swatches-select d-none">
                      <select
                        name="swatches"
                        className="form-select swatches-select d-none"
                        aria-label="Default select example"
                      >
                        <option selected="" value="full size">
                          Full size
                        </option>
                        <option value="mini size">Mini size</option>
                      </select>
                      <button
                        type="button"
                        tabIndex="-1"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Full size"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              Full size
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="dropdown-menu ">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-end no-gutters mx-n2">
                    <div className="col-sm-4 form-group px-2 mb-5">
                      <label
                        className="text-secondary font-weight-600 mb-3"
                        htmlFor="number"
                      >
                        Quantity:
                      </label>
                      <div className="input-group position-relative w-100">
                        <a
                          href="#"
                          className="down position-absolute pos-fixed-left-center pl-4 z-index-2"
                        >
                          <i className="far fa-minus"></i>
                        </a>
                        <input
                          minLength={1}
                          onChange={(e) => setQuantity(e.target.value)}
                          name="number"
                          type="number"
                          id="number"
                          className="form-control w-100 px-6 text-center input-quality text-secondary h-60 fs-18 font-weight-bold border-0"
                          value="1"
                        />
                        <a
                          href="#"
                          className="up position-absolute pos-fixed-right-center pr-4 z-index-2"
                        >
                          <i className="far fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-8 mb-5 w-100 px-2">
                      <button
                        onClick={(e) => saveToCart(e, productDesc[0][0])}
                        type="submit"
                        className="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center flex-wrap">
                  <a
                    href="#"
                    className="text-decoration-none font-weight-bold fs-16 mr-6 d-flex align-items-center"
                  >
                    <svg className="icon icon-star-light fs-20"></svg>
                    <span className="ml-2">Add to wishlist</span>
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none font-weight-bold fs-16 d-flex align-items-center"
                  >
                    <svg className="icon icon-ShareNetwork fs-20"></svg>
                    <span className="ml-2">Share</span>
                  </a>
                </div>
                <ul className="list-unstyled border-top pt-4 mt-5 mb-lg-9 mb-7">
                  <li className="row mb-2">
                    <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                      Sku:
                    </span>
                    <span className="d-block col-8 col-lg-10">SF09281</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                      Categories:
                    </span>
                    <span className="d-block col-8 col-lg-10">
                      Makeup, Skincare
                    </span>
                  </li>
                </ul>
                <div id="accordion-style" className="accordion">
                  <div className="card border-0 mb-4">
                    <div
                      className="card-header border-0 p-0 bg-transparent bg-transparent"
                      id="headingProductDetail"
                    >
                      <h5 className="mb-0 fs-24 w-100">
                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom pb-2 text-decoration-none"
                          data-toggle="collapse"
                          data-target="#product-detail"
                          aria-expanded="true"
                          aria-controls="product-detail"
                        >
                          <span>Product Detail</span>
                          <span className="icon d-inline-block ml-auto"></span>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="product-detail"
                      className="collapse show"
                      aria-labelledby="headingProductDetail"
                      data-parent="#accordion-style"
                    >
                      <div className="card-body pt-5 pb-1 px-0">
                        <p className="font-weight-600 text-secondary mb-2">
                          Delicate Geometric CZ Diamond
                        </p>
                        <p className="mb-2">
                          Behold the majesty of our Tomb Shaped 18kt Rose Gold
                          Real Diamond Ring! Meticulously crafted and adorned
                          with sparkling diamonds, this ring exudes elegance and
                          luxury. Perfect for special occasions or everyday
                          wear, it's a timeless piece that will leave a lasting
                          impression
                        </p>

                        <p className="font-weight-600 text-secondary mb-2">
                          Benefits
                        </p>
                        <ul className="pl-3 mb-5">
                          <li className="mb-1">
                            Buildable medium-to-full coverage
                          </li>
                          <li className="mb-1">
                            Weightless, airy feel—no caking!
                          </li>
                          <li className="mb-1">Long-wearing</li>
                          <li className="mb-1">Evens skin tone</li>
                          <li>
                            Available in 07 shades (all exclusive to
                            Makeaholic!)
                          </li>
                        </ul>
                        <div className="row">
                          <div className="col-6 col-md-3 text-center mb-6">
                            <img
                              src="images/Necklaces/neckless/01.jpg"
                              alt=""
                            />
                          </div>
                          <div className="col-6 col-md-3 text-center mb-6">
                            <img src="images/product/product-02.jpg" alt="" />
                          </div>
                          <div className="col-6 col-md-3 text-center mb-6">
                            <img src="images/product/product-03.jpg" alt="" />
                          </div>
                          <div className="col-6 col-md-3 text-center mb-6">
                            <img src="images/product/product-04.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>No Data Found</h1>
      )}
      <Footer />
    </Sidebar>
  );
};

export default ProductDescription;
