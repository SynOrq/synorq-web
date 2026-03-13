import { Boxes, SlidersHorizontal, TrendingUp, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Boxes,
    title: "Süreç Standardizasyonu",
    description:
      "Ad-hoc çalışan ekipler için tekrarlanabilir, izlenebilir ve ölçülebilir süreç altyapısı kuruyoruz.",
  },
  {
    icon: SlidersHorizontal,
    title: "Merkezi Görünürlük",
    description:
      "Farklı araçlara dağılmış operasyonları tek kontrol katmanında toplayarak gerçek zamanlı karar desteği sağlıyoruz.",
  },
  {
    icon: TrendingUp,
    title: "Modüler Geçiş",
    description:
      "5 kişilik ekipten 500 kişilik organizasyona — ihtiyaç duyduğunuz modüllerle başlayın, büyüdükçe genişletin.",
  },
  {
    icon: ShieldCheck,
    title: "AI Destekli Workflow",
    description:
      "Yapay zekâyı hype olmaktan çıkarıp gerçek iş akışlarına entegre ediyoruz. Yönetilebilir, ölçülebilir, güvenilir.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              Neden Synorq?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Özel yazılım esnekliği,
              <br />
              <span className="gradient-text">SaaS ölçeklenebilirliği</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Synorq, klasik &ldquo;bir şeyler yap&rdquo; ajansı değil. Belirli sektörlerin
              tekrar eden operasyon problemlerini ürünleştiren, abonelik modeliyle sunan
              bir teknoloji markası.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Her modül gerçek sahadan gelen bir ihtiyaca yanıt verir. Kullanmak için IT
              uzmanı, anlamak için danışman gerekmez.
            </p>

            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-800 font-semibold leading-relaxed text-sm">
                &ldquo;Synorq, özel yazılım esnekliği ile SaaS ölçeklenebilirliğini bir araya getirir.
                İşletmelerin gerçek operasyon problemlerini, modüler ve uygulanabilir ürünlerle çözer.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Keşif Görüşmesi Planla
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-indigo-200 hover:text-indigo-600 transition-all"
              >
                Ürünleri İncele
              </a>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 bg-indigo-50 rounded-xl mb-4">
                    <Icon size={20} className="text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
