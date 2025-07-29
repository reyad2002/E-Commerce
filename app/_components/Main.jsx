import React from 'react'
import Hero from './Hero' ;
import Services from './Services' ;
import SwiperSection from './SwiperSection' ;
import BestSellers from './BestSellers' ;
import ProductFilterSection from './ProductFilterSection' ;
const Main = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <SwiperSection/>
      <BestSellers/>
      <ProductFilterSection/>
    </div>
  )
}

export default Main