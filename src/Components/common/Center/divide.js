import React from "react";
import "./divide.css";

function Divide() {
  return (
    <div className="w-full flex flex-wrap  justify-center gap-2 m-2 ">
      <div className="w-2/12  text-center img_Dropdown">
        <div className="text-center w-full  font-bold ">DropDown</div>
      </div>
      <div className="w-7/12   Catalog_img">
        <h4 className="text-center ">Product CataLog</h4>
        <div className="w-full flex flex-wrap gap-2 justify-center ">
          <div className="w-2/5 p-4 h-80">
            <img
              className=" h-1/2 w-full "
              src="https://img.freepik.com/free-photo/black-shirt-with-light-it-that-says-word-it_1340-38210.jpg?t=st=1718167641~exp=1718171241~hmac=e1120d3b4297a11eb6bbe386b1d755d9ef22d06824232ac008f4cec04c1affc4&w=360"
              alt=""
            ></img>
            <img
              className="mt-4 h-1/2 w-full "
              src="https://img.freepik.com/premium-photo/create-psychedelic-with-magic-mushroomed-forest-white-background-vector-style-tshirt-printing_968529-201639.jpg?w=360"
              alt=""
            ></img>
          </div>
          <div className="w-2/5 p-4 h-80">
            <img
              className="h-1/2 w-full "
              src="https://img.freepik.com/premium-photo/t-shirt-design-sample_796443-1084.jpg?w=740"
              alt=""
            ></img>
            <img
              className="mt-4 h-1/2 w-full "
              src="https://img.freepik.com/premium-photo/photo-fashion-blank-tshirt-mockup-design_919301-1158.jpg?w=740"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="w-2/12  Daily_updates"></div>
    </div>
  );
}

export default Divide;
