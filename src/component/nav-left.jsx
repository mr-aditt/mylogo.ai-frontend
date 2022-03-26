import React from 'react'
import logo_img from '../assets/logo.png'
import {
  Link
} from "react-router-dom";

export default function NavLeft() {
  return (
    <div className="flex-r">
  <div>
    <Link to='/'><img src={logo_img} alt="LOGO" /></Link>
  </div>
  <div className="flex-r">
    <div className="highlight">
      <Link to='/'>Home</Link>
    </div>
    <div className="highlight">
      <Link to='/about-us'>About us</Link>
    </div>
  </div>
</div>
  )
}
