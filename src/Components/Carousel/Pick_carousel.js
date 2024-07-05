import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Pickcarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/Double-the-style-Bottomwear-for-1499-COMMON-1x1-Banner-1717767783.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/uploads/grid/app/HC---1X1-pajamas-common--3--1717402511.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          {" "}
          <img
            src="https://images.bewakoof.com/uploads/grid/app/1xx1-June-texturedshirt-01-1718198462.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          {" "}
          <img
            src="https://images.bewakoof.com/uploads/grid/app/HC---1X1-2-ezgif-com-optimize--1--1717780638.gif"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          {" "}
          <img
            src="https://images.bewakoof.com/uploads/grid/app/1x1-summershirts-common-1717402266.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
        <div>
          {" "}
          <img
            src="https://images.bewakoof.com/uploads/grid/app/HC---1X1-common-1717165112.jpg"
            alt="images"
            className="w-full"
          ></img>
        </div>
      </Slider>
    </div>
  );
}

export default Pickcarousel;
