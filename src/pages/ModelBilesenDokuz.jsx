import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ModelBilesenDokuz() {
  return (
    <div>
<NavBar />
<Breadcrumb page="Planlama taahhüdü" title="Planlama taahhüdü" />


<div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" alt="Planlama Taahhüdü" src="img/about.jpg"/>
              </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Modelin dokuzuncu bileşeni: Planlama Taahhüdü</h1>
              <p className="mb-4"><b>Planlama taahhüdü, hedef belirleme ve planlama aşamasını kapsar:</b> Sağlıklı yaşam için hedefler belirlemek ve bu hedeflere ulaşmak için plan yapma sürecini ifade eder. Örneğin, düzenli egzersiz yapma veya dengeli beslenme hedeflerine yönelik planlamaları içerir.
              </p>
              <p className="mb-4"><b>Uzun vadeli hedeflerin belirlenmesi ve kısa vadeli planlamaların yapılması: </b> Bireyin sağlığını geliştirmeye yönelik uzun vadeli hedeflerin belirlenmesi, daha sonra bu hedeflere ulaşabilmek için kısa vadeli planların yapılmasını kapsar. Örneğin, gelecek yılki sağlık hedeflerini belirlemek ve bu hedeflere yönelik haftalık veya aylık planlar oluşturmak.
              </p>
              <p className="mb-4"><b>Zaman yönetimi ve kaynakların etkili kullanımı: </b> Planlama taahhüdü, sağlık geliştirme hedeflerine ulaşmak için zamanı ve kaynakları etkili bir şekilde kullanmayı içerir. Bireyin günlük rutinlerini sağlıklı yaşam hedeflerine uygun şekilde planlaması ve kaynaklarını bu amaca yönelik olarak kullanması gereklidir.
              </p>
              
          </div>
      </div>
  </div>
</div>
<Footer />
    </div>
  )
}

export default ModelBilesenDokuz