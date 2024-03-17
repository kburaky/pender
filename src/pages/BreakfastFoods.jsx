import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function BreakfastFoods() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Kahvaltı Besinleri" title="Kahvaltı Besinleri" />
      <Product />
      <Footer />
      
    </div>
  )
}

export default BreakfastFoods