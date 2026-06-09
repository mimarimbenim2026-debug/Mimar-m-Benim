"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { HardHat, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Suspense } from "react";

function GirisFormu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [form, setForm] = useState({ email: "", sifre: "" });
  const [sifreGoster, setSifreGoster] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState(
    searchParams.get("hata") === "dogrulama-basarisiz"
      ? "Doğrulama başarısız. Lütfen tekrar deneyin."
      : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setHata("");
  };

  const handleGiris = async (e: React.FormEvent) => {
    e.preventDefault();
    setYukleniyor(true);
    setHata("");

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.sifre,
    });

    setYukleniyor(false);

    if (error) {
      if (error.message.includes("Invalid login")) {
        setHata("E-posta veya şifre hatalı.");
      } else if (error.message.includes("Email not confirmed")) {
        setHata("E-postanızı henüz doğrulamadınız. Gelen kutunuzu kontrol edin.");
      } else {
        setHata(error.message);
      }
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-stone-900 text-xl">
            <HardHat className="w-7 h-7 text-amber-600" strokeWidth={1.5} />
            MimarımBenim
          </Link>
          <p className="text-stone-500 mt-2 text-sm">Hesabına giriş yap</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleGiris} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">E-posta</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="ornek@email.com"
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-medium text-stone-700">Şifre</label>
              </div>
              <div className="relative">
                <input
                  type={sifreGoster ? "text" : "password"}
                  name="sifre"
                  value={form.sifre}
                  onChange={handleChange}
                  required
                  placeholder="Şifreniz"
                  className="w-full px-4 py-2.5 pr-11 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-sm"
                />
                <button
                  type="button"
                  onClick={() => setSifreGoster(!sifreGoster)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  {sifreGoster ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {hata && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                {hata}
              </div>
            )}

            <button
              type="submit"
              disabled={yukleniyor}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-stone-900 font-semibold py-3 rounded-xl transition-colors text-sm mt-1"
            >
              {yukleniyor ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <p className="text-center text-sm text-stone-500 mt-5">
            Hesabın yok mu?{" "}
            <Link href="/auth/kayit" className="text-amber-600 hover:text-amber-700 font-medium">
              Kayıt Ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GirisSayfasi() {
  return (
    <Suspense>
      <GirisFormu />
    </Suspense>
  );
}
