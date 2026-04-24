"use client";
import React, { useContext } from "react";
import Card from "./Card";
import { CategoryContext } from "@/context/catagoryContext";

const Gadget = ({ products }) => {
  const { selectedCategory } = useContext(CategoryContext);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start auto-rows-fr">
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Gadget;