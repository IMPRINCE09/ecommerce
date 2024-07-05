import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
function Carouselsliders() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 30,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className=" carousel_img  ">
        <img
          className="w-full h-full"
          alt="img"
          src="https://images.bewakoof.com/uploads/grid/app/SALE-1X1-common-endstomorrow-1718111087.gif"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full"
          alt="img"
          src="https://images.bewakoof.com/uploads/grid/app/X1-Sneakers-Launch-nasa--1--1717775664.jpg"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full "
          src="https://images.bewakoof.com/uploads/grid/app/HC---1X1-twice-as-nice---common-1718284306.jpg"
          alt="img"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full"
          src="https://images.bewakoof.com/uploads/grid/app/1x1-June-dotw-common-1718347588.jpg"
          alt="img"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full"
          src="https://images.bewakoof.com/uploads/grid/app/1x1-June-texturedtopwear-common-1718284309.jpg"
          alt="img"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full"
          src="https://images.bewakoof.com/uploads/grid/app/1x1-June-dotw-common-1718347588.jpg"
          alt="img"
        ></img>
      </div>
      <div className="carousel_img">
        <img
          className="w-full h-full"
          src="https://images.bewakoof.com/uploads/grid/app/1x1-trio-common--5--1718284307.jpg"
          alt="img"
        ></img>
      </div>
    </Slider>
  );
}

export default Carouselsliders;
