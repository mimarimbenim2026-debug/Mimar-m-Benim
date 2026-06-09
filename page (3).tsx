# ArchiHub — Mimarlık Buluşma Platformu

Türkiye'nin mimarlık buluşma platformu. Mimarlar portföylerini paylaşır, müşteriler proje ilanı verir — her şey platform dışında anlaşılır, aracısız.

## Özellikler

- **Mimar Listesi** — Şehir, uzmanlık ve deneyim yılına göre filtreli arama
- **Mimar Profili** — Portföy, projeler, iletişim bilgileri
- **Proje İlanları** — Kategori ve şehre göre filtreli ilan listesi
- **İlan Ver** — Müşteriler için proje ilanı formu
- **Tam responsive** — Mobil, tablet ve masaüstü uyumlu

## Teknoloji

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ikonlar)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

## Proje Yapısı

```
archihub/
├── app/
│   ├── page.tsx              # Anasayfa
│   ├── mimarlar/
│   │   ├── page.tsx          # Mimar listesi
│   │   └── [slug]/page.tsx   # Mimar detay
│   ├── ilanlar/page.tsx      # Proje ilanları
│   ├── ilan-ver/page.tsx     # İlan ver formu
│   └── hakkimizda/page.tsx   # Hakkımızda
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MimarKart.tsx
│   └── IlanKart.tsx
└── data/
    ├── mimarlar.ts           # Mimar verileri
    └── ilanlar.ts            # İlan verileri
```

## Geliştirme Notları

Şu an tüm veriler `data/` klasöründeki statik dosyalarda tutulmaktadır. Gerçek kullanım için:

- PostgreSQL veya MongoDB ile veritabanı entegrasyonu
- Supabase veya Firebase ile auth sistemi
- Cloudinary veya S3 ile görsel yükleme
- Vercel veya Render üzerinde deploy

## Deploy (Vercel)

```bash
npm install -g vercel
vercel
```

---

Lisans: MIT
