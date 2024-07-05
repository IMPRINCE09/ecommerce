import React from "react";
import Slider from "react-slick";

function Shopbycategory() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
  
    <div className="slider-container mt-10 shadow-md">
      <h1 className="text-center">Shop By Category - Men</h1>
      <Slider {...settings}>
        
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-1-1717767100.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-2-1717767101.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-3-1717767102.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-4-1717767102.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-5-1717767103.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-9-1717767104.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
      </Slider>
    </div>
  );
}

export default Shopbycategory;
