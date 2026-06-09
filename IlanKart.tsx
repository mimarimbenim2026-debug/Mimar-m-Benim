"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HardHat, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const LINKLER = [
  { href: "/mimarlar", label: "Mimarlar" },
  { href: "/ilanlar", label: "Proje İlanları" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [menuAcik, setMenuAcik] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setYukleniyor(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleCikis = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const rol = user?.user_metadata?.rol as "mimar" | "musteri" | undefined;
  const ad = user?.user_metadata?.ad || user?.email?.split("@")[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-semibold text-stone-900">
            <HardHat className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
            <span className="text-lg tracking-tight">MimarımBenim</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKLER.map((link) => {
              const aktif = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    aktif ? "bg-stone-100 text-stone-900" : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {!yukleniyor && (
              <>
                {user ? (
                  <div className="flex items-center gap-2 ml-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      {ad}
                      {rol && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          rol === "mimar" ? "bg-amber-100 text-amber-700" : "bg-blue-50 text-blue-700"
                        }`}>
                          {rol === "mimar" ? "Mimar" : "Müşteri"}
                        </span>
                      )}
                    </Link>
                    <button
                      onClick={handleCikis}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-stone-500 hover:text-stone-700 hover:bg-stone-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 ml-2">
                    <Link
                      href="/auth/giris"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    >
                      Giriş Yap
                    </Link>
                    <Link
                      href="/auth/kayit"
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                    >
                      Kayıt Ol
                    </Link>
                  </div>
                )}
              </>
            )}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuAcik(!menuAcik)}
            aria-label="Menüyü aç/kapat"
          >
            {menuAcik ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuAcik && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 py-3 flex flex-col gap-1">
          {LINKLER.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuAcik(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-stone-100 text-stone-900" : "text-stone-600 hover:bg-stone-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link href="/dashboard" onClick={() => setMenuAcik(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50 flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <button onClick={() => { handleCikis(); setMenuAcik(false); }} className="px-4 py-3 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50 flex items-center gap-2 w-full text-left">
                <LogOut className="w-4 h-4" /> Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/giris" onClick={() => setMenuAcik(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50">Giriş Yap</Link>
              <Link href="/auth/kayit" onClick={() => setMenuAcik(false)} className="px-4 py-3 rounded-lg text-sm font-medium bg-amber-600 text-white text-center rounded-lg">Kayıt Ol</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
