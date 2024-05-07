import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Brochures() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Broşürler" title="Broşürler" />

      <div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
          
          <img className="img-fluid w-100" alt='' src="img/bros1.png"/>


          </div>
          
      </div>

      <div className="row g-5 align-items-center">
        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                
        <img className="img-fluid w-100" alt='' src="img/bros2.png"/>

        </div>
        
      </div>




  </div>
</div>

      <Footer />
      
    </div>
  )
}

export default Brochures