import React from "react";
import Team from "./Team";
import Center from "../common/Center/center";
import CompleteCard from "../common/Card/completeCard";
import Clash from "../common/Center/clash";
import Collection from "./Collection";
import Offers from "../common/Center/Offers";
import Features from "./Features";
//import Imgcardsec from "../Carousel/Img_card";
import Pickcarousel from "../Carousel/Pick_carousel";
import Shopbycategory from "../Carousel/ShopCategory";
import ShopCateroryview from "../Carousel/ShopCateroryview";
import Carouselsliders from "../Carousel/Carousel";
import Reviewsec from "../common/Center/Reviewsec";
import Scrollup from "./Data/Scrollup";
import Chatapp from "./Data/chatapp";
import Todo from "../Carousel/Img_card";

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Carouselsliders />
      <Chatapp />
      <Features />
      <Clash />
      <Collection />
      <Offers />
      <CompleteCard />
      <Shopbycategory />
      <ShopCateroryview />
      <Pickcarousel />
      <Center />
      <Reviewsec />
      <Team />
      <Todo />
      <Scrollup />
    </div>
  );
}

export default Home;
