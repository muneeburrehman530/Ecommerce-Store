import React from "react";
import FetchData from "./FetchData";
import "./App.css";
import Categories from "./Categories";
// import SearchBar from "./SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "react";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/fetchdata" element={<FetchData />} />

          <Route path="/fetchdata/:name" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Categories />
      <h1 className="text-dark text-center my-5">All Products</h1>
      {/* <SearchBar /> */}
      <FetchData />
    </div>
  );
};

export default App;
