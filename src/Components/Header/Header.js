import React from 'react';
import "./Header.css";
import logo from "../Assets/logo.png";
import call from "../Assets/call icon.svg";
import { BiUser } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
const Header = () => {
  return (
    <div data-aos="fade-down" className='header-container'>

        <div className='logo-search-cont'>
            <img src={logo} />
            <div className='search-cont'>
                <BiSearchAlt className='icon'/>
                <input type='text' placeholder='Search Products'/>

            </div>

        </div>

        <div className='contact-social'>
            <div className='contact'>
            
                <p><IoMdCall  className='call'/>Call us <span>+099 000 000</span></p>
            </div>
            <br/>

            <div className='social-icon-cont'>
                <div className='headerIcon'>
                    <BiUser className='headerIcon-size'/>   
                </div>

                <div className='headerIcon'>
                    <BiHeart className="heartIcon-size"/>
                </div>
                <div className='headerIcon'>
                    <BsCart2 className="heartIcon-size"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
