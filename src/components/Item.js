import React, {useState}from "react";

function Item({ name, category }) {

  
  const [inTheCart, setInTheCart] = useState(false)
  const addToCart = inTheCart ? "Add to cart" : "Remove from cart"

  function addRemCart() {
    setInTheCart((add) => !add)
  }
  
  return (
    <li className={inTheCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addRemCart}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
