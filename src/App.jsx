import { useState, useEffect } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCardList from "./components/miniCardList";
import Navbar from "./components/navbar";
import ProductDetail from "./components/productDetail";

import "./App.css";
import ModalCart from "./components/modalCart";

function App() {
  const [appSelectValue, appSetSelectValue] = useState("smartphones");
  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cartList"))||[]);
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });
  const [modalCartVisibile, setModalCartVisible] = useState(false);

  const localStorageCartListLength =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

 
    // const localStorageCartList =
    // window !== "undefined" &&
    // JSON.parse(localStorage.getItem("cartList") || "[]");
  
 


  return (
    <div className="App">
      <Navbar   cartListLength={localStorageCartListLength || cartList.length} appSetSelectValue={appSetSelectValue} setModalCartVisible={setModalCartVisible}/>
      <Hero  />
      <MiniCardList endpoint="/products/category/"   appSelectValue={appSelectValue}/>
      <CardList title="Technology" endpoint="/products?limit=10"   setModalContext={setModalContext}/>
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" setModalContext={setModalContext}/>
      <Footer />
      {modalContext.isVisibile && (
        <ProductDetail
          productData={modalContext.productData}
          setCartList={setCartList}
          setModalContext={setModalContext}
      
        />
      )}
      {modalCartVisibile && (
        <ModalCart
          cartList={cartList}
          setCartList={setCartList}
          setModalCartVisible={setModalCartVisible}
        />
      )}
    </div>
  );
}


export default App;
