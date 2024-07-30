import React from "react";
import { Link } from "react-router-dom";

function Chatapp() {
  return (
    <div className="relative ">
      <div className=" fixed w-24 h-8 z-50 pl-1 bg-slate-50 text-green-500 right-0 top-32 flex items-center shadow-lg  ">
        <Link to="https://wa.me/9119011315" target="_blank">
          <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
        </Link>
      </div>
      <div className=" fixed w-24 h-8 pl-1 z-50 bg-slate-50 text-red-500 right-0 top-44 flex items-center shadow-lg ">
        <Link to="https://www.instagram.com/_imprince___/" target="_blank">
          <i class="fa-brands fa-square-instagram fa-2xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default Chatapp;
