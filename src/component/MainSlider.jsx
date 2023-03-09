import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const items = [
  <div
    className="item"
    data-value="1"
    style={{
      backgroundImage: "url(./src/assets/images/banner/bg-slider-01.jpg)",
    }}
  >
    <div className="container">
      <div className="py-lg-17">
        <p className="">Shop Our Set</p>
        <h2 className="fs-md-68">
          Majestic Bloom <br />
          Gemstone
        </h2>
        <a className="">
          Discover Now
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  </div>,
  <div
    className="item"
    data-value="1"
    style={{
      backgroundImage: "url(./src/assets/images/banner/bg-slider-02.jpg)",
    }}
  >
    <div className="container">
      <div className="py-lg-17">
        <p className="">Shop Our Set</p>
        <h2 className="fs-md-68">
          Majestic Bloom <br />
          Gemstone
        </h2>
        <a className="">
          Discover Now
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  </div>,
  <div
    className="item"
    data-value="1"
    style={{
      backgroundImage: "url(./src/assets/images/banner/bg-slider-03.jpg)",
    }}
  >
    <div className="container">
      <div className="py-lg-17">
        <p className="">Shop Our Set</p>
        <h2 className="fs-md-68">
          Majestic Bloom <br />
          Gemstone
        </h2>
        <a className="">
          Discover Now
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  </div>,
];

const MainSlider = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={2000}
    animationDuration={2000}
    animationType="fadein"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
  />
);

export default MainSlider;
