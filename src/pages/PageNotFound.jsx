import React from 'react'

function PageNotFound() {
  return (
    <div>
        <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Sayfa Bulunamadı</h1>
                    <p className="mb-4">Üzgünüz, aradığınız sayfa sitemizde mevcut değil! Belki ana sayfamıza gidebilir veya bir arama yapmayı deneyebilirsin?</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Anasayfaya geri dön</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PageNotFound