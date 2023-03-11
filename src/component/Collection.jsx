import React from "react";

const Collection = () => {
  return (
    <div>
      <section className="py-lg-13 py-11" data-animated-id="3">
        <div className="container container-xl text-center">
          <div
            className="fs-15 font-weight-600 text-uppercase letter-spacing-01 text-secondary mb-4 fadeInUp animated"
            data-animate="fadeInUp"
          ></div>
          <h2
            className="mw-675 mx-auto mb-4 fadeInUp animated"
            data-animate="fadeInUp"
          >
            Featured Collection
          </h2>
          <p className="fs-15 font-weight-600 text-uppercase letter-spacing-01 text-secondary mb-7">
            Let's Take a Glimpse of our trending collections before diving in!{" "}
          </p>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="card border-0 mb-lg-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <a href="" className="hover-zoom-in hover-shine">
                  <img
                    src="/src/assets/images/collection/collection-01.jpg"
                    alt="Bodycare"
                  />
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title mb-1">
                    <a href="">Earrings</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="card border-0 mb-lg-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <a href="" className="hover-zoom-in hover-shine">
                  <img
                   src="/src/assets/images/collection/collection-02.jpg"
                    alt="Skincare"
                  />
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title mb-1">
                    <a href="">Bangles</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="card border-0 mb-lg-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <a href="" className="hover-zoom-in hover-shine">
                  <img
                   src="/src/assets/images/collection/collection-03.jpg"
                    alt="Accessories"
                  />
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title mb-1">
                    <a href="">Necklaces</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="card border-0 mb-lg-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <a href="" className="hover-zoom-in hover-shine">
                  <img
                     src="/src/assets/images/collection/collection-01.jpg"
                    alt="Haircare"
                  />
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title mb-1">
                    <a href="">Pendant</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
