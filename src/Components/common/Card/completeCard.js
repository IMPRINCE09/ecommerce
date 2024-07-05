import React, { useState } from "react";
import Allcardcontainer from "./Allcardcontainer";
import Categoriesapi from "./Cardapicartegory";

function CompleteCard() {
  const [filter, setFilter] = useState("All");

  // const filterproduct =
  //   filter === "All"
  //     ? Categoriesapi
  //     : Categoriesapi.filter((item) => item.cartegory === filter);

  // const filterproduct = (cartItems) => {
  //   const result = Categoriesapi.filter(() => {
  //     return filter.cartegory === cartItems;
  //   });
  //   setFilter(result);
  // };

  const filterproduct = Categoriesapi.filter((item) => {
    const caratglitz = filter === "All" || item.cartegory === filter;
    return caratglitz;
  });
  return (
    <div className="w-full">
      <div>
        <button
          className="w-20 h-10 bg-slate-300"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="w-20 h-10 bg-slate-300"
          onClick={() => {
            setFilter("Men");
          }}
        >
          Men
        </button>

        <button
          className="w-20 h-10 bg-slate-300"
          onClick={() => setFilter("women")}
        >
          Women
        </button>
      </div>
      <div className="">
        {filterproduct.length === 0 ? (
          <h1 className="text-center m-6 text-orange-500">
            NO Product Available
          </h1>
        ) : (
          <div className="flex flex-wrap justify-center">
            {filterproduct.map((item, idx) => (
              <div className=" items-center ">
                <Allcardcontainer item={item} key={item.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompleteCard;
