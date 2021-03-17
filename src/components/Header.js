import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to="/">Welcome</Link>
      <Link to="/individual-counseling">Individual Counseling</Link>
      <Link to="/group-therapy">Group Therapy</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header
