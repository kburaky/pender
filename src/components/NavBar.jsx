import React from 'react'

function NavBar() {
  return (
    <div>
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2"></i>Türkiye</small>
                <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@penderkahvaltimodeli.com</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Takip Et:</small>
                <a className="text-body ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-twitter"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="fw-bold text-primary m-0">Pender<span className="text-secondary">&nbsp;Kahvaltı</span> Modeli</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link active">Anasayfa</a>
                    <a href="/hakkinda" className="nav-item nav-link">Hakkında</a>
                    <a href="/kahvalti-besinleri" className="nav-item nav-link">Kahvaltı Besinleri</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Model Bileşenleri</a>
                        <div className="dropdown-menu m-0">
                            <a href="/onceki-ilgili-davranis" className="dropdown-item">Önceki İlgili Davranış</a>
                            <a href="/algilanan-fayda" className="dropdown-item">Algılanan Fayda</a>
                            <a href="/algilanan-engeller" className="dropdown-item">Algılanan Engeller</a>
                            <a href="/algilanan-ozyeterlilik" className="dropdown-item">Algılanan Özyeterlilik</a>
                            <a href="/kahvalti-olumlu-ve-olumsuz-etki" className="dropdown-item">Kahvaltı Olumlu ve Olumsuz Etki</a>
                            <a href="/kisiler-arasi-iliskiler" className="dropdown-item">Kişiler Arası İlişkiler</a>
                            <a href="/durumsal-etkiler" className="dropdown-item">Durumsal Etkiler</a>
                            <a href="/aninda-rekabet-eden-talepler-ve-tercihler" className="dropdown-item">Anında Rekabet Eden Talepler ve Tercihler</a>
                            <a href="/planlama-taahhudu" className="dropdown-item">Planlama Taahhüdü</a>
                        </div>
                    </div>
                    
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-search text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-user text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-shopping-bag text-body"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    </div>
  )
}

export default NavBar