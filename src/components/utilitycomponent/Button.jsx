import React from 'react'

function Button(props) {
    const { className,name } = props;
  return (
    
      <button className={className}>{name}</button>
    
  )
}

export default Button
