import { useState } from "react";
import "./index.css";
import CartElement from "../cartElement";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";



const ModalCart = ({ productData, setModalCartVisible, setCartList }) => {

  
  const onHandleClearCart = () =>
  localStorage.removeItem("cartList");

  const onHandleClose = () =>
  setModalCartVisible(false);

  // const onHandleAddCart = () => {
  //   const localStorageCartItems =
  //     JSON.parse(localStorage.getItem("cartList")) || [];

  //   setCartList((prev) => [...prev, productData]);
  //   localStorage.setItem(
  //     "cartList",
  //     JSON.stringify([...localStorageCartItems, productData])
  //   );
  // };

  // const onHandleImageClick = (imgUrl) => {
  //   setGalleryVisible(true);
  //   setSelectedPhoto(() => imgUrl);
  // };

  return (
    <div className="ModalCart">
      
        <div className="ModalCart__content">
<div className="closeCart_button">
<button onClick={onHandleClose} > x </button>
</div>

        <div className="CartElement_List">
        {productData.length ? ( 
          productData.map((product) => (
            <CartElement productData={product} key={product.id} setCartList={setCartList}/>
          ))
        ) : (
          <SpinnerLoading />
        )}
      </div>
        <div className="totalCart">
        <p> Provisional total ({productData.length} item): $ {(productData.map((item)=>item.price))
        .reduce((partialSum, a) => partialSum + a, 0) } 
        

        
        
        </p>
        </div>
        <div className="ClearCart">
        <button onclick={onHandleClearCart}>Clear Cart</button>
        </div>
          
        </div>
      
    </div>
  );
};

export default ModalCart;
