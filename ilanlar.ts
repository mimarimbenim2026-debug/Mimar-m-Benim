import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Briefcase } from "lucide-react";
import type { Mimar } from "@/data/mimarlar";

interface Props {
  mimar: Mimar;
}

export default function MimarKart({ mimar }: Props) {
  return (
    <Link
      href={`/mimarlar/${mimar.slug}`}
      className="group block bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all duration-300"
    >
      {/* Profil fotoğrafı */}
      <div className="relative h-52 bg-stone-100 overflow-hidden">
        <Image
          src={mimar.gorsel}
          alt={mimar.ad}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {mimar.oneIkari && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Öne Çıkan
          </div>
        )}
      </div>

      {/* İçerik */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-stone-900 text-base group-hover:text-amber-700 transition-colors">
              {mimar.ad}
            </h3>
            <p className="text-stone-500 text-sm">{mimar.unvan}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-stone-700">{mimar.puan.toFixed(1)}</span>
          </div>
        </div>

        {/* Konum & Deneyim */}
        <div className="flex items-center gap-4 text-stone-500 text-sm mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {mimar.sehir}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            {mimar.deneyimYil} yıl
          </span>
        </div>

        {/* Uzmanlıklar */}
        <div className="flex flex-wrap gap-1.5">
          {mimar.uzmanliklar.slice(0, 3).map((u) => (
            <span
              key={u}
              className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full"
            >
              {u}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
