Haber Porta(ka)lı 🍊

Angular ile geliştirilmiş, şık ve kullanıcı dostu bir haber portalı uygulamasıdır. Gerçek zamanlı haber listesi, kategori filtreleme, arama özelliği, slider, döviz kurları, hava durumu ve güncel saat bilgisi gibi özellikler içerir.

📌 Özellikler

📰 Güncel Haberler – Anasayfada listelenir

🔍 Canlı Arama – Başlığa göre debounce özelliğiyle hızlı filtreleme

🧫 Kategori Seçimi – Business, Sports, Technology kategorileri

🎮 Haber Slider – Öne çıkan ilk 10 haber kayan şekilde gösterilir

🗓️ Güncel Tarih & Saat – Sol üst köşede sürekli güncellenir

💱 Döviz Kurları – USD, EUR ve GBP kurları statik olarak sol panelde gösterilir

☀️ Hava Durumu – İstanbul için örnek hava durumu bilgisi sağ panelde gösterilir

💅 Modern Tasarım – SCSS ile responsive ve renk uyumlu tasarım

⚙️ Kurulum

git clone https://github.com/Selen21/news.git
cd haber-portali
npm install
ng serve

Uygulama localhost:4200 adresinde çalışacaktır.

🗂️ Proje Yapısı

src/
├── app/
│   ├── news-list/         → Ana sayfa (haber listesi, arama, slider)
│   ├── news-detail/       → Detay sayfası
│   ├── shared/            → Servisler (news.service.ts)
│   └── app-routing.module.ts
├── assets/
│   ├── styles/            → SCSS değişkenler ve genel stiller
│   └── screenshots/       → Uygulama ekran görüntüleri (örnek: homepage.png, slider.png)
├── environments/
│   └── environment.ts     → API anahtarı vs.
├── index.html
└── styles.scss

🔄 Son Güncellemeler

✅ Slider haberler tıklanabilir hale getirildi

✅ Detay sayfasına yönlendirme eklendi

✅ Sol panel: Döviz kurları (statik)

✅ Sağ panel: İstanbul hava durumu (statik)

✅ Sol üst köşeye tarih & saat eklendi

✅ Tasarım detayları iyileştirildi

🌐 Kullanılan Teknolojiler

Angular 16+

TypeScript

RxJS

SCSS

Angular Router

HTML5 / Flexbox

👩‍💻 Geliştirici

Selen Korkmaz 

GitHub: github.com/selen-korkmazLinkedIn: linkedin.com/in/selen-korkmaz

📌 Notlar

Döviz kurları ve hava durumu statik olarak gösterilmektedir.

Dilersen bu verileri API (exchangerate-api.com, openweathermap.org vb.) ile dinamik hale getirebilirsin.

 📸 Görseller

 Ana Sayfa
![Ana Sayfa](assets/screenshots/Anasayfa.png)

 Detay Sayfası
![Detay Sayfaları](assets/screenshots/Detaysayfasi.png)

