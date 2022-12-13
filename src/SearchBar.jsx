import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { ProductContext } from "./FetchData";
const SearchBar = () => {
  // const Context = createContext();
  const filterProducts = useContext(ProductContext);

  const [search, setSearch] = useState(false);
  // const [filterData, setFilterData] = useState("");
  const onSearch = (e) => {
    // return setInput(e.target.value);
    filterProducts(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="input-group rounded w-100">
          {/* <ProductContext.Consumer> */}
          <input
            onChange={onSearch}
            type="search"
            className={
              search
                ? "form-control rounded bg-transparent mb-4 py-3 searchbar"
                : "form-control rounded bg-transparent mb-4"
            }
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          {/* </ProductContext.Consumer> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
