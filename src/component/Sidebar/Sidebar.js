import React from 'react'
import logo from '../../assets/ym_logo.png'
function Sidebar({isOpen, toggle}) {

    return (
      <div className={`sidebar_menu ${isOpen ? "open": ""}`} onClick={toggle}>
        <span id="burger" />
        <div className="sidebar" style={isOpen ? {display: "flex"} : {display: "none"}}>
          <img src={logo} className="logo"/>
          <a href="/">Home</a>
          <a href="#product">Product</a>
          <a href="#location">Location</a>
          <button>Order Now</button>
        </div>
      </div>
    );
}

export default Sidebar