import React from "react";

const SeasonalCollection = () => {
  let border = {
    border: "1px solid #edf1f0",
  };
  let backgroundColor = {
    backgroundColor: " #EDF1F0",
  };
  return (
    <div>
      <section data-animated-id="4" style={border}>
        <div class="row flex-img-row-reverse  mx-0">
          <div class="col-lg-6 py-xl-17 py-lg-12 py-8" style={backgroundColor}>
            <div class="mw-lg-695 ml-auto py-lg-7">
              <div class="fs-15 font-weight-600 text-uppercase letter-spacing-01 pb-4 text-secondary">
                Seasonal Collections
              </div>
              <h2 class="fs-40">
                Jewelry Inspired
                <br />
                By Beauty
              </h2>
              <p class="mb-0 fs-18 pt-1 text-body">
                A necklace is a piece of jewelry that is worn around the neck.
              </p>
              <a href="" class="btn btn-md rounded btn-light mt-6">
                Discover Now
              </a>
            </div>
          </div>
          <div class="col-lg-6  d-flex align-items-center justify-content-center py-lg-0 py-md-17 py-13 ">
            <img src="/src/assets/images/banner/banner-02.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalCollection;
