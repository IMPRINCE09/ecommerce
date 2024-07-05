import React, { useEffect, useState } from "react";
import Onpageview from "../Overview/Onpageview";
import { Link } from "react-router-dom";
import { add } from "../../Pages/Store/Storeslice";
import { useDispatch, useSelector } from "react-redux";
// import { fetchproduct } from "../../Pages/Store/Productslice";
import { STATUES } from "../../Pages/Store/Productslice";

function Allcardcontainer({ item }) {
  const dispatach = useDispatch();
  const { status } = useSelector((state) => state.product);

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
  if (status === STATUES.LOADING) {
    return <h1>Loading...</h1>;
  }
  if (status === STATUES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

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
            <img
              src="https://caratglitz.com/static/media/TRENDING.b77da6eca2da40666fd7bc6d45cd7182.svg"
              alt="tending-post"
            ></img>
          </div>

          <h4 className="gap-4 ml-2 mt-1">@Resin.com || Product id :</h4>

          <p className="text-sm m-2">{item.img_decription} </p>
          <h4 className="gap-4 ml-2 mt-1">{item.cartegory}</h4>

          <h3 className="gap-4 m-2 justify-between">
            $ {item.price}
            <del> {item.price_off} </del>
            <span className="text-center text-green-600">
              {(item.price - item.price_off) / item.price} % Off
            </span>
          </h3>
          <div className="w-full  flex justify-between ">
            <button
              className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400"
              onClick={() => handleAdd(item)}
            >
              <i class="fa-solid fa-cart-shopping "></i>
            </button>

            <button
              className="w-1/3 m-4 text-center rounded shadow-2xl bg-green-400 "
              onClick={() => addData(item.values)}
            >
              view
            </button>
          </div>
        </div>
      </div>
      <Onpageview prev={prev} open={open} setOpen={setOpen} />
    </>
  );
}

export default Allcardcontainer;
