import { useState, useEffect } from "react";
import "./index.css";
import CartElement from "../cartElement";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";



const ModalCart = ({ cartList, setModalCartVisible, setCartList }) => {
  const [selected, setSelected]= useState(false);
  const [cartElementId, setCartElementId]= useState("");

  
  const onHandleClick = () => {
    
    const filteredCartList = cartList.filter(
      (product) => product.id !== cartElementId
    );

    setCartList(() => filteredCartList);

    localStorage.setItem("cartList", JSON.stringify(filteredCartList));
    setSelected(false)
  };


  const onHandleClearCart = () =>{
  localStorage.removeItem("cartList"); 
  setCartList([])
}


  const onHandleClose = () =>
  setModalCartVisible(false);



  return (
    <div className="ModalCart">
      
        <div className="ModalCart__content">
<div className="closeCart_button">
<button onClick={onHandleClose} > x </button>
</div>

        <div className="CartElement_List">
        {cartList.length ? ( 
          cartList.map((product) => (
            <CartElement cartElement={product} key={product.id} setCartElementId={setCartElementId}   setSelected={setSelected} />
          ))
        ) : 
         <p>No item in the cart</p>
        }
      </div>
        <div className="totalCart">
        <p> Provisional total ({cartList.length} item): $ {(cartList.map((item)=>item.price))
        .reduce((partialSum, a) => partialSum + a, 0) } 
        

        
        
        </p>
        
        </div>
        <div className="clearbuttons">
        <div className="ClearCart">
        <button onClick={onHandleClearCart}>Clear Cart</button>
        </div>
        <div className="ClearSingleItem">
        <button onClick={selected ? onHandleClick   : null} >Clear Single Item</button>
        </div>
        </div>
        
          
          
        </div>
      
    </div>
  );
};

export default ModalCart;
