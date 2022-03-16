import React from 'react'
import chicken from '../../assets/chicken.png'
import liempo from '../../assets/liempo.png'
import pork_belly from '../../assets/pork_belly.png'

function Card() {
    const ProductList = [
        {
            id: 1,
            img: chicken,
            alt: "chicken",
            title: "Chicken",
            price: 275
        },
        {
            id: 2,
            img: liempo,
            alt: "liempo",
            title: "Liempo",
            price: 260
        },
        {
            id: 3,
            img: pork_belly,
            alt: "pork belly",
            title: "Pork Belly",
            price: 499
        }
    ]
    return (
        <div>
            <div className="card">
            {ProductList.map((product, index) => {
                return (
                    <div key={index} className="card_body">
                        <img className="card_image" src={product.img} alt={product.alt}/>
                        <div className="card_text">
                        <h3>{product.title}</h3>
                        <p>&#8369;{product.price}</p>
                         </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

function Products() {
    return (
        <div className="products" id="product">
            <h2>Our Products</h2>
            <Card />
        </div>
    )
}

export default Products
