export type IlanDurumu = "Aktif" | "Kapandı";
export type ProjeKategorisi =
  | "Konut"
  | "Ticari"
  | "İç Mimarlık"
  | "Peyzaj"
  | "Restorasyon"
  | "Kentsel Tasarım"
  | "Endüstriyel"
  | "Hastane & Sağlık";

export interface Ilan {
  id: string;
  baslik: string;
  aciklama: string;
  kategori: ProjeKategorisi;
  sehir: string;
  butce?: string;
  tarih: string;
  durum: IlanDurumu;
  iletisim: string;
  ozellikler: string[];
}

export const UZMANLIKLAR_LIST: ProjeKategorisi[] = [
  "Konut",
  "Ticari",
  "İç Mimarlık",
  "Peyzaj",
  "Restorasyon",
  "Kentsel Tasarım",
  "Endüstriyel",
  "Hastane & Sağlık",
];

export const ILANLAR: Ilan[] = [
  {
    id: "i1",
    baslik: "Konut Projesi için Mimar Aranıyor",
    aciklama:
      "İstanbul Sarıyer'de 350 m² müstakil konut projesi için deneyimli mimar arıyoruz. Proje ön tasarım, ruhsat ve uygulama aşamalarını kapsamaktadır. Doğa ile uyumlu modern bir tasarım beklentimiz var.",
    kategori: "Konut",
    sehir: "İstanbul",
    butce: "150.000 - 250.000 ₺",
    tarih: "2024-12-15",
    durum: "Aktif",
    iletisim: "konut.proje@example.com",
    ozellikler: ["Ön Tasarım", "Ruhsat", "Uygulama Projesi", "Müstakil Konut"],
  },
  {
    id: "i2",
    baslik: "Cafe ve Restaurant İç Mekan Tasarımı",
    aciklama:
      "Kadıköy'de açacağımız 200 m² cafe-restaurant için özgün bir iç mekan tasarımı istiyoruz. Bohem-endüstriyel tarz beklentimiz var. Mobilya seçimi de dahil edebilir misiniz?",
    kategori: "İç Mimarlık",
    sehir: "İstanbul",
    butce: "80.000 - 120.000 ₺",
    tarih: "2024-12-20",
    durum: "Aktif",
    iletisim: "cafe.tasarim@example.com",
    ozellikler: ["İç Mekan Tasarımı", "Mobilya Seçimi", "3D Görselleştirme"],
  },
  {
    id: "i3",
    baslik: "Ofis Binası Mimari Projesi",
    aciklama:
      "Ankara Çankaya'da 1200 m² ofis binası projesi. LEED veya BREEAM sertifikasyonu hedefliyoruz. Sürdürülebilir tasarım deneyimi olan mimarlar tercih edilir.",
    kategori: "Ticari",
    sehir: "Ankara",
    butce: "200.000 - 350.000 ₺",
    tarih: "2024-12-10",
    durum: "Aktif",
    iletisim: "ofis.proje@example.com",
    ozellikler: ["Sürdürülebilir Tasarım", "LEED", "Ofis Binası", "Ruhsat"],
  },
  {
    id: "i4",
    baslik: "Tarihi Yalı Restorasyon Projesi",
    aciklama:
      "Boğaz'da tescilli 1890'lar dönemi yalısının restorasyon projesi. Koruma kurulu onay süreçlerine hakim, deneyimli restorasyon mimarı arıyoruz. Rölöve çalışması da dahildir.",
    kategori: "Restorasyon",
    sehir: "İstanbul",
    butce: "Görüşülecek",
    tarih: "2024-12-18",
    durum: "Aktif",
    iletisim: "yali.restorasyon@example.com",
    ozellikler: ["Rölöve", "Restorasyon", "Tescilli Yapı", "Koruma Kurulu"],
  },
  {
    id: "i5",
    baslik: "Villa Bahçe ve Peyzaj Tasarımı",
    aciklama:
      "İzmir Urla'da 2000 m² villa bahçesi peyzaj tasarımı. Akdeniz bitki örtüsü ve suyunan verimli sulama sistemleri beklentimiz var. Havuz çevresi tasarımı da dahildir.",
    kategori: "Peyzaj",
    sehir: "İzmir",
    butce: "60.000 - 100.000 ₺",
    tarih: "2024-12-22",
    durum: "Aktif",
    iletisim: "villa.peyzaj@example.com",
    ozellikler: ["Peyzaj Tasarımı", "Sulama Sistemi", "Havuz Çevresi", "Akdeniz Bitkiler"],
  },
  {
    id: "i6",
    baslik: "Depo ve Lojistik Merkezi Projesi",
    aciklama:
      "Bursa OSB'de 5000 m² depo ve lojistik merkezi projesi. Zemin etüdü mevcut. Yükleme rampaları ve yönetim ofisi dahil çözüm bekliyoruz.",
    kategori: "Endüstriyel",
    sehir: "Bursa",
    butce: "180.000 - 280.000 ₺",
    tarih: "2024-12-08",
    durum: "Aktif",
    iletisim: "depo.proje@example.com",
    ozellikler: ["Endüstriyel Yapı", "Lojistik", "OSB", "Uygulama Projesi"],
  },
];
