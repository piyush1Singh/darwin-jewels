import React from "react";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const FeatureProduct = () => {
  let bgColor = {
    backgroundColor: "#f8f8f8",
  };
  return (
    <div>
      <section
        className="pt-lg-13 pb-lg-10 pt-11"
        style={bgColor}
        data-animated-id="5"
      >
        <div className="container container-xl">
          <div className="row">
            <div className="col-12">
              <h2
                className="text-heading text-center mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                Feature Products
              </h2>
              <div
                className="tab-content p-0 shadow-none"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="pills-Skincare"
                  role="tabpanel"
                  aria-labelledby="pills-Skincare-tab"
                >
                  <div className="row">
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-01.jpg"
                            alt="Facial cleanser"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title="View Product"
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                              $3,98,000
                            </span>
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Geometric Fleur CZ Diamond Ring</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-02.jpg"
                            alt="Bio-shroom Rejuvenating Serum"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Circular Diamond Studded</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-03.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-warning">New</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Silver Cubic CZ</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-04.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Enchanting Pearl Cubic Zirconia</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-05.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Delicate Geometric CZ Diamond Ring</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-06.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Artistic Elegant Floral Cubic</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-07.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-warning">New</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Delicate Geometric CZ Diamond</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-08.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Alluring Bloom Cubic Zirconia</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="pills-Bodycare"
                  role="tabpanel"
                  aria-labelledby="pills-Bodycare-tab"
                >
                  <div className="row">
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-01.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1">
                              $39.00
                            </span>
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Hollis Gorgeous Cubic Zirconia</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-02.jpg"
                            alt="Bio-shroom Rejuvenating Serum"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Bio-shroom Rejuvenating Serum</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-03.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div></div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Glinting Glorious Cubic Zirconia</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      <div className="card border-0 product">
                        <div className="position-relative">
                          <img
                            src="/src/assets/images/product/product-04.jpg"
                            alt="Coffee Bean Caffeine Eye Cream"
                          />
                          <div className="card-img-overlay d-flex p-3">
                            <div>
                              <span className="badge badge-primary">-20%</span>
                            </div>
                            <div className="my-auto w-100 content-change-vertical">
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-cart ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="View products"
                              >
                                <BsHandbag />
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                data-original-title="Quick view"
                              >
                                <span
                                  data-toggle="modal"
                                  data-target="#quick-view"
                                >
                                  <AiOutlineEye />
                                </span>
                              </a>
                              <a
                                href=""
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2"
                                data-original-title="Add to wishlist"
                              >
                                <AiOutlineStar />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-4 text-center">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span>₹ 3,58,755</span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <a href="">Delicate Geometric CZ Diamond</a>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
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
                            </ul>
                            <span className="card-text fs-14 font-weight-400 pl-2 lh-1">
                              2947 reviews
                            </span>
                          </div>
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
    </div>
  );
};

export default FeatureProduct;
