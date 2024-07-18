import React from "react";
import Categoriesapi from "../common/Card/Cardapicartegory";
import Allcardcontainer from "../common/Card/Allcardcontainer";
import ScrollTop from "./Scrolltotop";

function Productmen() {
  const filterProductsdata = Categoriesapi.filter(
    (list) => list.cartegory === "Men"
  );
  return (
    <div className="w-full">
      <div className=" items-center">
        <div className="w-full font-medium text-2xl text-orange-500 text-center">
          Men's Products
        </div>
      </div>

      <div className="w-fill grid grid-cols-4">
        {filterProductsdata?.map((item) => {
          return (
            <div className="w-full" key={item.id}>
              <Allcardcontainer item={item} />
            </div>
          );
        })}
      </div>
      <ScrollTop />
    </div>
  );
}

export default Productmen;
