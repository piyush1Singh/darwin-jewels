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
    setBanner(data);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const renderCarouselItems = () => {
    return banner.map((item) => {
      return (
        <section cla="mx-0 slick-slider dots-inner-center custom-slider-02 slider">
          <div
            className="item"
            style={{
              backgroundImage: `url(../../Admin-panel/Dashboard-admin/src/assets/bannerImages/${item[3]})`,
            }}
          >
            <div className="container">
              <div className="py-lg-17">
                <p className="slider-p"> {item[1]}</p>
                <h2
                  className="fs-md-68"
                  style={{ overflow: "visible", width: "50%" }}
                >
                  {item[2]}
                </h2>
                <a className="">
                  Discover Now
                  <AiOutlineArrowRight />
                </a>
              </div>
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
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={3000}
    />
  );
};

export default MainSlider;
