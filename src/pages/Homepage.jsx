import React from "react"
import HeroSection from "../components/HeroSection"
import FinancialSection from "../components/FinancialSection"
import WhyChooseUs from "../components/WhyChooseUs"
import Review from "../components/Review"
import Subscription from "../components/Subscription"


const Homepage = () => {
  return (
    <div className='text-black'>
       <HeroSection />
       <FinancialSection />
       <WhyChooseUs />
       <Review />
       <Subscription />
    </div>
  )
}

export default Homepage
