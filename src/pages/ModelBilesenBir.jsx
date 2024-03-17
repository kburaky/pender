import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ModelBilesenBir() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Önceki İlgili Davranış" title="Önceki İlgili Davranış" />


      <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" alt="Önceki İlgili Davranış" src="img/about.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">Modelin birinci bileşeni: Önceki İlgili Davranış</h1>
                    <p className="mb-4">Pender Sağlık Geliştirme Modeline göre, bir kişinin belirli bir sağlık davranışını değiştirmesi için öncelikle o davranışın önceki durumunu anlamak gereklidir. Önceki ilgili davranış, kişinin daha önce benzer bir durumda sergilediği sağlıkla ilgili davranışları kapsamaktadır.
                    </p>
                    <p className="mb-4">Bu bileşen, kişinin şu ana kadarki davranış geçmişi, alışkanlıkları, ve sağlıkla ilgili deneyimlerini içerir. Kişinin önceki davranışları ve deneyimleri, mevcut davranışları değiştirme potansiyelini etkileyebilir. Önceki ilgili davranış bileşeni, kişinin davranış değişikliği için temel oluşturan önemli bir noktadır.
                    </p>
                    <p className="mb-4">Bu bileşenin anlaşılması, kişinin neden hedef davranışı sergilemekte zorlandığını veya bu davranışı devam ettirmekte zorlanacağını anlamak için temel bir adımdır.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default ModelBilesenBir