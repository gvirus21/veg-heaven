import React from "react";
// import { option } from "yargs";
import data from "../../data.json";

const FilterInput = () => {
  // const catagories =

  const categoriesSet = new Set(
    data.map((item) => {
      return item.category;
    })
  );

  const categories = Array.from(categoriesSet);
  categories.unshift("All");

  console.log(categories);

  return (
    <select name="categoryFilter" className="categoryFilter">
      {categories.map((category) => {
        return <option value={category}>{category}</option>;
      })}
    </select>
  );
};

export default FilterInput;
