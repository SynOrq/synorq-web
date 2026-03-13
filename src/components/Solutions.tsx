import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    sector: "KOBİ'ler",
    problem: "Excel tablolarına, WhatsApp gruplarına ve dağınık araçlara bağımlı bir operasyon yapısı büyümeyi engeller.",
    solution: "Synorq, tüm operasyonları tek bir yönetim katmanında birleştirerek ekiplere görünürlük ve kontrol sağlar.",
    result: "Daha az kayıp görev, daha az iletişim gürültüsü, daha hızlı karar alma.",
    benefits: [
      "Tek platformda operasyon yönetimi",
      "Hızlı kurulum, düşük öğrenme eğrisi",
      "Ekip büyüdükçe ölçeklenen yapı",
      "Maliyet etkin modüler abonelik",
    ],
  },
  {
    sector: "Ajanslar & Danışmanlık Firmaları",
    problem: "Dağınık müşteri iletişimi, takipsiz görevler ve elle yapılan raporlama ekip kapasitesini tüketir.",
    solution: "Synorq, çoklu müşteri ve proje yönetimini tek hatta toplayarak hem ekip hem müşteri görünürlüğünü artırır.",
    result: "Daha profesyonel müşteri deneyimi, daha az iç karmaşa, daha yüksek proje teslim hızı.",
    benefits: [
      "Çoklu müşteri proje görünürlüğü",
      "Zaman ve kaynak takibi",
      "Müşteri raporlama portalı",
      "Faturalama süreç entegrasyonu",
    ],
  },
  {
    sector: "Süreç Yoğun İşletmeler",
    problem: "Lojistik, saha operasyonları, çok şubeli yapılar — operasyonel karmaşıklık arttıkça görünürlük azalır.",
    solution: "Synorq, sektöre özel iş akışları ve risk analitiği ile operasyonel kontrolü merkezi hale getirir.",
    result: "Azalan operasyonel risk, iyileşen uyumluluk, gerçek zamanlı karar desteği.",
    benefits: [
      "Sektöre özel iş akışı yapılandırması",
      "Compliance & denetim yönetimi",
      "Risk izleme dashboardları",
      "ERP ve harici sistem entegrasyonu",
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
            Kime Göre Tasarlandı
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Kendinizi burada
            <br />
            <span className="gradient-text">görün</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Her segmentin kendine özgü operasyonel ağrı noktaları vardır.
            Synorq, bu ağrı noktalarından yola çıkarak tasarlandı.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((sol, i) => (
            <div
              key={sol.sector}
              className="relative rounded-2xl border border-gray-100 p-8 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Number */}
              <div className="text-6xl font-black text-gray-50 select-none leading-none mb-3">
                0{i + 1}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">{sol.sector}</h3>

              {/* Problem */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Problem</span>
                <p className="text-gray-500 text-sm leading-relaxed mt-1">{sol.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Çözüm</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">{sol.solution}</p>
              </div>

              {/* Result */}
              <div className="mb-5 p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Sonuç</span>
                <p className="text-green-800 text-sm leading-relaxed mt-1 font-medium">{sol.result}</p>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 flex-1">
                {sol.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Hangi kategoride olduğunuzdan emin değil misiniz?
          </h3>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
            30 dakikalık ücretsiz keşif görüşmesinde mevcut operasyonunuzu birlikte
            değerlendirelim, size en uygun Synorq yapılandırmasını önerelim.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Keşif Görüşmesi Planla <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
