import React, { useState } from "react";
import Coverapi from "./Coversapi";

function Coversec() {
  const [dataCovers, setdataCovers] = useState(Coverapi);

  return (
    <div className=" w-full  justify-center items-center">
      {dataCovers.map((val) => {
        const { id, cover_image1, title, total_price, dicount_price } = val;
        return (
          <div className="w-1/5 m-4" key={id}>
            <div className=" bg-white rounded-xl shadow-md overflow-hidden ">
              <div className="">
                <div className="">
                  <img
                    className="h-48 w-full  rounded-lg "
                    src={cover_image1}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {title}
                  </div>

                  <button className="text-center items-center  border bg-transparent shadow-lg rounded-lg  w-full mt-2 text-gray-300  flex justify-between text-lg font-medium pl-12 ">
                    {" "}
                    Wishlist{" "}
                    <span className="float-right m-2 hover:text-red-500 ">
                      <i className=" fa-solid fa-heart fa-xl  "></i>
                    </span>
                  </button>

                  <button className="text-center items-center  border bg-transparent shadow-lg rounded-lg  w-full mt-2 text-gray-300  flex justify-between text-lg font-medium pl-12 ">
                    {" "}
                    Wishlist{" "}
                    <span className="float-right m-2 hover:text-red-500 ">
                      <i className=" fa-solid fa-heart fa-xl  "></i>
                    </span>
                  </button>
                  <button className="text-center items-center  border bg-transparent shadow-lg rounded-lg  w-full mt-2 text-gray-300  flex justify-between text-lg font-medium pl-12 ">
                    {" "}
                    Wishlist{" "}
                    <span className="float-right m-2 hover:text-red-500 ">
                      <i className=" fa-solid fa-heart fa-xl  "></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Coversec;
