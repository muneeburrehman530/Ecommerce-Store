import React from "react";
import { useState } from "react";
// import FetchData from "./FetchData";
const Categories = () => {
  const [category, setCategory] = useState();
  // const [slelctedCategory, setSelectedCategory] = useState();
  const filterResult = (item) => {
    const updatedResult = product.filter((currentData) => {
      return currentData.product === item;
    });
    setCategory(updatedResult);
    console.log(updatedResult);
  };
  const product = [
    {
      id: 1,
      name: "John",
      Address: "UK",
    },
    {
      id: 2,
      name: "Doee",
      Address: "US",
    },
  ];

  //   useEffect(() => {
  //     setCategory(categories);
  //   }, [input]);
  return (
    <div>
      <button onClick={() => setCategory(product)}>All Categories</button>
      <button onClick={() => filterResult("John")}>furniture</button>
      <button onClick={() => filterResult("Doee")}>Electronics</button>
      <button>Clothes</button>
      <button>Shoes</button>
    </div>
  );
};

export default Categories;
