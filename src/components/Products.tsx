import {
  FolderKanban,
  Settings2,
  Users,
  BarChart3,
  Bot,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: FolderKanban,
    name: "Synorq Projects",
    tagline: "Proje Yönetimi",
    description:
      "Ekiplerinizin projelerini planlayın, takip edin ve başarıyla tamamlayın. Gerçek zamanlı görünürlük ve akıllı önceliklendirme ile.",
    color: "indigo",
    features: ["Kanban & Gantt görünümleri", "Sprint planlaması", "Zaman takibi", "Raporlama"],
  },
  {
    icon: Settings2,
    name: "Synorq Ops",
    tagline: "Operasyon Yönetimi",
    description:
      "Dağınık operasyonlarınızı tek bir kontrol katmanında toplayın. SOP'larınızı dijitalleştirin, süreçleri otomatikleştirin.",
    color: "violet",
    features: ["SOP yönetimi", "Süreç otomasyonu", "Görev delegasyonu", "Denetim izleri"],
  },
  {
    icon: Users,
    name: "Synorq CRM",
    tagline: "Müşteri Süreçleri",
    description:
      "Müşteri ilişkilerinizi, satış pipeline'ınızı ve iletişimlerinizi tek platformda yönetin.",
    color: "cyan",
    features: ["Pipeline yönetimi", "İletişim geçmişi", "Teklif & sözleşme", "Müşteri portalı"],
  },
  {
    icon: BarChart3,
    name: "Synorq Risk",
    tagline: "Risk Analitiği",
    description:
      "Sektörünüze özgü risk faktörlerini anlık analiz edin. AI destekli erken uyarı sistemleri ile proaktif karar alın.",
    color: "amber",
    features: ["Sektör bazlı analiz", "Erken uyarı sistemi", "Risk skoru", "Senaryo modellemesi"],
  },
  {
    icon: Bot,
    name: "Synorq AI",
    tagline: "AI Orchestration",
    description:
      "Yapay zekâ araçlarını iş süreçlerinizle entegre edin. AI iş akışlarını merkezi olarak yönetin ve ölçeklendirin.",
    color: "emerald",
    features: ["Multi-agent yönetimi", "Prompt kütüphanesi", "AI görev otomasyonu", "LLM entegrasyonu"],
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string; border: string; hover: string }> = {
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    tag: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-100",
    hover: "hover:border-indigo-300 hover:shadow-indigo-100",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    tag: "bg-violet-100 text-violet-700",
    border: "border-violet-100",
    hover: "hover:border-violet-300 hover:shadow-violet-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    tag: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300 hover:shadow-cyan-100",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    tag: "bg-amber-100 text-amber-700",
    border: "border-amber-100",
    hover: "hover:border-amber-300 hover:shadow-amber-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300 hover:shadow-emerald-100",
  },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Ürün Ailesi
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Her Operasyon İçin
            <br />
            <span className="gradient-text">Doğru Araç</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Synorq ürün ailesi, işletmenizin farklı ihtiyaçlarını karşılayan,
            birbirine entegre modern SaaS uygulamalarından oluşur.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const colors = colorMap[product.color];
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative bg-white rounded-2xl border ${colors.border} p-7 transition-all duration-300 hover:shadow-xl ${colors.hover} hover:-translate-y-1 cursor-pointer`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-5`}>
                  <Icon size={22} className={colors.icon} />
                </div>

                {/* Tag */}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.tag}`}>
                  {product.tagline}
                </span>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.icon} bg-current`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} className={colors.icon} />
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800 rounded-2xl p-7 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
            <div>
              <h3 className="text-xl font-bold mb-3">Özel Çözüm mü Arıyorsunuz?</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Sektörünüze özel ihtiyaçlarınız için Synorq ekibiyle konuşun.
                Birlikte doğru çözümü tasarlayalım.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm w-fit"
            >
              Bize Ulaşın <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
