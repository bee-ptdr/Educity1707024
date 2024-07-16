import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <>
      <nav className='main_container py-2'>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='button'>Contact us</button> </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
