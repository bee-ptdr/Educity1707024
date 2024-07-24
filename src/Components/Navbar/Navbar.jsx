import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  return (
    <>
      <nav className={`main_container py-2 ${sticky ? "nav_bgColor" : ""}`}>
        <div className="logo">
          <NavLink to='/'>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to='/Program' duration={500}>
            <li>Program</li>
          </NavLink>
          <NavLink to='/About'>
            <li>About us</li>
          </NavLink>
          <NavLink to='/gallary'>
            <li>Campus</li>
          </NavLink>
          <NavLink to='Carousal'>
            <li>Testimonials</li>
          </NavLink>
          <li><NavLink to='/Contact'><button className='button'>Contact us</button></NavLink> </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
