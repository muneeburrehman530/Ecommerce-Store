import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import { createContext } from "react";
import { BrowserRouter as Link } from "react-router-dom";

export const ProductContext = createContext();
const FetchData = () => {
  const [products, setProducts] = useState([]);
  // const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [search, setSearch] = useState(false);

  const changeSearchBg = () => {
    if (window.scrollY >= 80) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  const filterProducts = (input) => {
    console.log(input);
    setOutput([]);
    products.filter((value) => {
      if (value.category.name.toLowerCase().includes(input.toLowerCase())) {
        return setOutput((output) => [...output, value]);
      }
    });
  };

  window.addEventListener("scroll", changeSearchBg);

  useEffect(() => {
    const Data = Axios.get("https://api.escuelajs.co/api/v1/products").then(
      (response) => {
        // Axios.get("https://fakestoreapi.com/products?limit=100").then(
        // (response) => {
        setProducts(response.data);
        console.log(response);
      }
    );
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* data filtering */}
          <ProductContext.Provider value={filterProducts}>
            <SearchBar />
          </ProductContext.Provider>
          {/* data fitlering endds */}

          {output.map((value, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="card my-3 image_hover"
                  style={
                    {
                      // height: "30rem",
                    }
                  }
                >
                  <Link to={`/fetchdata/${value.category.name}`}></Link>
                  <img
                    className="card-img-top"
                    src={value.category.image}
                    alt="..."
                    // style={{ height: "300px", width: "300px" }}
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">
                      {value.category.name}
                    </h5>
                    <div className="content">
                      <p className="card-text text">{value.description}</p>
                    </div>

                    <button className="btn  w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
