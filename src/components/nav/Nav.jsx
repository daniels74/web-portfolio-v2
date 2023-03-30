import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

import "./Nav.css"

const Nav = () => {

  const [activeNav, setActiveNav] = React.useState('#')

  return (
    <nav id="nav">
        <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experiences' ? 'active' : ''}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav