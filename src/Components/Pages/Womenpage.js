import React from "react";
import Categoriesapi from "../common/Card/Cardapicartegory";
import Allcardcontainer from "../common/Card/Allcardcontainer";

function Womenpage() {
  const filterp = Categoriesapi.filter((list) => list.cartegory === "women");

  return (
    <div className="w-full">
      <div>
        <div className="text-center text-red-500 text-2xl font-semibold mt-2 hover:underline  cursor-pointer">
          Womens Products
        </div>
      </div>
      <div className="grid grid-cols-4">
        {filterp?.map((item) => {
          return (
            <div key={item.id}>
              <Allcardcontainer key={item.id} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Womenpage;
