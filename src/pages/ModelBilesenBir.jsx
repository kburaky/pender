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
                        <img className="img-fluid w-100" alt="Önceki İlgili Davranış" src="img/model-bilesen-1.png"/>
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

            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                
                <p>Küçük çocuklara kahvaltı alışkanlığı kazandırmak önemlidir çünkü kahvaltı, günün en önemli öğünlerinden biridir ve çocukların enerji seviyelerini düzenler, konsantrasyonlarını artırır ve genel olarak sağlıklı bir yaşam tarzının temelini oluşturur. İşte çocuklara kahvaltı alışkanlığı kazandırmak için bazı ipuçları:</p>
<ol>
<li><b>Örnek Olun:</b> Çocuklar genellikle ebeveynlerinin davranışlarını taklit ederler. Bu yüzden siz düzenli olarak kahvaltı yapıyorsanız, çocuğunuz da bu davranışı benimseyecektir.</li>
<li><b>Seçenekler Sunun:</b> Çocuğunuzun kahvaltıda sevdiği yiyecekleri belirleyin ve bu yiyecekleri seçenek olarak sunun. Farklı meyveler, tahıllar, süt ürünleri veya yumurta gibi sağlıklı seçenekler arasından seçim yapmalarına izin verin.</li>
<li><b>Kahvaltıyı Eğlenceli Hale Getirin:</b> Kahvaltı zamanını eğlenceli hale getirerek çocuğunuzun ilgisini çekebilirsiniz. Renkli tabaklar, ilginç şekillerde kesilmiş meyveler veya kahvaltı masasında birlikte oynanabilecek oyunlar gibi yöntemler kullanılabilir.</li>
<li><b>Düzenli Olarak Yemek Saatlerini Belirleyin:</b> Sabah kahvaltı zamanını belirleyerek çocuğunuzun alışkanlık kazanmasına yardımcı olun. Düzenli bir kahvaltı saati, çocuğunuzun bu öğünü kaçırmamasını sağlayacaktır.</li>
<li><b>Ödüllendirme Yöntemini Kullanın:</b> Çocuğunuz kahvaltıyı düzenli olarak yaptığında veya sağlıklı seçenekleri tercih ettiğinde onu ödüllendirin. Bu, kahvaltı alışkanlığının pekişmesine yardımcı olabilir.</li>
<li><b>Onların Katılımını Sağlayın:</b> Çocuklar kendi kahvaltılarını hazırlamaya yardımcı olmaktan keyif alabilirler. Onlara basit görevler vererek (örneğin, meyve dilimleme, tahıl dökme) kahvaltı yapma sürecine katılmalarını sağlayabilirsiniz.</li>
<li><b>Sabırlı Olun ve Teşvik Edin:</b> Yeni bir alışkanlık kazanmak zaman alabilir ve çocuklar bazen direnç gösterebilirler. Sabırlı olun ve onları teşvik edin. Olumlu geri bildirimlerle ve sabırlı yaklaşımlarla kahvaltı alışkanlığını pekiştirebilirsiniz.</li>

</ol>

<p>Unutmayın ki her çocuk farklıdır ve bir yöntem diğerinden daha etkili olabilir. Çocuğunuzun ihtiyaçlarına ve ilgi alanlarına göre yaklaşarak kahvaltı alışkanlığını kazanmasına yardımcı olabilirsiniz.</p>

                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/M38R-BAPcyM?si=c6AAm7_Rxyo_HMKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
                    
                </div>
            </div>





        </div>
    </div>
    <Footer />
    </div>
  )
}

export default ModelBilesenBir