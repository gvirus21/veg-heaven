import React, { useState, useEffect } from "react";
import banana from "../../images/banana.jpg";
import drumstick from "../../images/drumstick.jpg";
import potato from "../../images/potato.jpg";
import orange from "../../images/Oranges.jpg";

const ProductCard = ({ item }) => {
  const { name, id, price, available } = { ...item };
  const [stock, setStock] = useState("Out of stock");
  const [availability, setAvailability] = useState(available);

  useEffect(() => {
    if (availability) {
      setStock("In Stock");
    } else {
      setStock("Out of stock");
    }
  }, [availability]);

  const imgArr = [];
  imgArr.push(potato, banana, drumstick, orange);

  return (
    <div className="productCard">
      <img src={imgArr[id - 1]} alt={name} />
      <h1>{name}</h1>
      <p>price: ₹{price}</p>
      <h2 style={{ color: availability ? "green" : "red" }}>{stock}</h2>
      <button
        style={{
          opacity: availability ? "100%" : "0",
          pointerEvents: availability ? "auto" : "none",
        }}
        onClick={(e) => {
          setAvailability(availability - 1);
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
