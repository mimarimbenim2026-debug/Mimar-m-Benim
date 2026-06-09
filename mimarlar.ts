import Link from "next/link";
import { MapPin, Calendar, Tag } from "lucide-react";
import type { Ilan } from "@/data/ilanlar";

interface Props {
  ilan: Ilan;
}

const KATEGORI_RENK: Record<string, string> = {
  Konut: "bg-blue-50 text-blue-700",
  Ticari: "bg-purple-50 text-purple-700",
  "İç Mimarlık": "bg-pink-50 text-pink-700",
  Peyzaj: "bg-green-50 text-green-700",
  Restorasyon: "bg-amber-50 text-amber-700",
  "Kentsel Tasarım": "bg-teal-50 text-teal-700",
  Endüstriyel: "bg-stone-100 text-stone-700",
  "Hastane & Sağlık": "bg-red-50 text-red-700",
};

export default function IlanKart({ ilan }: Props) {
  const tarihStr = new Date(ilan.tarih).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-amber-300 hover:shadow-md transition-all duration-200">
      {/* Üst satır */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-stone-900 text-base leading-snug">{ilan.baslik}</h3>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
            KATEGORI_RENK[ilan.kategori] ?? "bg-stone-100 text-stone-600"
          }`}
        >
          {ilan.kategori}
        </span>
      </div>

      {/* Açıklama */}
      <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {ilan.aciklama}
      </p>

      {/* Meta bilgiler */}
      <div className="flex flex-wrap items-center gap-4 text-stone-500 text-sm mb-4">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          {ilan.sehir}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {tarihStr}
        </span>
        {ilan.butce && (
          <span className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            {ilan.butce}
          </span>
        )}
      </div>

      {/* Özellikler */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {ilan.ozellikler.slice(0, 4).map((o) => (
          <span key={o} className="text-xs bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded">
            {o}
          </span>
        ))}
      </div>

      {/* İletişim */}
      <a
        href={`mailto:${ilan.iletisim}`}
        className="inline-flex items-center gap-2 bg-stone-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-amber-600 transition-colors"
      >
        Başvur / İletişime Geç
      </a>
    </div>
  );
}
