import React from "react";
import "./../styles/components.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">IMPERIAL</div>

        <nav className="nav-links">
          <div className="dropdown">
            <span>Home ▾</span>
            <div className="dropdown-content">
              <a href="/">Home 1</a>
              <a href="/">Home 2</a>
            </div>
          </div>
          <a href="/">About</a>
          <a href="/">Service</a>
          <div className="dropdown">
            <span>Pages ▾</span>
            <div className="dropdown-content">
              <a href="/room">Room</a>
              <a href="/">Blog</a>
              <a href="/">404 Page</a>
            </div>
          </div>
          <a href="/">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
