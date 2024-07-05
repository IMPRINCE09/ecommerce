import React from "react";
import Slider from "react-slick";

function ShopCateroryview() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mt-10 mb-5 shadow-2xl">
      <h1 className="text-center">Shop By Category - Women</h1>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-1-1717767107.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-2-1717767107.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-8-1717767109.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-10-1717767110.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-6-1717767108.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-11-1717767111.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
      </Slider>
    </div>
  );
}

export default ShopCateroryview;
