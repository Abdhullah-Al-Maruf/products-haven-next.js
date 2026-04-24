"use client";

import { CategoryContext } from "@/context/catagoryContext";
import { use, useContext } from "react";

const res = fetch("https://dummyjson.com/products/category-list").then((res) =>
  res.json()
);

const Leftside = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const data = use(res);

  return (
    <div className="bg-white rounded-md p-4 h-full shadow w-full md:w-64">
      
      <div className="flex flex-wrap md:flex-col gap-2">

        {/* All button */}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`btn btn-sm md:btn-md rounded-full transition-all duration-200 w-full ${
            selectedCategory === "all"
              ? "btn-primary"
              : "btn-outline"
          }`}
        >
          All Product
        </button>

        {/* Category buttons */}
        {data.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-sm md:btn-md rounded-full transition-all duration-200 w-full ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            {category}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Leftside;