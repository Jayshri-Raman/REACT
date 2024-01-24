import React from 'react'
import "./Dot.css"
import { CiDiscount1 } from "react-icons/ci";

const Cards = () => {
  return (
    <div className='boards'  data-aos="fade-up-right">
        <h1 className='title'>FLATS /-</h1>

        <div className='sheet'>
            <div className='top'>
            <CiDiscount1  className='icons'/>
                <h1>Discounts</h1>
                <p>Top Sale<span> 75%/- </span>OFF</p>
            </div>
            <div className='down'>
                <h1>Use Code PHP247</h1>
                <span>Get flat Rs.75 on a cart value of <br/></span>
                <span> 599 and above on cart</span>
            </div>
        </div>
        <div className='sheet'>
            <div className='top'>
            <CiDiscount1  className='icons'/>
                <h1>Discounts</h1>
                <p>Top Sale<span> 75%/- </span>OFF</p>
            </div>
            <div className='down'>
                <h1>Use Code PHP247</h1>
                <span>Get flat Rs.75 on a cart value of <br/></span>
                <span> 599 and above on cart</span>
            </div>
        </div>
        <div className='sheet'>
            <div className='top'>
            <CiDiscount1  className='icons'/>
                <h1>Discounts</h1>
                <p>Top Sale<span> 75%/- </span>OFF</p>
            </div>
            <div className='down'>
                <h1>Use Code PHP247</h1>
                <span>Get flat Rs.75 on a cart value of <br/></span>
                <span> 599 and above on cart</span>
            </div>
        </div>

       
    
    </div>
  )
}

export default Cards
