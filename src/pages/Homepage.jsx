import React from "react"
import HeroSection from "../components/HeroSection"
import FinancialSection from "../components/FinancialSection"
import WhyChooseUs from "../components/WhyChooseUs"


const Homepage = () => {
  return (
    <div className='text-black'>
       <HeroSection />
       <FinancialSection />
       <WhyChooseUs />
    </div>
  )
}

export default Homepage
