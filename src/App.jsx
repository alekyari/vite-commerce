import { useState, useEffect } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCardList from "./components/miniCardList";
import Navbar from "./components/navbar";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [appSelectValue, appSetSelectValue] = useState("smartphones");
  
 



  return (
    <div className="App">
      <Navbar appSetSelectValue={appSetSelectValue}/>
      <Hero />
      <MiniCardList endpoint="/products/category/"   appSelectValue={appSelectValue}/>
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}


export default App;
