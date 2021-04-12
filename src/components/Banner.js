import React from 'react'
import {Link} from 'react-router-dom'
const Banner = ({imageURL,description,cta,position = "50% 50%",hide = false}) => {
  return (
    <div className="banner" style={{backgroundImage: `url(${imageURL})`,backgroundPosition: `${position}`}}>
      <div className="banner-cta" style={hide === true ? { display: "none" } : {}}>
        <p className="banner-description">{description}</p>
        <Link className="button" to="/contact">{cta}</Link>
      </div>

    </div>
  )
}

export default Banner
