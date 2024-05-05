import React from 'react'

function About() {
  return (
    <div>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" alt='' src="img/nola.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">PENDER'in Sağlığı Geliştirme Modeli nedir?</h1>
                    <p className="mb-4 hakkindatext">Pender'in Sağlığı Geliştirme Modeli (SGM), sağlıksız davranışları planlamak ve değiştirmek
ve sağlığı geliştirmek için yaygın olarak kullanılan modellerden biridir.
                    </p>
                    {/*<p><i className="fa fa-check text-primary me-3"></i>Sağlığı geliştirmek için bireylerin özgünlüğüne ve kendine özgü bakış açısına odaklanır</p>*/}
                    
                    
                    
                </div>
            </div>
            

            <div className="row g-5 align-items-center">
                
                <h1 className="display-5 mb-3 text-left">Model Bileşenleri</h1>

                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Önceki İlgili Davranış</p>
                <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Algılanan Fayda</p>
                <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Algılanan Engeller</p>
                <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Algılanan Özyeterlilik</p>
                <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Olumlu ve Olumsuz Etki</p>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    
                    <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Kişilerarası Etkiler</p>
                    <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Durumsal Etkiler</p>
                    <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Anında Rekabet Eden Talepler ve Tercihler</p>
                    <p className="mb-4 hakkindatext"><i className="fa fa-check text-primary me-3"></i>Planlama Taahhüdü</p>
                    
                    
                </div>
            </div>


        </div>
    </div>
    </div>
  )
}

export default About