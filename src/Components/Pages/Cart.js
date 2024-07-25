import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Store/Storeslice";

function Cart() {
  const dispatach = useDispatch();
  const product = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatach(remove(productId));
  };

  const shippingCharges = 5;

  const subTotal = product.reduce(
    (acc, item) => acc + item.price_off * item.quan,
    0
  );
  const totalquantity = product.reduce((acc, item) => acc + item.quan, 0);
  localStorage.setItem("cart", product.length);

  return (
    <div className="w-full justify-center items-center mt-4 ">
      <div className=" text-center font-semibold text-black">
        <h2 className="text-orange-500 text-2xl   "> Product Cart </h2>
      </div>
      <div className=" flex justify-center items-center m-4">
        <div className="w-full max-w-fit">
          {product?.map((produc) => {
            return (
              <div className="flex border  m-2 ">
                <div className="flex">
                  <div className="w-1/2 p-4">
                    <img
                      className="w-44 h-40 rounded-lg"
                      src={produc.src_image}
                      alt="cart_section"
                    ></img>
                  </div>

                  <div className="m-4">
                    <h2 className="font-medium">{produc.img_decription}</h2>
                    <h2 className="m-2 text-green-700 font-medium">
                      $ {produc.price}
                    </h2>
                    <h2 className="m-1">{produc.cartegory}</h2>
                  </div>
                  <div className="bg-slate-100  flex justify-center items-center w-12 h-12 rounded-full shadow-lg m-3">
                    <button
                      onClick={() => handleRemove(produc.id)}
                      className=" text-orange-500 hover:text-green-500"
                    >
                      <i className="fa-solid fa-circle-xmark fa-2xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {product.length === 0 ? (
        <div className=" w-full  m-5 flex justify-center items-center">
          <div
            className="w-96 h-24 text-orange-500 text-center text-3xl font-semibold 
          shadow-lg"
          >
            This cart is Empty
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="border  ">
            <h2 className="text-black">Order Summary </h2>
            <h2 className="">
              Shipping Charges are free , and taxes are included in the price
            </h2>
            <h2>Subtotal : {subTotal} </h2>
            <h2> Total Quantity : {totalquantity}</h2>

            <h2>Shipping Charges : $5</h2>
            <h2>Total: ${subTotal + shippingCharges} </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
