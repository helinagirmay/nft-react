import React from "react";
import logo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import switchTheme from "../assets/header/theme-switch.png";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo here" className="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} alt="logo here" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, Item or user "
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="switchTheme">
          <img src={switchTheme} alt="switch here" className="switchButton" />
        </div>
        <div className="login">
          {" "}
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
