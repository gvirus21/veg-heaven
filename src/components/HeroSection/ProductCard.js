import React, { useState, useEffect } from "react";
import banana from "../../images/banana.jpg";
import drumstick from "../../images/drumstick.jpg";
import potato from "../../images/potato.jpg";
import orange from "../../images/Oranges.jpg";

const ProductCard = ({ item }) => {
  const { name, id, price, available } = { ...item };
  const [stock, setStock] = useState("Out of stock");

  useEffect(() => {
    if (available) {
      setStock("In Stock");
    } else {
      setStock("Out of stock");
    }
  }, []);

  const imgArr = [];
  imgArr.push(potato, banana, drumstick, orange);

  return (
    <div className="productCard">
      <img src={imgArr[id - 1]} alt={name} />
      <h1>{name}</h1>
      <p>price: ₹{price}</p>
      {/* <h2 style={{ color: { available } && "green" }}>{stock}</h2> */}
      <h2 style={{ color: available ? "green" : "red" }}>{stock}</h2>
      <button style={{ opacity: available ? "100%" : "0" }}>Buy Now</button>
    </div>
  );
};

export default ProductCard;
