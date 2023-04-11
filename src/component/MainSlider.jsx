import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const MainSlider = () => {
  const [banner, setBanner] = useState([]);

  const fetchBanner = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/fetchallBanner.php"
    );
    let data = await url.json();
    // console.log(data);
    setBanner(data);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const renderCarouselItems = () => {
    return banner.map((item) => {
      return (
        <section class="mx-0 slick-slider dots-inner-center custom-slider-02 slider">
        <div class="box px-0"  key={item[0]}>
          <div
          className="slider-responsive bg-img-cover-center"
            style={{
              backgroundImage: `url(../../Admin-panel/Dashboard-admin/src/assets/bannerImages/${item[3]})`,
              height: "850px",
              backgroundSize:"cover",
              backgroundPosition:"center",
              backgroundRepeat:"no-repet"
            }}
          />
          <div className="container container-xl">
            <div>
              <p className="text-black margin-bottom-5 font-weight-600 fs-24 lh-15">
                ${item[1]}
              </p>
              <h1 className="text-black font-weight-500 margin-bottom-10 fs-21  fs-md-68 lh-128">
                ${item[2]}
              </h1>
            </div>
            <a
              href=""
              className="btn btn-link btn-light bg-transparent text-white border-bottom border-0 rounded-0 p-0 fs-16 font-weight-600 border-2x mobile-display"
              data-animate="fadeInUp"
            >
              Discover Now
            </a>
          </div>
        </div>
        </section>
      );
    });
  };
  return (
    <AliceCarousel
      items={renderCarouselItems()}
      responsive={{ 0: { items: 1 }, 1024: { items: 1 } }}
      autoPlay
      infinite
      // disableDotsControls
      disableButtonsControls
      autoPlayInterval={3000}
    />
  );
};

export default MainSlider;
