import React from 'react'
import { FaGlobeAmericas, FaLock, FaTruck, FaStar } from "react-icons/fa";
import ServiceCard from './ServiceCard';

 const servicesData = [
  {
    icon: <FaGlobeAmericas />,
    title: "Worldwide Shipping",
    description: "We ensure every order is delivered on time, always.",
  },
  {
    icon: <FaStar />,
    title: "Best Quality",
    description: "Your payments are encrypted and 100% safe with us.",
  },
  {
    icon: <FaTruck />,
    title: "Best Offers",
    description: "Enjoy fast and free shipping on all your purchases today.",
  },
  {
    icon: <FaLock />,
    title: "Secure Payment",
    description: "Enjoy fast and free shipping on all your purchases today.",
  },
];

function ServiceSection() {
  return (
    <section className="second_section">
            <div className="container">
              <div className="service">
                {servicesData.map((service, index)=>{
                  return <ServiceCard key={index} service={service}/>
                
                })}
              </div>
            </div>
          </section> 
  )
}

export default ServiceSection
