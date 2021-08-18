import React from "react";
import ProductCard from "./ProductCard";
import { FilterInput } from "./FilterInput";

const HeroSection = ({ filteredData, setFilteredData }) => {
  console.log(filteredData);
  return (
    <div className="heroSection">
      <div className="heroSectionContainer">
        <div className="upperHeroSection">
          <h1 className="HeroHeading">Featured Products</h1>
          <FilterInput setFilteredData={setFilteredData} />
        </div>

        <div className="ProductContainer">
          {filteredData.map((item) => (
            <ProductCard item={item} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
