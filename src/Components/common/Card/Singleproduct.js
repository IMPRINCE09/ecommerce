import { useParams } from "react-router-dom";
import Categoriesapi from "./Cardapicartegory";
import "./Singleprduct.css";
import Specification from "./specification";
import { useDispatch } from "react-redux";
import { add } from "../../Pages/Store/Storeslice";
import toast, { Toaster } from "react-hot-toast";

function Singleproduct() {
  const { id } = useParams();
  const product = Categoriesapi.find((p) => p.id === parseInt(id));

  const dispatach = useDispatch();
  const handleAdd = (itemadd) => {
    dispatach(add(itemadd));
  };
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="w-full m-2">
          <h2>
            <button className="text-lg font-medium m-1">Men</button>
            <i class="fa-solid fa-angles-right"></i>
            <button className="text-lg font-medium m-1">Women</button>
            <i class="fa-solid fa-angles-right"></i>
            <button className="text-lg font-medium m-1">T-shirt</button>
            <i class="fa-solid fa-angles-right"></i>
            <button className="text-lg font-medium m-1">Shoes</button>
            <i class="fa-solid fa-angles-right"></i>
            <button className="text-lg font-medium m-1">Covers</button>
          </h2>
        </div>
        <div className="w-full flex single_prduct">
          <div className="w-1/2 min-h-screen relative single_product_div">
            <div className="flex justify-center items-center relative -z-10">
              <img
                className="w-10/12 h-5/6  "
                src={product.src_image}
                alt="productview"
              ></img>
            </div>

            <div className="absolute top-6 right-24  bg-transparent w-14 h-14 shadow-lg rounded-full flex justify-center items-center cursor-pointer hover:text-red-600">
              <i className="fa-solid fa-heart fa-2xl"></i>
            </div>
            <div className="w-full flex button_part">
              <button
                className="w-1/2 m-4 text-white h-10 text-xl font-medium shadow-xl rounded-lg"
                style={{ background: "#fb641b" }}
                onClick={() => {
                  handleAdd(product);
                  toast.success("Product is added to Cart");
                }}
              >
                <i class="fa-solid fa-cart-shopping "></i>{" "}
                <span className="ml-2 ">ADD TO BAG</span>
              </button>
              <button
                className="w-1/2 m-4 text-white h-10 text-xl font-medium shadow-xl rounded-lg"
                style={{ background: "#ff9f00" }}
                onClick={() => toast.success("Payment Method is Disable")}
              >
                <span className="ml-2 ">BUY NOW</span>
              </button>
            </div>
          </div>
          <div className="w-1/2 p-6 text-sm div_content_data">
            <h1 className="">{product.img_decription}</h1>
            <h1 className="text-green-600 font-medium text-lg">
              Special Price
            </h1>
            <h1 className="text-black font-medium text-2xl">
              ${product.price_off}
              <del className="text-gray-600 text-base font-medium ">
                ${product.price}
              </del>
              <span className="text-green-600 font-medium text-lg">
                {((product.price - product.price_off) / product.price) * 100} %
                OFF
              </span>
            </h1>
            <Toaster />

            <div className="">
              <h1 style={{ color: " Solidblack" }} className="font-medium mt-4">
                Available Offers
              </h1>

              <div>
                <h2 style={{ color: "gray" }} className="p-1">
                  <i
                    className="fa-solid fa-tags"
                    style={{ color: "royalblue" }}
                  ></i>{" "}
                  <span style={{ color: "black" }} className="font-medium">
                    Bank OfferGet{" "}
                  </span>{" "}
                  ₹50 instant discount on first Flipkart UPI transaction on
                  order of ₹200 and above{" "}
                  <span className="font-medium" style={{ color: "blue" }}>
                    T&C
                  </span>
                </h2>
                <h2 style={{ color: "gray" }} className="p-1">
                  <i
                    className="fa-solid fa-tags"
                    style={{ color: "royalblue" }}
                  ></i>
                  <span style={{ color: "black" }} className="font-medium">
                    Bank OfferGet{" "}
                  </span>{" "}
                  5% Cashback on Flipkart Axis Bank Card{" "}
                  <span className="font-medium" style={{ color: "blue" }}>
                    T&C
                  </span>
                </h2>
                <h2 style={{ color: "gray" }} className="p-1">
                  <i
                    className="fa-solid fa-tags"
                    style={{ color: "royalblue" }}
                  ></i>
                  <span style={{ color: "black" }} className="font-medium">
                    Bank OfferGet
                  </span>
                  10% off on ICICI Bank Credit Card Transactions, up to ₹1000 on
                  orders of ₹5,000 and above
                  <span className="font-medium" style={{ color: "blue" }}>
                    T&C
                  </span>
                </h2>
                <h2 style={{ color: "gray" }} className="p-1">
                  <i
                    className="fa-solid fa-tags"
                    style={{ color: "royalblue" }}
                  ></i>{" "}
                  <span style={{ color: "black" }} className="font-medium">
                    Bank OfferGet{" "}
                  </span>{" "}
                  ₹50 instant discount on first Flipkart UPI transaction on
                  order of ₹200 and above{" "}
                  <span className="font-medium" style={{ color: "blue" }}>
                    T&C
                  </span>
                </h2>
                <h2 style={{ color: "gray" }} className="p-1">
                  <i
                    className="fa-solid fa-tags"
                    style={{ color: "royalblue" }}
                  ></i>{" "}
                  <span style={{ color: "black" }} className="font-medium">
                    Bank OfferGet{" "}
                  </span>{" "}
                  ₹50 instant discount on first Flipkart UPI transaction on
                  order of ₹200 and above{" "}
                  <span className="font-medium" style={{ color: "blue" }}>
                    T&C
                  </span>
                </h2>
                <h2 className="m-5 cursor-pointer" style={{ color: "blue" }}>
                  {" "}
                  View More Offers{" "}
                  <span>
                    <i class="fa-solid fa-angles-down"></i>
                  </span>
                </h2>
              </div>
            </div>

            <Specification />
          </div>
        </div>
      </div>
      <div>
        <h2>Related Products</h2>
        <div className=" ">
          <div className="flex flex-wrap justify-center items-center"></div>
        </div>
      </div>
    </>
  );
}
export default Singleproduct;
