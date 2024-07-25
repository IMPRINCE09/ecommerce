import React from "react";
import { Link } from "react-router-dom";

function Chatapp() {
  return (
    <div>
      <div
        className=" w-16 h-8 p-1 flex items-center rounded-l shadow-lg bg-slate-100 fixed  top-32 right-0
     z-50"
      >
        <div className="w-16 text-green-400">
          <Link to="https://wa.me/9119011315" target="_blank">
            {" "}
            <i className="fa-brands fa-square-whatsapp fa-2xl"></i>
          </Link>
        </div>
      </div>
      <div
        className=" w-16 h-8 p-1 mt-4 flex items-center rounded-l shadow-lg bg-slate-100 fixed  top-40 right-0
     z-50"
      >
        <div className="w-16 text-red-600 ">
          <Link to="https://www.instagram.com/_imprince___/" target="_blank">
            {" "}
            <i className="fa-brands fa-square-instagram fa-2xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chatapp;
