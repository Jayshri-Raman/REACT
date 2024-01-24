import React from 'react'
import "./Navbar.css"
import Dot from "../Dot/Dot"

const Navbar = () => {
  return (
    <div className='navbar-container'>

        <div className='navbar-sub-conatiner'>
            
            <div className='navbar'  data-aos="flip-up">
                <ul className='anim-nav'>
                <li><a href="#!">Home</a></li>
                        <li><a href="#1" data-aos="fade-right"> Our Menus</a></li>
                        <li><a href="#!" data-aos="fade-right"> Offers </a></li>
                        <li><a href="#!" data-aos="fade-right">Feature Product</a></li>
                        <li><a href="#!" data-aos="fade-right">Flats</a></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
