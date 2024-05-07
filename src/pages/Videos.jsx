import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Videos() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Videolar" title="Videolar" />

      <div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XTxlYe1ruE8?si=M4K1mc1F6ca-1qsW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5klABdxjQa4?si=8i5dCYyFVVgk7zFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
          </div>
      </div>

      




  </div>
</div>

      <Footer />
      
    </div>
  )
}

export default Videos