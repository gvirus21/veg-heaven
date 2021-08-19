import React, { useState, useEffect } from "react";
import data from "../../data.json";

export const FilterInput = ({ setFilteredData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesSet = new Set(
    data.map((item) => {
      return item.category;
    })
  );

  const categories = Array.from(categoriesSet);
  categories.unshift("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => {
          return item.category === selectedCategory;
        })
      );
    }
  }, [selectedCategory]);

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
    </select>
  );
};
