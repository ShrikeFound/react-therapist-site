import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({title,subtitle,description,cta}) => {
  return (
    <div className="card">
      <h2 className="card-subtitle">{subtitle}</h2>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <Link className="button" to="/contact">{cta}</Link>
    </div>
    
  )
}

export default Card
