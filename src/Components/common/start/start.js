import React from "react";
import "./start.css";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="w-full section_start_one  bg-gray-300 ">
      <div className="section_start_one  text-xs ml-3 shadow-lg  ">
        <Link to="#" className="ml-1 text-center">
          Offers
        </Link>
        <Link to="#" className="ml-4 text-center">
          Membership
        </Link>
        <Link to="#" className="ml-3.5 text-center">
          Download App
        </Link>
        <Link to="#" className="ml-3.5 start_contact text-center">
          Contact
        </Link>
      </div>

      <div className=" flex justify-between h-16 shadow-lg bg-slate-100 div_section_start">
        <div className=" items-center  div_img_start  flex">
          <img
            className="w-20 h-10 ml-20 pl-6 "
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/329016786/original/1075fdf4a1d0490c3d8a36ccfd321a3c69ba8659/create-a-proffesional-logo-for-your-business-or-personal-use.png"
            alt="images"
          ></img>
          <div className="mt-1 ml-4 div_content w-50">
            <Link to="#">MEN</Link>
            <Link to="#" className="ml-6">
              WOMEN
            </Link>
            <Link to="#" className="ml-6">
              ACCESSIRIES
            </Link>
          </div>
        </div>

        <div className=" mt-4 mr-6 cart_section_start">
          <i className="fa-solid fa-cart-shopping ">
            <i class="fa-solid fa-heart ml-4"></i>
          </i>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
