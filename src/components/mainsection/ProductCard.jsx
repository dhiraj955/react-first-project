import React from 'react'

function ProductCard({product}) {
    const { title, image, description, price, rating, link } = product;
  return (
    <div className="product-card">
      <a href={link}>
        <div className="img-wrapper">
          <img
            src={image}
            alt={title}
          />
        </div>
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price-rating">
        <span className="price">{price}</span>
        <div className="stars">{rating}</div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  )
}

export default ProductCard
