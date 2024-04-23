import React from 'react'

function Product() {
  return (
    <div>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-4">
                    <div className="section-header text-start mb-5 wow fadeInUp" 
                    data-wow-delay="0.1s" 
                    style={{maxWidth: 500}}>
                        <h1 className="display-5 mb-3">Besinler</h1>
                        <p>Kahvaltı Besinleri ve kalori değerleri</p>
                    </div>
                </div>
                
                <div class="col-lg-8 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Süt ve Süt Ürünleri</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Meyveler </a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Sebzeler</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-4">Ekmekler ve Tahıllar</a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-5">Diğer</a>
                        </li>
                    </ul>
                </div>



            </div>
            <div className="tab-content">

                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-1-sut.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Süt</a>
                                    <span className="d-block text-primary me-1">42,3 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-2-yogurt.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Yoğurt</a>
                                    <span className="d-block text-primary me-1">58,8 kcal</span>
                                    
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-3-meyveliyogurt.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Meyveli Yoğurt</a>
                                    <span className="d-block text-primary me-1">122 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-4-beyazpeynir.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Beyaz Peynir</a>
                                    <span className="d-block text-primary me-1">309 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-5-kasarpeynir.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kaşar Peynir</a>
                                    <span className="d-block text-primary me-1">353 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-6-lorpeynir.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Lor Peynir</a>
                                    <span className="d-block text-primary me-1">72 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-7-krempeynir.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Krem Peynir</a>
                                    <span className="d-block text-primary me-1">342 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/besin-8-tulumpeynir.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Süt ve Süt Ürünleri</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Tulum Peynir</a>
                                    <span className="d-block text-primary me-1">326 kcal</span>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Daha fazla besin gör</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product