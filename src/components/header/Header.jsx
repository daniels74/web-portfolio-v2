import React from 'react'
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import "./Header.css"

const Header = () => {
  return (
    <header id="header">
        <div className="container header__container">
            <h5>Hello Im</h5>
            <h1>Daniel Flores</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src="" alt="" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header