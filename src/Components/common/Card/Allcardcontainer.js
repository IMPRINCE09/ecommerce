import React, { useState } from "react";
import Onpageview from "../Overview/Onpageview";
import { Link } from "react-router-dom";
import { add } from "../../Pages/Store/Storeslice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function Allcardcontainer({ item }) {
  const dispatach = useDispatch();

  const [open, setOpen] = useState(false);
  const [prev, setPrev] = useState(null);

  // const objectFilter = (cartItems) => {
  //   const result = Categoriesapi.filter((currentData) => {
  //     return currentData.cartegory === cartItems;
  //   });
  //   setData(result);
  // };
  // const detailPage = (Product) => {
  //   setDetails([{ ...Product }]);
  // };

  const addData = (alldata) => {
    setOpen(true);
    setPrev(alldata);
  };
  const handleAdd = (item) => {
    dispatach(add(item));
  };
  // useEffect(() => {
  //   dispatach(fetchproduct());
  // }, []);

  return (
    <>
      <div>
        <div className=" w-60 m-4 relative  shadow-2xl border-inherit border-2 justify-center overflow-hidden   ">
          <div>
            <Link to={`/singalProducts/${item.id}`} target="_blank">
              <img
                className=" w-full h-60 p-1/2 relative -z-10  cursor-pointer"
                src={item.src_image}
                alt="imgagesgadget"
              ></img>
            </Link>
          </div>
          <div className="absolute z-10 left-0 top-2">
            <img src={item.prohot} alt="tending-post"></img>
          </div>

          <h4 className="gap-4 ml-2 mt-1">@Resin.com || Product id :</h4>

          <p className="text-sm m-2">{item.img_decription} </p>
          <h4 className="gap-4 ml-2 mt-1">{item.cartegory}</h4>

          <h3 className="gap-4 m-2 justify-between">
            $ {item.price}
            <del> {item.price_off} </del>
            <span className="text-center text-green-600">
              {((item.price - item.price_off) / item.price) * 100} % Off
            </span>
          </h3>
          <div className="w-full  flex justify-between ">
            <button
              className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400"
              onClick={() => {
                handleAdd(item);
                toast.success("Product is added to Cart");
              }}
            >
              <i class="fa-solid fa-cart-shopping "></i>
            </button>

            <button
              className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400 "
              onClick={() => addData(item)}
            >
              view
            </button>
          </div>
        </div>
      </div>
      <Toaster />
      <Onpageview prev={prev} open={open} setOpen={setOpen} />
    </>
  );
}

export default Allcardcontainer;
