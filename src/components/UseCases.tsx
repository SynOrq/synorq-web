import {
  ClipboardList,
  Users2,
  RefreshCw,
  LineChart,
  FileText,
  BrainCircuit,
} from "lucide-react";

const useCases = [
  {
    icon: ClipboardList,
    title: "Müşteri teslim süreçleri",
    description: "Teklif, onay, üretim ve teslim adımlarını tek hatta takip edin.",
  },
  {
    icon: Users2,
    title: "İç ekip koordinasyonu",
    description: "Görev dağılımı, sorumluluk ataması ve ilerleme görünürlüğü merkezi olarak yönetin.",
  },
  {
    icon: RefreshCw,
    title: "Tekrarlayan operasyonlar",
    description: "Haftalık, aylık rutin iş akışlarını şablonlaştırın ve otomasyona bağlayın.",
  },
  {
    icon: LineChart,
    title: "Operasyon raporlaması",
    description: "Ekip performansı, proje ilerlemesi ve kaynak kullanımını anlık raporlarla izleyin.",
  },
  {
    icon: FileText,
    title: "Sözleşme & teklif yönetimi",
    description: "Müşteri tekliflerinden imzaya kadar tüm döngüyü dijital süreçle yönetin.",
  },
  {
    icon: BrainCircuit,
    title: "AI destekli tekrar eden işler",
    description: "Manuel ve tekrarlayan görevleri AI iş akışlarıyla otomatize edin, ekibi stratejik işlere odaklayın.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Kullanım Senaryoları
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Synorq ile neleri
            <br />
            <span className="gradient-text">merkezileştirebilirsiniz?</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Müşteri referansları geldiğinde bu alanda yer alacak.
            Şimdilik, Synorq&apos;un hangi operasyonel senaryoları çözdüğüne bakın.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                <div className="inline-flex p-2.5 bg-indigo-50 rounded-xl mb-4">
                  <Icon size={18} className="text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Kullanım senaryonuz listede yok mu?{" "}
            <a href="#contact" className="text-indigo-600 font-semibold hover:underline">
              Bize anlatın, birlikte değerlendirelim.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
