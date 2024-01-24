import React from 'react'
import "./Blog.css"
import burger from "../Assets/burger.png"
import fry from "../Assets/fry.png"
import wings from "../Assets/wings.png"
const Blog = () => {
  return (
    <div className='blog'>
        <div className='container'>
    
        <center><h3>OFFERS & DEALS</h3></center>
            <div className='block1'>

                <div className='box1'  data-aos="fade-up-right">
                    <div className='clr1'><center><img src={burger}/></center></div>
                    <div className='clr2'>
                    
                    <h3 className='burger'>1 PC FREE BURGER</h3>
                    <span>1Pc free Chicken Zinger on Cart</span><br/>
                    <center><button>Reedem</button></center>
                    </div>
                </div>
                <div className='box1'  data-aos="fade-up-right">
                    <div className='clr1'><center><img src={fry}/></center></div>
                    <div className='clr2'>
                    
                    <h3 className='burger'>2 PC FREE FRIES</h3>
                    <span>2Pc free Chicken Zinger on Cart</span><br/>
                    <center><button>Reedem</button></center>
                    </div>
                </div>
                <div className='box1'  data-aos="fade-up-right">
                    <div className='clr1'><center><img src={wings}/></center></div>
                    <div className='clr2'>
                    
                    <h3 className='burger'>3 PC FREE WINGS</h3>
                    <span>3Pc free Chicken Zinger on Cart</span><br/>
                    <center><button>Reedem</button></center>
                    </div>
                </div>

               
                



            </div>
          

        </div>
      
    </div>
   
  )
}

export default Blog
