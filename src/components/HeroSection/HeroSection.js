import React from "react";
import ProductCard from "./ProductCard";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSectionContainer">
        <h1 className="HeroHeading">Featured Products</h1>
        <div className="ProductContainer">
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
