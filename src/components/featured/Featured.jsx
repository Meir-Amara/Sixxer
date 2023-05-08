import React from "react";
import "./Featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the right <i>freelance</i> service, right away</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Building mobil app"' />
            </div>
              <button>Search</button>
          </div>
            <div className="popular">
              <span>popular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI services</button>
            </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}
