import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function ParentEducation() {
  return (
    <div>
      <NavBar />
      <Breadcrumb page="Ebeveyn Rolü" title="Ebeveyn Rolü" />

      <div className="container-xxl py-5">
  <div className="container">
      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" src="img/ebeveyn.jpg" alt="Image"/>
              </div>

          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-5 mb-4">Düzenli ve Sağlıklı Kahvaltı Tüketiminde Ebeveynlerin Rolü</h1>
             <ul>
             <li>Çocuk ve ergenlerin sağlık davranışları için aile ortamı oldukça önemlidir.</li> 
             <li>Olumlu bir aile sisteminin, rol modelleme, sağlıklı gıdaların sağlanması ve sağlıklı beslenme davranışlarına katılma desteği yoluyla faydalı sağlık davranışlarını oluşturan ve teşvik eden bir sürecin parçası olabileceğini göstermiştir </li>
             <li>Aile, bireylerin toplamından daha fazlası olduğundan bir sistem olarak düşünülebilir. </li>
             <li>Günlük aile yaşamındaki bireysel deneyimi, sağlıkla ilgili konuların değerlendirilmesini ve aile içindeki tipik değerler, davranış rutinleri ve etkileşim kalıpları açısından beklentileri yansıtır. </li>
             <li>Çocukların başkalarının eylemlerini taklit etme ve özellikle ebeveynlerini gözlemleyerek öğrenme yetenekleri, geliştirilen kahvaltı tüketiminin türünü açıklayabilir. </li>


              </ul> 
              
          </div>
      </div>

      <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                
            <p><b>İşte ebeveynlerin çocuklarının kahvaltı alışkanlıklarını nasıl geliştirebileceği üzerine bazı öneriler:</b></p>
          <ol>
            <li><b>Örnek Olarak Davranma:</b> Ebeveynlerin kendi sağlıklı beslenme alışkanlıkları, çocukları için etkili bir rol model oluşturabilir. Araştırmalar, ebeveynlerin yeme davranışlarının, çocukların yeme alışkanlıkları üzerinde doğrudan bir etkisi olduğunu göstermektedir. Ebeveynlerin yemesi için ödül verme, yiyecek kısıtlama durumları ve kuralcı – katı bir şekilde çocuk yetiştirme tarzı çocukların beslenme davranışlarıyla ilgilidir.</li>
            <li><b>Kahvaltıyı Ailece Yapma:</b> Ortak yemek zamanları, çocukların sağlıklı beslenme alışkanlıkları kazanmalarına yardımcı olabilir. Ailece yapılan kahvaltılar, çocukların bu öğünü atlamamalarını sağlar ve aile içi bağları güçlendirir.
              <ul>
                <li>Ailesiyle birlikte kahvaltı yapan çocukların daha sağlıklı ve düzenli beslendiği, daha az zararlı besin tükettiği tükettiği görülmektedir.</li>
              </ul>
            </li>
            <li><b>Çeşitli ve Dengeli Kahvaltı Sunumu:</b> Kahvaltının çeşitliliği, çocukların farklı besin gruplarından gereken besinleri almalarını sağlar. Meyve, sebzeler, tam tahıllar ve protein kaynakları dengeli bir kahvaltının temel unsurlarıdır.</li>
            <li><b>Çocukların Hazırlık Sürecine Katılımı:</b> Çocukları kahvaltı hazırlama sürecine dahil etmek, yemeklere olan ilgilerini artırabilir ve sağlıklı beslenme konusunda bilinçlenmelerini sağlar. Bu, onların yemek tercihlerini ve yeme davranışlarını olumlu yönde etkiler.</li>
            <li><b>Düzenli ve İdeal Zamanlarda Kahvaltı Yapılması:</b> Sabah kahvaltısının düzenli saatlerde yapılması, çocukların gün içindeki enerji seviyelerini ve konsantrasyonlarını artırır. Ayrıca, metabolizmanın düzenli çalışmasına katkıda bulunur.</li>
            <li><b>Kahvaltının Atlamaması:</b> Özellikle okul çağındaki çocuklar için kahvaltı çok önemlidir. Kahvaltı, çocukların gün içindeki öğrenme ve fiziksel aktiviteler için gerekli olan enerjiyi sağlar. Ebeveynlerin bazen zamanlarının olmaması bazen de kolaylarına geldiği için evde kahvaltı ya da beslenme çantası hazırlamayıp çocuklarının dışardan beslenmelerine göz yummaları,</li>
          </ol>
          <p>Bu stratejiler, ebeveynlerin çocuklarını sağlıklı beslenme yönünde teşvik etmeleri ve onlara destek olmaları için kritik öneme sahiptir. Ebeveynler bu yöntemlerle çocuklarının sağlıklı büyümelerine önemli katkılarda bulunabilirler.</p>    


          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" src="img/ebeveyn2.jpg" alt="Image"/>
              </div>
                    
                    
          </div>
      </div>




  </div>
</div>

      <Footer />
      
    </div>
  )
}

export default ParentEducation