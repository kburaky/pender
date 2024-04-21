import React from 'react'

function Footer() {
  return (
    <div>

    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">

        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    
                    <h1 className="fw-bold text-primary mb-4">Pender<span className="text-secondary">&nbsp;Kahvaltı</span> Modeli</h1>
                    <p>Enerji Dolu Bir Gün İçin Hazırlık!</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Adres</h4>
                    <p><i className="fa fa-map-marker-alt me-3"></i>Türkiye</p>
                    <p><i className="fa fa-phone-alt me-3"></i>(0312) 123 45 67</p>
                    <p><i className="fa fa-envelope me-3"></i>info@penderkahvaltimodeli.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Hızlı Linkler</h4>
                    <a className="btn btn-link" href="">Hakkında</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Bülten</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: 400}}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" 
                            type="text" 
                            placeholder="Email adresinizi giriniz..."/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Kaydol</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Pender Kahvaltı Modeli</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        
                        Designed By <a href="https://github.com/kburaky">kburaky</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Footer