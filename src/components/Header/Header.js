import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="logo text-center my-3">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="my-navbar">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
