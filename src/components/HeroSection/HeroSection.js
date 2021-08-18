import React from "react";
import ProductCard from "./ProductCard";
import itemData from "../../data.json";

const HeroSection = () => {
  console.log(itemData);

  return (
    <div className="heroSection">
      <div className="heroSectionContainer">
        <h1 className="HeroHeading">Featured Products</h1>
        <div className="ProductContainer">
          {itemData.map((item) => (
            <ProductCard item={item} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
