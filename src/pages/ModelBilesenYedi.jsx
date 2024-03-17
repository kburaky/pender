import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ModelBilesenYedi() {
  return (
    <div>
<NavBar />
<Breadcrumb page="Durumsal Etkiler" title="Durumsal Etkiler" />


<div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" alt="Durumsal Etkiler" src="img/about.jpg"/>
              </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Modelin yedinci bileşeni: Durumsal Etkiler</h1>
              <p className="mb-4"><b>Dış faktörler:</b> Kişinin yaşadığı coğrafi bölgenin ekonomik ve sosyal durumu, çevresel etkiler ve yaşam koşulları, durumsal etkilerin temelini oluşturur.
              </p>
              <p className="mb-4"><b>Aile ve arkadaş çevresi: </b> Kişinin ailesi, arkadaşları ve çevresindeki diğer kişilerin tutumları, inançları ve davranışları, durumsal etkilere direkt olarak etki eder.
              </p>
              <p className="mb-4"><b>Medya ve reklamlar: </b> Her gün maruz kalınan medya ve reklamlar, kişinin alışkanlıkları ve tercihlerini durumsal etkiler ışığında şekillendirir.
              </p>
              
          </div>
      </div>
  </div>
</div>

<Footer />
    </div>
  )
}

export default ModelBilesenYedi