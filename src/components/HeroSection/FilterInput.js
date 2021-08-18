import React, { useState, useEffect } from "react";
import data from "../../data.json";

const FilterInput = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [processedData, setProcessedData] = useState(data);
  const categoriesSet = new Set(
    data.map((item) => {
      return item.category;
    })
  );

  const categories = Array.from(categoriesSet);
  categories.unshift("All");

  // let processedData = data;

  useEffect(() => {
    if (selectedCategory === "All") {
      setProcessedData("All");
    } else {
      setProcessedData(
        data.filter((item) => {
          return item.category === selectedCategory;
        })
      );
    }
  }, [selectedCategory]);

  // console.log(processedData);
  return (
    <select
      name="categoryFilter"
      className="categoryFilter"
      onChange={(e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);
      }}
    >
      {categories.map((category) => {
        return <option value={category}>{category}</option>;
      })}
      {/* {console.log(selectedCategory)} */}
    </select>
  );
};

export default FilterInput;
