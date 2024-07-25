import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/common/Header/Navbar";
import ContainerPage from "./Components/Pages/latestp";
import Productmen from "./Components/Pages/Productmen";
import Womenpage from "./Components/Pages/Womenpage";
import Coversec from "./Components/Pages/Accessories/Coversec";
import Footer from "./Components/common/Footer/footer";
import Singleproduct from "./Components/common/Card/Singleproduct";
import { Provider } from "react-redux";
import store from "./Components/Pages/Store/store";
import Cart from "./Components/Pages/Cart";
import Stylish from "./Components/Pages/Data/Stylish";
import Purecotton from "./Components/Pages/Data/Purecotton";
import Designed from "./Components/Pages/Data/Designed";
import Topproduct from "./Components/Pages/Data/Topproduct";
import Allcolors from "./Components/Pages/Data/Allcolors";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productmen" element={<Productmen />} />
            <Route path="/womenpage" element={<Womenpage />} />
            <Route path="/" element={<ContainerPage />} />
            <Route path="/singalProducts/:id" element={<Singleproduct />} />
            <Route path="/Covers" element={<Coversec />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Stylish" element={<Stylish />} />
            <Route path="/Purecotton" element={<Purecotton />} />
            <Route path="/Designed" element={<Designed />} />
            <Route path="/topsproduct" element={<Topproduct />} />
            <Route path="/allcolors" element={<Allcolors />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
