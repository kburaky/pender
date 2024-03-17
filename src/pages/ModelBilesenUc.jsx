import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ModelBilesenUc() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Algılanan Engeller" title="Algılanan Engeller" />


<div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" alt="Algılanan Engeller" src="img/about.jpg"/>
              </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Modelin Üçüncü Bileşeni: Algılanan Engeller</h1>
              <p className="mb-4"><b>Finansal Engeller:</b> Sağlık hizmetlerine erişimde maddi zorluklar, tedavi maliyetleri ve ilaç fiyatları
              </p>
              <p className="mb-4"><b>Çevresel Engeller:</b> Sağlığa zararlı çevresel koşullar ve hava kirliliği gibi faktörler
              </p>
              <p className="mb-4"><b>Sosyal Engeller:</b> Toplumsal baskı, ayrımcılık, ve sosyal destek eksikliği gibi faktörler

              </p>
              
          </div>
      </div>
  </div>
</div>
<Footer />
    </div>
  )
}

export default ModelBilesenUc