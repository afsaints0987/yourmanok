import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import banner from '../../assets/banner_image.jpg'

const Hero = () => {
    return (
        <div className="banner" style={{backgroundImage:`url(${banner}`}}>
            <Sidebar />
            <Navbar />
            <div className="banner_text">
                <h1>The Best Chicken In Town</h1>
                <p className="italic">Come and Get IT!</p>
                <button>Order Now</button>
            </div> 
        </div>
    )
}

export default Hero
