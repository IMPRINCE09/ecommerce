import React from "react";
import Categoriesapi from "../../common/Card/Cardapicartegory";
import Allcardcontainer from "../../common/Card/Allcardcontainer";
import ScrollTop from "../Scrolltotop";

function Purecotton() {
  const pureproduct = Categoriesapi.filter(
    (item) => item.design === "Purecotton"
  );
  return (
    <div className="w-full ">
      <div className="w-full text-orange-500 text-center m-2 font-semibold text-2xl">
        Pure Cotton
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {pureproduct?.map((item) => {
          return (
            <div key={item.id}>
              <Allcardcontainer item={item} />
            </div>
          );
        })}
      </div>
      <ScrollTop />
    </div>
  );
}

export default Purecotton;
