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
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Sebzeler</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Meyveler</a>
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
                                    <img className="img-fluid w-100" src="img/bsn-1-domates.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sebzeler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Domates</a>
                                    <span className="d-block text-primary me-1">18-20 kcal</span>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/bsn-2-kirmizibiber.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sebzeler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kırmızı Biber</a>
                                    <span className="d-block text-primary me-1">19 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/bsn-3-maydanoz.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sebzeler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Maydanoz</a>
                                    <span className="d-block text-primary me-1">36,1 kcal</span>
                                    
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/bsn-4-salatalik.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sebzeler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Salatalık</a>
                                    <span className="d-block text-primary me-1">15,5 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/bsn-5-yesilbiber.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sebzeler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Yeşil Biber</a>
                                    <span className="d-block text-primary me-1">27 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                                     
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-1-ahududu.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Ahududu</a>
                                    <span className="d-block text-primary me-1">52,6 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-2-elma.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Elma</a>
                                    <span className="d-block text-primary me-1">52,1 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-3-kayisi.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kayısı</a>
                                    <span className="d-block text-primary me-1">48 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-4-kivi.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kivi</a>
                                    <span className="d-block text-primary me-1">60,9 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-5-muz.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Muz</a>
                                    <span className="d-block text-primary me-1">88,7 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-6-nar.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Nar</a>
                                    <span className="d-block text-primary me-1">82,7 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-7-portakal.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Portakal</a>
                                    <span className="d-block text-primary me-1">47,1 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/meyve-8-seftali.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Meyveler</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Şeftali</a>
                                    <span className="d-block text-primary me-1">39,4 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>

                        

                    </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-1-beyazekmek.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Beyaz Ekmek</a>
                                    <span className="d-block text-primary me-1">264,6 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-2-cavdarekmek.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cavdarlı Ekmek</a>
                                    <span className="d-block text-primary me-1">259,1 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-3-granola.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Granola</a>
                                    <span className="d-block text-primary me-1">$471,3 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-4-kepekliekmek.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kepekli Ekmek</a>
                                    <span className="d-block text-primary me-1">216 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-5-misirgevregi.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Mısır Gevreği</a>
                                    <span className="d-block text-primary me-1">357,1 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-6-müsli.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Müsli</a>
                                    <span className="d-block text-primary me-1">317 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/ekmektahil-7-tambugdayekmek.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Ekmek ve Tahıllar</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Tam Buğday Ekmek</a>
                                    <span className="d-block text-primary me-1">247,1 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        

                    </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-1-ceviz.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Ceviz</a>
                                    <span className="d-block text-primary me-1">654 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-2-findik.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fındık</a>
                                    <span className="d-block text-primary me-1">658 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-3-fistik.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Yer Fıstığı</a>
                                    <span className="d-block text-primary me-1">567 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-4-kuruuzum.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Kuru Üzüm</a>
                                    <span className="d-block text-primary me-1">299,2 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-5-pekmez.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Pekmez</a>
                                    <span className="d-block text-primary me-1">242 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-6-tahin.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Tahin</a>
                                    <span className="d-block text-primary me-1">594,9 kcal</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/diger-7-yumurta.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Diğer</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Yumurta</a>
                                    <span className="d-block text-primary me-1">155,1 kcal</span>
                                    
                                </div>
                                
                            </div>
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