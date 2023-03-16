import { shortDescription } from "../../utils/func";
import "./index.css";

const CartElement = ({ productData, setCartList}) => {

  


  const onHandleRemoveItem = () => {
    // alert(productData.filter((item)=> item.id === productData.id) )
    // const localStorageCartItems =
    //   JSON.parse(localStorage.getItem("cartList")) || [];

    // setCartList((prev) => [...prev, productData]);
    // localStorage.setItem(
    //   "cartList",
    //   JSON.stringify([...localStorageCartItems, productData])
    // );
  };

  return (
    <div className="CartElement" >
      <div className="CartElement__image">
      <img
        className="CartElement__image--image"
        src={productData.thumbnail}
        alt={productData.title}
      />
       </div>

      <div className="CartElement__text">
        <h3 className="CartElement__text--title">{productData.title}</h3>
        <p className="CartElement__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="CartElement__text--cat">{productData.category}</p>  
      </div>
      <div className="CartElement__price">
      <p className="CartElement__price--price">$ {productData.price}</p>
      </div>
      <button className="Remove_Item" onClick={onHandleRemoveItem} >x</button>
    </div>
  );
};

export default CartElement;
