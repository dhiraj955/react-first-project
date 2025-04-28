import React from 'react'
import Button from '../utilitycomponent/Button'
import Banner from './Banner';
export const promoBanners = [
  {
    bgImage: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg",
    heading: "20% Off On Tank Tops",
    description: "Grab your stylish tank tops with a flat 20% discount today!",
    buttonText: "SHOP NOW"
  },
  {
    bgImage: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg",
    heading: "Buy 1 Get 1 Free",
    description: "Enjoy our summer sale with exclusive buy 1 get 1 free offer.",
    buttonText: "GRAB DEAL"
  },
  {
    bgImage: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg",
    heading: "Flat 30% Off on Shoes",
    description: "Step into comfort and style with 30% off on all footwear.",
    buttonText: "EXPLORE SHOES"
  }
];


function SecondSection() {
  return (
    <section className="second-section">
        {promoBanners.map((banner, index)=>{
          return <Banner key={index} banner = {banner}/>
        })}
        
  </section>
  )
}

export default SecondSection
