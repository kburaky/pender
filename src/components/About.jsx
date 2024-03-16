import React from 'react'

function About() {
  return (
    <div>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" alt='' src="img/about.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">PENDER'in Sağlığı Geliştirme Modeli nedir?</h1>
                    <p className="mb-4">PENDER’in Sağlık Geliştirme Modeli, bireylerin sağlık davranışlarını ve yaşam tarzlarını anlamak ve geliştirmek için kullanılan kapsamlı bir modeldir. Bu model, bireyin sağlık davranışlarını etkileyen sosyal, psikolojik, kişisel ve fizyolojik faktörleri ele alır. Sağlık davranışlarının kökenleri, insanın yaşam kalitesini nasıl etkilediği ve sağlık hizmeti kullanımının artırılmasına nasıl yardımcı olabileceği gibi konularda derinlemesine bilgi sunar.
                    </p>
                    <p><i className="fa fa-check text-primary me-3"></i>Sağlığı geliştirmek için bireylerin özgünlüğüne ve kendine özgü bakış açısına odaklanır</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Model, bireyin çeşitli etmenlerin etkisi altındaki karar alma sürecini ve sağlık davranışlarını değiştirme sürecini ayrıntılı biçimde ele alır.Bu sayede, sağlık profesyonelleri, bireylerin sağlık davranışlarını desteklemek ve olumlu değişikliklere teşvik etmek konusunda daha etkili olabilir.</p>
                    
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About