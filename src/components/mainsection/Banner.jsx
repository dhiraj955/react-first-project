import React from 'react'
import Button from '../utilitycomponent/Button'

function Banner({banner}) {
    const { bgImage, heading, description, buttonText } = banner;

    const bannerStyle = {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    };

    return (
        <div className="bg-container" style={bannerStyle}>
            <div className="bg-head">
                <h2>{heading}</h2>
                <p>{description}</p>
                <Button className="shop-btn" name={buttonText} />
            </div>
        </div>
    );
}

export default Banner
