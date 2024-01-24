import React from 'react'
import banner2 from '../Assets/banner2.jpg'
import { TbTruckDelivery } from "react-icons/tb";
import "./Ship.css"
const Ship = () => {
  return (
    <div className='ship'>
      <img src={banner2}/>

      <div className='right'>
        <h3>Online Fast Delivery</h3>
        <p>Free Shipping Charge <TbTruckDelivery className='truck' /></p>
      </div>
    </div>

    
  )
}

export default Ship
