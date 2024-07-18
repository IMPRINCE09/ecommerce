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
    <div className="w-full ">
      <div className="w-full shadow-lg p-2 flex items-center justify-center">
        <button
          className="w-20 h-10 font-bold text-white bg-orange-500 m-1 shadow-lg rounded-lg"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="w-20 h-10 font-bold text-white bg-orange-500 m-1 shadow-lg rounded-lg"
          onClick={() => {
            setFilter("Men");
          }}
        >
          Men
        </button>

        <button
          className="w-20 h-10 font-bold text-white bg-orange-500 m-1 shadow-lg rounded-lg"
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
            {filterproduct.map((item) => (
              <div className=" items-center " key={item.id}>
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
