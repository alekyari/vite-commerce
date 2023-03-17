import { shortDescription } from "../../utils/func";
import "./index.css";
import { useState, useEffect } from "react";

const CartElement = ({cartElement, setCartElementId, setSelected }) => {

  const [selectedItem, setSelectedItem]= useState(false);
  
const onHandleSetId = () => {
  setCartElementId(cartElement.id);
  setSelected((prev)=>!prev);
  setSelectedItem((prev)=>!prev);

  };


  return (
    <div className={`CartElement ${selectedItem ? "selected" : ""}`} >
      <div className="CartElement__image">
      <img
        className="CartElement__image--image"
        src={cartElement.thumbnail}
        alt={cartElement.title}
      />
       </div>

      <div className="CartElement__text">
        <h3 className="CartElement__text--title">{cartElement.title}</h3>
        <p className="CartElement__text--desc">
          {shortDescription(cartElement.description)}
        </p>
        <p className="CartElement__text--cat">{cartElement.category}</p>  
      </div>
      <div className="CartElement__price">
      <p className="CartElement__price--price">$ {cartElement.price}</p>
      </div>
      <button className="Remove_Item" 
      onClick={onHandleSetId} 
      >{`${selectedItem ? "unselect" : "select"}`}</button>
    </div>
  );
};

export default CartElement;
