import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading"
import "./index.css";

const MiniCardList = ({ endpoint , appSelectValue}) => {
  const [miniCards, setMiniCards] = useState([]);
  const [category, setCategory] = useState(appSelectValue);
  
   
  
  useEffect(() => {
    GET(`${endpoint}${category}`).then((data) => setMiniCards(() => data.products));
  }, []);

  return (
    <div className="miniCardList">

        {miniCards.length ? (miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))): (
          <SpinnerLoading /> )}
    </div>
  );
};

export default MiniCardList;