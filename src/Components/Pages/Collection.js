import React from "react";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <div className=" w-full mt-20 mb-20">
      <h2 className="text-center text-4xl font-medium p-5">Top Collections</h2>
      <div className="w-full  ">
        <div className=" flex flex-wrap gap-2 justify-center cursor-pointer">
          <Link to="/Stylish">
            {" "}
            <img
              className="w-72 h-72 cursor-pointer"
              src="https://img.freepik.com/premium-psd/still-life-blank-shirt-mockup_23-2149754468.jpg?w=826"
              alt="img1"
            ></img>
          </Link>
          <Link to="/Purecotton">
            <img
              className="w-72  h-72 cursor-pointer"
              src="https://img.freepik.com/free-vector/flat-duotone-seaside-sunset-marathon-t-shirt_742173-13898.jpg?t=st=1718103090~exp=1718106690~hmac=9b5a4379ad735af2d6c7bfa0e89af10694a47c6e14492474a126c723be132250&w=360"
              alt="img2"
            ></img>
          </Link>
          <Link to="/Designed">
            <img
              className="w-72 h-72 cursor-pointer"
              src="https://img.freepik.com/premium-psd/luxury-black-tshirt-mockup-psd_947007-19.jpg?w=360"
              alt="img3"
            ></img>
          </Link>
          <Link to="/topsproduct">
            <img
              className="w-72 h-72 cursor-pointer"
              src="https://img.freepik.com/premium-psd/woman-holding-leafy-white-pillow-mockup_53876-115776.jpg?w=826"
              alt="img4"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Collection;
