import Link from "next/link";
import { HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold mb-3">
              <HardHat className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
              <span>MimarımBenim</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Türkiye&apos;nin mimarlık buluşma platformu. Mimarlar ve müşteriler için.
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">Platform</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/mimarlar" className="hover:text-white transition-colors">Mimarları Keşfet</Link></li>
              <li><Link href="/ilanlar" className="hover:text-white transition-colors">Proje İlanları</Link></li>
              <li><Link href="/ilan-ver" className="hover:text-white transition-colors">İlan Ver</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">Uzmanlık Alanları</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/mimarlar?uzmanlik=Konut" className="hover:text-white transition-colors">Konut Mimarisi</Link></li>
              <li><Link href="/mimarlar?uzmanlik=Ticari" className="hover:text-white transition-colors">Ticari Projeler</Link></li>
              <li><Link href="/mimarlar?uzmanlik=İç Mimarlık" className="hover:text-white transition-colors">İç Mimarlık</Link></li>
              <li><Link href="/mimarlar?uzmanlik=Restorasyon" className="hover:text-white transition-colors">Restorasyon</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 text-xs text-stone-500 text-center">
          © {new Date().getFullYear()} MimarımBenim. Tüm hakları saklıdır. · mimarimbenim.com
        </div>
      </div>
    </footer>
  );
}
