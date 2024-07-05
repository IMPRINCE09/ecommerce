import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Store/Storeslice";

function Cart() {
  const dispatach = useDispatch();
  const product = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatach(remove(productId));
  };

  return (
    <div className="w-full ">
      <div className="w-full">
        <h2 color="text-orange-500 text-center"> This is Product Cart </h2>
      </div>
      <div className="w-full">
        {product?.map((produc) => {
          return (
            <div className="flex w-2/4 border shadow-lg m-2">
              <div className="w-1/2">
                {" "}
                <img
                  className="3/4"
                  src={produc.src_image}
                  alt="cart_section"
                ></img>
              </div>

              <div className="m-4 ">
                <h2 className="m-2">{produc.price}</h2>
                <h2 className="m-1">{produc.cartegory}</h2>
                <button
                  onClick={() => handleRemove(produc.id)}
                  className="bg-orange-500 text-white w-24 h-11 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
