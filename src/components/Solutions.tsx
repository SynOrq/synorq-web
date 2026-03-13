import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    sector: "KOBİ'ler",
    description:
      "Büyüme sürecindeki işletmeler için operasyonel altyapı. Dağınık Excel tablolarından, gerçek bir yönetim platformuna geçin.",
    benefits: [
      "Tüm operasyonları tek platformda",
      "Hızlı kurulum, kolay kullanım",
      "Büyümeyle birlikte ölçeklenen yapı",
      "Maliyet etkin abonelik modeli",
    ],
  },
  {
    sector: "Ajanslar & Danışmanlık",
    description:
      "Çoklu müşteri ve proje yönetimini kolaylaştırın. Ekip verimliliğini artırın, müşteri memnuniyetini yükseltin.",
    benefits: [
      "Çoklu müşteri proje yönetimi",
      "Zaman ve kaynak takibi",
      "Müşteri raporlama portalı",
      "Faturalama entegrasyonu",
    ],
  },
  {
    sector: "Operasyonel Yoğun Sektörler",
    description:
      "Lojistik, üretim, sağlık gibi süreç yoğun sektörler için sektör bazlı çözümler ve risk analitiği.",
    benefits: [
      "Sektöre özel iş akışları",
      "Compliance & denetim yönetimi",
      "Risk izleme dashboardları",
      "ERP entegrasyon desteği",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium mb-4">
            Sektörel Çözümler
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Sektörünüze Özel
            <br />
            <span className="gradient-text">Çözümler</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Her sektörün kendine özgü operasyonel ihtiyaçları vardır.
            Synorq, bu ihtiyaçları anlayarak gerçek problemleri çözer.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <div
              key={sol.sector}
              className="relative rounded-2xl border border-gray-100 p-8 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number */}
              <div className="text-7xl font-black text-gray-50 select-none mb-4 leading-none">
                0{i + 1}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.sector}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{sol.description}</p>

              <ul className="space-y-2.5">
                {sol.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            İşletmeniz için doğru çözümü birlikte belirleyelim
          </h3>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
            30 dakikalık keşif görüşmesinde mevcut operasyonunuzu dinleyelim,
            size en uygun Synorq yapılandırmasını önerelim.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Ücretsiz Keşif Görüşmesi Planla
          </a>
        </div>
      </div>
    </section>
  );
}
