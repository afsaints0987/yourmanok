import React from 'react';
import logo from '../../assets/ym_logo.png'

const Navbar = () => {
    return (
        <div className="header">
            <a href="/" className="img_container"><img src={logo} alt="logo" className="logo"/></a>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="#product">Product</a>
                <a href="#location">Location</a>
            </div>
        </div>
    )
}

export default Navbar