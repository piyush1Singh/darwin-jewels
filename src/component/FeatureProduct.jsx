import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandbag, BsTypeH1 } from "react-icons/bs";

import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";

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
                    {product?.map((value, key) => (
                      <div
                        key={key}
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
                                  -10%
                                </span>
                              </div>
                              <div className="my-auto w-100 content-change-vertical">
                                <a
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
                              <Link to={"/product/" + value[0]}>
                                {value[1]}
                              </Link>
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
                <ProductModal
                  show={show}
                  productId={productId}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureProduct;
