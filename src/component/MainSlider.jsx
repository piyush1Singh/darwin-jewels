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
    console.log(banner);
    return banner.map((item) => {
      console.log(item[0]);
      return (
        <div key={item}>
          <div
            style={{
              backgroundImage: `url('Admin-panel/Dashboard-admin/src/assets/bannerImages/${item[3]}')`
            }}
          />
          <p>{item[1]}</p>
          <p>{item[2]}</p>
        </div>
      );
    });
  };
  return (
    <AliceCarousel
      items={renderCarouselItems()}
      responsive={{ 0: { items: 1 }, 1024: { items: 1 } }}
      autoPlay
      infinite
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={3000}
    />
  );
};

export default MainSlider;
