import React from 'react'
import Logo from "../images/airbnb.png"
import "../styles/NavBar.css"

function NavBar() {
  return (
    <div className='NavBar'>
        <img className="nav-logo" src={Logo} alt="logo"/>
    </div>
  )
}

export default NavBar