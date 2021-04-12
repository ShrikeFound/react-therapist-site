import React, { useRef, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
const Header = () => {
  const { pathname } = useLocation();
  const [isOpen,setIsOpen] = useState(false)
  const handleNavToggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const handleNavClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="container">
      <Link className="brand" to="/"><span>Martha S. Webb</span> Psychotherapy</Link>
      <div className="nav-toggle" onClick = {handleNavToggle}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <nav className={isOpen === true ? "":"hidden"}>
        <Link onClick={handleNavClose} to="/" className={ pathname === "/" ? "active": null}>Welcome</Link>
        <Link onClick={handleNavClose} to="/individual-counseling" className={ pathname === "/individual-counseling" ? "active": null}>Individual Counseling</Link>
        <Link onClick={handleNavClose} to="/group-therapy" className={ pathname === "/group-therapy" ? "active": null}>Group Therapy</Link>
        <Link onClick={handleNavClose} to="/contact" className={ pathname === "/contact" ? "active": null}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
