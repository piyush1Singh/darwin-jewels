import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Category = () => {
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  const items = [
    <div className="slick-slide item" data-value="1">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage: "url('./src/assets/images/category/charms.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Charms</h3>
        </div>
      </div>
    </div>,
    <div className="slick-slide item" data-value="2">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage: "url('./src/assets/images/category/bracelet.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Bracelets</h3>
          <div></div>
        </div>
      </div>
    </div>,
    <div className="slick-slide item" data-value="2">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage: "url('./src/assets/images/category/ring.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Rings</h3>
        </div>
      </div>
    </div>,
    <div className="slick-slide item" data-value="2">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage: "url('./src/assets/images/category/earrings.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Earings</h3>
        </div>
      </div>
    </div>,
    <div className="slick-slide item" data-value="2">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage: "url('./src/assets/images/category/necklace.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Necklaces</h3>
        </div>
      </div>
    </div>,
    <div className="slick-slide item" data-value="2">
      <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
        <div
          className="card-img bg-img-cover-center"
          style={{
            backgroundImage:
              "url('./src/assets/images/category/mangalsutra.jpg')",
          }}
        ></div>
        <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
          <h3 className="card-title center-text-color fs-26">Mangalsutra</h3>
        </div>
      </div>
    </div>,
  ];
  return (
    <section className="ptb-60">
      <div className="container">
        <h2 className="category-title">Shop By Category</h2>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          autoPlayInterval={2000}
          animationDuration={2000}
          autoPlay
          infinite
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </div>
    </section>
  );
};

export default Category;
