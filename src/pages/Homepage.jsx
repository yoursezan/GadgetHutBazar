import React from 'react'
 
import Herosection from '../component/Herosection'
import About from '../component/About'
import ServicesSection from '../component/Services'
import OurSpecials from '../component/OurSpecials'
import LiveClock from '../component/LiveClock'
import BrandsShop from '../component/BrandsShop'

export default function Homepage() {
  return (
    <div>
        
        <Herosection/>
        <About/>
        <ServicesSection/>
        <OurSpecials/>
        <LiveClock/>
        <BrandsShop/>

    
    </div>
  )
}
