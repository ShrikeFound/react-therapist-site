import React from 'react'
import {Link} from 'react-router-dom'
const Banner = ({imageURL,description,cta,position = "50% 50%"}) => {
  return (
    <div className="banner" style={{backgroundImage: `url(${imageURL})`,backgroundPosition: `${position}`}}>
      <div className="banner-cta">
        <p className="banner-description">{description}</p>
        <Link className="button" to="/contact">{cta}</Link>
      </div>

    </div>
  )
}

export default Banner
