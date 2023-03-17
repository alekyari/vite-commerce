import { useState , useEffect } from "react";
import "./index.css";
import { GET } from "../../utils/http";

const Navbar = ({appSetSelectValue , cartListLength, setModalCartVisible }) => {
  const [selectValue, setSelectValue] = useState("");
   const [optionFetch, setOptionFetch] = useState([]);
 

  const onHandleInput = (e) => setSelectValue(() => e.target.value);
    

    const onHandleSubmit = (e) => {e.preventDefault();
      appSetSelectValue(() => selectValue)};
   
  
  useEffect(() => {
    GET(`/products/categories/`).then((data) => setOptionFetch(() => data));
  }, []);

  const onHandleOpenCart = () =>
  setModalCartVisible(true);

  const onHandleClearCart = () =>
  localStorage.removeItem("cartList");

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
<div className="select_navabar">
  <form onSubmit={onHandleSubmit}>
     <label>
        Please select a category:
        </label>
       <select value={selectValue} onChange={onHandleInput} name="selectcategory" >
      { optionFetch.map((optionFetch,i) => (
        <option value={optionFetch} key={i}>{optionFetch}</option>))}
      </select>
        <input type="submit" value="Search" />
        </form>
        </div>
        <div className="Navbar__cart">
        <p  onClick={onHandleOpenCart} >{cartListLength} 🛒</p>
        <button onClick={onHandleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
