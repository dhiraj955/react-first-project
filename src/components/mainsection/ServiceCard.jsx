import React from 'react'

function ServiceCard({service}) {
    const {icon, title, description} = service;
  return (
    <div className="service_section">
                  <div className="border">
                    <div className="service_icon">
                      {icon}
                    </div>
                    <h2 className="service_heading">{title}</h2>
                    <p className="service_para">
                      {description}
                    </p>
                  </div>
                </div>
  )
}

export default ServiceCard
