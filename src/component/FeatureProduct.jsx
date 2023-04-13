import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandbag, BsTypeH1 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FeatureProduct = () => {
  let bgColor = {
    backgroundColor: "#f8f8f8",
  };

  //Modal start
  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState();
  const [productId, setProductId] = useState([]);

  const showProductModal = async (value) => {
    handleShow();
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Product/fetchproductbyId.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    setProductId(data);
  };

  const fetchProduct = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Ecommerce-Api/fetchallProductRandom.php"
    );
    let data = await url.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
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
                    {product?.map((value) => (
                      <div
                        className="col-lg-3 col-sm-6 mb-5 fadeInUp animated"
                        data-animate="fadeInUp"
                      >
                        <div className="card border-0 product">
                          <div className="position-relative">
                            <img
                              src={`../../Admin-panel/Dashboard-admin/src/assets/productImages/${value[3]}`}
                              alt="Facial cleanser"
                            />
                            <div className="card-img-overlay d-flex p-3">
                              <div>
                                <span className="badge badge-primary">
                                  -20%
                                </span>
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
                                  onClick={() => showProductModal(value[0])}
                                  title=""
                                  className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mb-2 d-none"
                                  data-original-title="Quick view"
                                >
                                  <span>
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
                              <span className="fs-13 font-weight-500 text-decoration-through text-body pr-1 text-crossed">
                                {(
                                  parseInt((value[4] / 100) * 10) +
                                  parseInt(value[4])
                                ).toLocaleString("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                              <span>
                                {parseInt(value[4]).toLocaleString("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                            </p>
                            <h2 className="card-title fs-15 font-weight-500 mb-2">
                              <a href="">{value[1]}</a>
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
                </div>
                <Modal
                  className="modal-xxl"
                  show={show}
                  onHide={handleClose}
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
                                    {Array.isArray(productId) && productId.length ? (
                                      <img
                                        src={`../../Admin-panel/Dashboard-admin/src/assets/productImages/${productId[0][3]}`}
                                        alt="product gallery"
                                      />
                                    ) : (
                                      <h1>No img Found</h1>
                                    )}
                                  </a>
                                </div>
                              </div>
                              <div class="box px-0">
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
                                  <a
                                    href="images/bracelet/01/01.jpg"
                                    class="card-img"
                                  >
                                    <img
                                      src="images/bracelet/01/01.jpg"
                                      alt="product gallery"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="box px-0">
                                <div class="card p-0 rounded-0 border-0">
                                  <a
                                    href="images/pendent/1.jpg"
                                    class="card-img"
                                  >
                                    <img
                                      src="images/pendent/1.jpg"
                                      alt="product gallery"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="view-slider-nav mx-n1">
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
                                <img
                                  src="images/pendent/1.jpg"
                                  alt="product gallery"
                                />
                              </div>
                            </div>
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
                          <h2 class="fs-24 mb-2">
                            Geometric Fleur CZ Diamond Ring
                          </h2>
                          <div class="d-flex align-items-center flex-wrap mb-3 lh-12">
                            <p class="mb-0 font-weight-600 text-secondary">
                              4.86
                            </p>
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
                            <a
                              href=""
                              class="pl-3 border-left border-gray-2 text-body"
                            >
                              Read 2947 reviews
                            </a>
                          </div>
                          <p class="mb-4 mr-xl-6">
                            A diamond ring is a type of jewelry that features
                            one or more diamonds mounted onto a band, usually
                            made of precious metals such as gold or platinum.
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
                              <span class="d-block col-8 col-lg-10 fs-14">
                                SF09281
                              </span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureProduct;
