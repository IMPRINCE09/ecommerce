import React from "react";

function Features() {
  return (
    <div className="w-full flex flex-wrap gap-8   justify-center   bg-slate-100 min-h-20 p-6">
      <div className="w-32 p-2 border-2 border-inherit shadow-2xl text-center">
        <i
          class="fa-solid fa-cart-shopping fa-3x "
          style={{ color: "dodgerblue" }}
        ></i>
        <p className="text-center">Add Cart</p>
      </div>
      <div className="w-32 p-2 border-2 border-inherit shadow-2xl  text-center">
        <i class="fa-brands fa-sketch fa-3x " style={{ color: "Tomato" }}></i>
        <p className="text-center">Hot Deals</p>
      </div>
      <div className="w-32 p-2 border-2 border-inherit shadow-2xl text-center">
        <i
          class="fa-brands fa-ideal fa-3x"
          style={{ color: "mediumslateblue" }}
        ></i>
        <p className="text-center">Hot Deals</p>
      </div>
      <div className="w-32 p-2 border-2 border-inherit shadow-2xl text-center">
        <i class="fa-solid fa-house fa-3x" style={{ color: "#fb8a0b" }}></i>
        <p className="text-center">Hot Deals</p>
      </div>
      <div className="w-32 p-2 border-2 border-inherit shadow-2xl text-center">
        <i
          class="fa-solid fa-indian-rupee-sign fa-3x"
          style={{ color: "#00c000" }}
        ></i>
        <p className="text-center">Hot Deals</p>
      </div>
    </div>
  );
}

export default Features;
