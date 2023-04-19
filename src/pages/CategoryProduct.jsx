import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import { useParams } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"

const CategoryProduct = () => {
  const param = useParams();
  const [categories, setCategories] = useState();
  const fetchProductCategory = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Product/fetchProductbyCategories.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: param.id,
        }),
      }
    );
    let data = await url.json();
    setCategories(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProductCategory();
  }, []);

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
    <>
      <Sidebar>
        <section className="py-2 bg-gray-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-site py-0 d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <a
                    className="text-decoration-none text-body"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active pl-0 d-flex align-items-center"
                  aria-current="page"
                >
                  Shop Grid layout
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section>
          <div className="container container-xl">
            <h2 className="text-center mt-9 mb-8">Product</h2>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p className="fs-18 font-weight-500 my-lg-0 my-2">
                We found{" "}
                <strong className="font-weight-bold text-secondary">95</strong>
                products available for you
              </p>
              <div className="d-flex align-items-center">
                <div className="dropdown show lh-1 rounded ml-lg-5 ml-0">
                  <a
                    href="#"
                    className="dropdown-toggle custom-dropdown-toggle text-decoration-none text-secondary p-3 mw-210 position-relative d-block"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Default Sorting
                  </a>
                  <div
                    className="dropdown-menu custom-dropdown-item"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Price high to low
                    </a>
                    <a className="dropdown-item" href="#">
                      Price low to high
                    </a>
                    <a className="dropdown-item" href="#">
                      Random
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-7 pb-11 pb-lg-13">
          <div className="container container-xl">
            <div className="row">
              <div
                className="col-lg-3 primary-sidebar sidebar-sticky pr-lg-8 d-lg-block d-none"
                id="sidebar"
              >
                <div className="primary-sidebar-inner">
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Categories</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a
                            href="#"
                            className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none"
                          >
                            BODY CARE
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="#"
                            className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none"
                          >
                            Skin care
                          </a>
                          <ul className="list-unstyled ml-5 mt-2 mb-5">
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Cleanser
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Toner
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Scrubs & Masks
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Serum
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Face Oils
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Moisturizer
                              </a>
                            </li>
                            <li className="mb-1">
                              <a href="#" className="text-body hover-secondary">
                                Eye Cream
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mb-2">
                          <a
                            href="#"
                            className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none"
                          >
                            Hair CARE
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="#"
                            className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none"
                          >
                            ACCESSORIES
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Hightlight</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Best Seller
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            New Arrivals
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Sale
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Hot Items
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Price</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            <span>All</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            <span>$50</span>
                            <span> - </span>
                            <span>$99</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            <span>$100</span>
                            <span> - </span>
                            <span>$499</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            <span>$500</span>
                            <span> - </span>
                            <span>$2000</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Size</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Single
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            5 Pack
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Full size
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="text-body hover-secondary">
                            Mini size
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Color</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0 widget-color d-flex flex-column">
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item"></span>
                            <span className="ml-2">Black</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item border"></span>
                            <span className="ml-2">White</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item"></span>
                            <span className="ml-2">Pink</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item"></span>
                            <span className="ml-2">Maroon</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item"></span>
                            <span className="ml-2">Red</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center text-body text-decoration-none"
                          >
                            <span className="d-block item"></span>
                            <span className="ml-2">Dark Heathe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h3 className="card-title fs-20 mb-3">Tags</h3>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            Cleansing
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            Make up
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            eye cream
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            nail
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            oil
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            shampoo
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            coffee bean
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            healthy
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            skin care
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a href="#" className="text-body hover-secondary">
                            sale
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {categories?.map((value, key) => (
                    <div className="col-xl-4 col-lg-4 col-md-6" key={key}>
                      <div
                        className="card border-0 product mb-6"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src={value[3]}
                            alt="Geometric
                                                        Fleur CZ Diamond Ring"
                          />
                          <div className="card-img-overlay d-flex p-3 flex-column">
                            <div className="mb-auto d-flex justify-content-center">
                              <div>
                                <span className="badge badge-primary"></span>
                              </div>
                              <div className="w-100 content-change-vertical">
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="Add to wishlist"
                                  className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2"
                                >
                                  <svg className="icon icon-star-light fs-20"></svg>
                                </a>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="Quick view"
                                  className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2 d-none"
                                >
                                  <span
                                    data-toggle="modal"
                                    data-target="#quick-view"
                                  >
                                    <svg className="icon icon-eye-light fs-20"></svg>
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="View Product"
                                  className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2 d-none"
                                >
                                  <span
                                    data-toggle="modal"
                                    data-target="#View Product"
                                  >
                                    <svg className="icon icon-shopping-bag-open-light fs-20"></svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="text-center">
                              <a
                                href="shopping-cart.html"
                                className="btn btn-secondary bg-hover-primary border-hover-primary lh-12"
                              >
                                Add To Bag
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-4 text-center px-0">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                              ₹ 3,58,755
                            </span>
                            <span>{value[4]}</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="product-detail.html">{value[1]}</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                            {ratings(value[6])}
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <nav className="pt-3">
                  <ul className="pagination justify-content-center align-items-center mb-0 fs-16 font-weight-600">
                    <li className="page-item fs-18 d-none d-sm-block">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                        tabIndex="-1"
                      >
                        <i className="far fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        16
                      </a>
                    </li>
                    <li className="page-item fs-18 d-none d-sm-block">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        href="#"
                      >
                        <i className="far fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Sidebar>
    </>
  );
};

export default CategoryProduct;