import React from "react";
import "./cardcar.css";

function CardCar({ src_img, img_desc, price, price_off }) {
  
  return (
    <div className=" w-60 m-4  shadow-2xl border-inherit border-2 justify-center overflow-hidden  image_card_sec">
      <img
        className=" w-full h-60 p-1/2 trending_post  cursor-pointer"
        src={src_img}
        alt="imgages"
      ></img>

      <h4 className="gap-4 ml-2 mt-1">@Resin.com</h4>
      <p className="text-sm m-2">{img_desc} </p>

      <h3 className="gap-4 m-2 justify-between">
        <i class="fa-solid fa-indian-rupee-sign "></i> : {price}
        <del> 399 </del>
        <span className="text-center text-green-600"> {price_off} </span>
      </h3>

      <div className="w-full  flex justify-between ">
        <button className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400">
          <i class="fa-solid fa-cart-shopping "></i>
        </button>
        <button className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400">
          BUY
        </button>
      </div>
    </div>
  );
}

export default CardCar;
