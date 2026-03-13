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
    value: "Projeleri, görevleri ve ekip koordinasyonunu tek panelden yönetin.",
    useCases: ["Görev ve teslim takibi", "Ekip görünürlüğü", "Operasyonel planlama"],
    color: "indigo",
  },
  {
    icon: Settings2,
    name: "Synorq Ops",
    tagline: "Operasyon Yönetimi",
    value: "SOP'larınızı dijitalleştirin, süreç karmaşasını ortadan kaldırın.",
    useCases: ["Süreç standardizasyonu", "Görev delegasyonu", "Denetim ve uyumluluk"],
    color: "violet",
  },
  {
    icon: Users,
    name: "Synorq CRM",
    tagline: "Müşteri Süreçleri",
    value: "Satış pipeline'ını ve müşteri iletişimini tek hatta yönetin.",
    useCases: ["Pipeline görünürlüğü", "Teklif & sözleşme yönetimi", "Müşteri portalı"],
    color: "cyan",
  },
  {
    icon: BarChart3,
    name: "Synorq Risk",
    tagline: "Risk Analitiği",
    value: "Sektörünüze özgü riskleri anlık izleyin, proaktif karar alın.",
    useCases: ["Erken uyarı sistemi", "Risk skoru & senaryo analizi", "Sektör bazlı izleme"],
    color: "amber",
  },
  {
    icon: Bot,
    name: "Synorq AI",
    tagline: "AI Orchestration",
    value: "AI araçlarını iş süreçlerinizle entegre edin, merkezi yönetin.",
    useCases: ["Multi-agent iş akışları", "LLM entegrasyonu", "Tekrarlayan iş otomasyonu"],
    color: "emerald",
  },
];

const colorMap: Record<
  string,
  { bg: string; icon: string; tag: string; border: string; hover: string; dot: string }
> = {
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    tag: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-100",
    hover: "hover:border-indigo-300 hover:shadow-indigo-100",
    dot: "bg-indigo-400",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    tag: "bg-violet-100 text-violet-700",
    border: "border-violet-100",
    hover: "hover:border-violet-300 hover:shadow-violet-100",
    dot: "bg-violet-400",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    tag: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300 hover:shadow-cyan-100",
    dot: "bg-cyan-400",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    tag: "bg-amber-100 text-amber-700",
    border: "border-amber-100",
    hover: "hover:border-amber-300 hover:shadow-amber-100",
    dot: "bg-amber-400",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300 hover:shadow-emerald-100",
    dot: "bg-emerald-400",
  },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Modüler Ürün Ailesi
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Her operasyon katmanı için
            <br />
            <span className="gradient-text">doğru araç</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Synorq, birlikte çalışan modüler ürünlerden oluşur. İşletmeniz yalnızca ihtiyaç
            duyduğu modüllerle başlayabilir, zamanla tüm operasyon katmanını tek platformda
            birleştirebilir.
          </p>
        </div>

        {/* Architecture note */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Tüm modüller birbiriyle entegre çalışır — veri silolarına son
          </div>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const colors = colorMap[product.color];
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative bg-white rounded-2xl border ${colors.border} p-7 transition-all duration-300 hover:shadow-xl ${colors.hover} hover:-translate-y-1 cursor-pointer flex flex-col`}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl ${colors.bg}`}>
                    <Icon size={22} className={colors.icon} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.tag}`}>
                    {product.tagline}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

                {/* Value prop */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 font-medium">
                  {product.value}
                </p>

                {/* Use cases */}
                <ul className="space-y-2 flex-1">
                  {product.useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-2.5 text-sm text-gray-500">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      {uc}
                    </li>
                  ))}
                </ul>

                {/* Mini CTA */}
                <div className="mt-6 pt-5 border-t border-gray-50">
                  <span className={`text-sm font-semibold flex items-center gap-1.5 ${colors.icon} group-hover:gap-3 transition-all`}>
                    Detayları Gör
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800 rounded-2xl p-7 text-white flex flex-col justify-between overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-indigo-200 mb-4">
                Özel Yapılandırma
              </div>
              <h3 className="text-xl font-bold mb-3">
                Sektörünüze özel çözüm mü arıyorsunuz?
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Modüler yapımız sayesinde mevcut iş akışlarınıza tam uyan bir
                Synorq konfigürasyonu oluşturabilirsiniz.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm w-fit"
            >
              Keşif Görüşmesi Planla <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
