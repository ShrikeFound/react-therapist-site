import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const Header = () => {
  const { pathname} = useLocation();
  return (
    <header className="container">
      <Link className="brand" to="/"><span>Martha S. Webb</span> Psychotherapy</Link>
      <nav>
        <Link to="/" className={ pathname === "/" ? "active": null}>Welcome</Link>
        <Link to="/individual-counseling" className={ pathname === "/individual-counseling" ? "active": null}>Individual Counseling</Link>
        <Link to="/group-therapy" className={ pathname === "/group-therapy" ? "active": null}>Group Therapy</Link>
        <Link to="/contact" className={ pathname === "/contact" ? "active": null}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
