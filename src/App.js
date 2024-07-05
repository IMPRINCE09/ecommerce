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

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Productmen />} />
            <Route path="/" element={<Womenpage />} />
            <Route path="/" element={<ContainerPage />} />
            <Route path="/singalProducts/:id" element={<Singleproduct />} />
            <Route path="/Covers" element={<Coversec />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
