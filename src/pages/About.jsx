import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import FirmVisit from '../components/FirmVisit'
import Aboutt from '../components/About'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function About() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Hakkında" title="Hakkında" />
      <Aboutt />
      {/*<FirmVisit />*/}
      <Footer />
      
    </div>
  )
}

export default About