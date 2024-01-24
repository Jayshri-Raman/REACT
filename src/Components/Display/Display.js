import React from 'react'
import "./Display.css"
import banner from "../Assets/banner.jpg"
import noodle from "../Assets/noodle.png"
import pasta from "../Assets/pasta.png"
import pizza from "../Assets/pizza.png"
import wings from "../Assets/wings.png"
import { IoMdCart } from "react-icons/io";
import {TypeAnimation} from 'react-type-animation';
const Display = () => {
  return (
    <div className='main'>
    
       <div data-aos="zoom-in-up" className='banner'>
        <img src={banner}/>
       </div>

      <div className='buynow'>
        <p>
            <TypeAnimation sequence={[ 'BUY NOW ',2000,'']}
            speed={50}
            repeat={Infinity} />

            <IoMdCart className='cart'/>
            </p>

      </div>

      <div className='menus'>
        <h1>
        <TypeAnimation sequence={[ 'OUR MENUS',2000,'']}
            speed={50}
            repeat={Infinity}/>

        </h1><hr/>
        <div className='cards'>

        <div className='card1' data-aos="fade-right">
            <div className='noodle'>
                <h3>Mexican Noodles</h3>
            <img src={noodle}/>
           
            </div>
        </div>


        <div className='card2' data-aos="fade-right">
            <div className='pasta'>
                <h3>Italic Pasta</h3>
            <img src={pasta}/>
            
            </div>
        </div>


        <div className='card3' data-aos="fade-right">
            <div className='pizza'>
                <h3>Chicken Pizza</h3>
            <img src={pizza}/>
           
            </div>
        </div>
        

        <div className='card4' data-aos="fade-right">
            <div className='wings'>
                <h3>Chicken Wings</h3>
            <img src={wings}/>
           
            </div>
        </div>
        </div>
        </div>

    </div>
  
    
    
  )
}

export default Display
