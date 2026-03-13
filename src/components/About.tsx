import { Target, Lightbulb, TrendingUp, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Gerçek Problem Odaklı",
    description:
      "Hayali senaryolar değil, gerçek iş problemlerini çözüyoruz. Her ürün, sahadan gelen bir ihtiyaca yanıt verir.",
  },
  {
    icon: Lightbulb,
    title: "Sadelik İlkesi",
    description:
      "Karmaşık iş süreçlerini basitleştirmek için tasarlandık. Kullanmak için MBA derecesine ihtiyaç duymazsınız.",
  },
  {
    icon: TrendingUp,
    title: "Büyümeyle Ölçeklenir",
    description:
      "5 kişilik bir ekiple başlayıp 500 kişilik organizasyona büyüdüğünüzde Synorq sizinle büyür.",
  },
  {
    icon: Shield,
    title: "Güven & Şeffaflık",
    description:
      "Verileriniz güvende, süreçleriniz şeffaf. Kurumsal güvenlik standartlarıyla kişisel servis kalitesini birleştiriyoruz.",
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
              Hakkımızda
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Ajans modelini
              <br />
              <span className="gradient-text">ürün yaklaşımıyla</span>
              <br />
              birleştirdik
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Synorq, işletmelerin operasyonlarını, projelerini ve yapay zekâ
                destekli iş akışlarını daha verimli, daha kontrollü ve daha
                ölçeklenebilir şekilde yönetmesini sağlayan bir yazılım
                geliştirme ve dikey SaaS ürün şirketidir.
              </p>
              <p>
                Özellikle KOBİ&apos;ler, ajanslar ve operasyonel karmaşıklığı
                yüksek sektörler için, gerçek iş problemlerini çözen modern
                dijital ürünler geliştiriyoruz.
              </p>
              <p>
                Yalnızca özel yazılım üreten bir yapı değil; belirli sektörlere
                yönelik, tekrar eden problemleri ürünleştiren ve abonelik
                modeliyle sunan bir teknoloji markasıyız.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-800 font-semibold italic leading-relaxed">
                &ldquo;Synorq, iş operasyonlarını ve AI destekli süreçleri tek merkezden
                yöneten yeni nesil bir B2B SaaS ve yazılım markasıdır.&rdquo;
              </p>
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
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
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
