import React from 'react'
import Product from './Product'
import ServiceSection from './ServiceSection'

function ThirdSection() {
  return (
    <section className="third-section">
        <div className="third-part">
          <h1>Featured Products</h1>
            <Product/>
            <ServiceSection/> 
        </div>
      </section> 
  )
}

export default ThirdSection
