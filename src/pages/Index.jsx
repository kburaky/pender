import React from 'react'

import Carousel from '../components/Carousel'
import About from '../components/About'
import Feature from '../components/Feature'
//import Blog from '../components/Blog'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Index() {
  return (
    <div>
      <NavBar />
      <Carousel/>
      <About />
      <Feature />
      {/*<Blog />*/}
      <Footer />
    </div>
  )
}

export default Index