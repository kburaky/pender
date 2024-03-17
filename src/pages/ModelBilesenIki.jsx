import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ModelBilesenIki() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Algılanan Fayda" title="Algılanan Fayda" />


<div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" alt="Algılanan Fayda" src="img/about.jpg"/>
              </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Modelin ikinci bileşeni: Algılanan Fayda</h1>
              <p className="mb-4"><b>Hissedilen Yararlar:</b> Sağlık davranışlarının faydalı sonuçlarının algılanması, bireyde olumlu bir motivasyon yaratabilir. Örneğin, düzenli egzersiz yapmanın fiziksel ve zihinsel sağlık üzerinde olumlu etkileri olduğunu bilmek, bireyin spor yapma isteğini artırabilir.
              </p>
              <p className="mb-4"><b>Toplumsal Faydalar:</b> Bazı sağlık davranışlarının toplumun genel sağlığına fayda sağladığının bilincine varmak, bireyde bu davranışları gerçekleştirme isteği uyandırabilir. Örneğin, aşı olmanın sadece bireysel sağlık için değil, toplumun genel bağışıklık seviyesini artırarak salgın hastalıkların yayılmasını engellemek adına da önemli olduğunu bilmek, kişileri aşı olmaya teşvik edebilir.
              </p>
              <p className="mb-4"><b>Beklentilerin Karşılanması:</b> Sağlık davranışlarının, bireyin beklentilerini ve ihtiyaçlarını karşılayacağına inanması, o davranışı gerçekleştirme isteğini artırabilir. Örneğin, sağlıklı beslenmenin bireyin kendini daha enerjik ve mutlu hissetmesine yardımcı olacağına inanmak, bu davranışı benimseme konusunda etkili olabilir.
              </p>
              
          </div>
      </div>
  </div>
</div>
<Footer />
    </div>
  )
}

export default ModelBilesenIki