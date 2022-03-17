import React from 'react'

function Sidebar({isOpen, toggle}) {

    return (
      <div className="sidebar_menu" onClick={toggle}>
        <span className="burger_menu" />
        <div className="sidebar" style={isOpen ? {display: "flex"} : {display: "none"}}>
          <a href="/">Home</a>
          <a href="#product">Product</a>
          <a href="#location">Location</a>
          <button>Order Now</button>
        </div>
      </div>
    );
}

export default Sidebar