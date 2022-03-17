import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import banner from '../../assets/banner_image.jpg'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="banner" style={{backgroundImage:`url(${banner}`}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar />
            <div className="banner_text">
                <h1>The Best Roasted Chicken In Town</h1>
                <p className="italic">Come and Get IT!</p>
                <button>Order Now</button>
            </div> 
        </div>
    )
}

export default Hero
