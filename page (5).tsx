import { HardHat, Target, Heart, Users } from "lucide-react";

export default function HakkimizdaSayfasi() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl mb-6">
          <HardHat className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-bold text-stone-900 mb-5 tracking-tight">MimarımBenim</h1>
        <p className="text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
          Türkiye&apos;nin mimarlık buluşma platformu. Mimarlar ile müşterileri doğrudan bir araya getiriyoruz.
        </p>
      </div>

      <div className="bg-stone-50 rounded-3xl p-10 mb-10 border border-stone-100">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Neden MimarımBenim?</h2>
        <p className="text-stone-600 leading-relaxed text-lg">
          Nitelikli bir mimar bulmak ya da projeniz için doğru kişiye ulaşmak zaman alıcı bir süreçtir.
          MimarımBenim, bu süreci basitleştirmek için kuruldu. Portföylere kolayca ulaşın, doğrudan iletişim kurun —
          aracısız, şeffaf, hızlı.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <Target className="w-6 h-6" />,
            baslik: "Doğrudan İletişim",
            aciklama: "Platform yalnızca buluşma noktasıdır. Mimar ile müşteri doğrudan iletişim kurar, süreç aralarında ilerler.",
          },
          {
            icon: <Heart className="w-6 h-6" />,
            baslik: "Nitelik Odaklı",
            aciklama: "Mimarların portföyleri ve geçmiş projeleri şeffaf şekilde sunulur. İşi konuşur.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            baslik: "Herkes İçin",
            aciklama: "Küçük iç mekan tadilatından büyük ticari projeye kadar her ölçekte buluşma mümkün.",
          },
        ].map((deger) => (
          <div key={deger.baslik} className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              {deger.icon}
            </div>
            <h3 className="font-semibold text-stone-900 mb-2">{deger.baslik}</h3>
            <p className="text-stone-500 text-sm leading-relaxed">{deger.aciklama}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-100 pt-12 text-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Bize Ulaşın</h2>
        <p className="text-stone-500 mb-6">
          Sorularınız, önerileriniz veya iş birliği talepleriniz için:
        </p>
        <a
          href="mailto:iletisim@mimarimbenim.com"
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
        >
          iletisim@mimarimbenim.com
        </a>
      </div>
    </div>
  );
}
