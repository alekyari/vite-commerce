import { useState , useEffect } from "react";
import "./index.css";
import { GET } from "../../utils/http";

const Navbar = ({appSetSelectValue}) => {
  const [selectValue, setSelectValue] = useState("smartphones");
   const [optionFetch, setOptionFetch] = useState([]);
 

  const onHandleInput = (e) => {setSelectValue(() => e.target.value);appSetSelectValue(selectValue)};

  
   
  
  useEffect(() => {
    GET(`/products/categories`).then((data) => setOptionFetch(() => data));
  }, []);

 


  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
<div className="select_navabar">
     <label>
        Please select a category:
        </label>
       <select value={selectValue} onChange={onHandleInput} name="selectcategory" >
      { optionFetch.map((optionFetch,i) => (
        <option value={optionFetch} key={i}>{optionFetch}</option>))}
          {/* <option  value="smarthpones">smarthpones</option>
          <option  value="laptops">laptops</option>
          <option  value="fragrances">fragrances</option>
          <option  value="skincare">skincare</option>
          <option  value="groceries">groceries</option> */}
        </select>
        
        </div>
    </div>
  );
};

export default Navbar;
