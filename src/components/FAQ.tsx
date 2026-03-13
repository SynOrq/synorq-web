"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Synorq hangi şirketler için uygundur?",
    a: "Synorq; büyüme sürecindeki KOBİ'ler, birden fazla müşteri ve projeyi yöneten ajanslar ile süreç yoğun sektörlerdeki işletmeler için tasarlanmıştır. Ekip büyüklüğü 5 ila 500+ arasında olan organizasyonlara uygundur.",
  },
  {
    q: "Ürünler ayrı ayrı mı kullanılabilir, yoksa hepsini almak mı gerekir?",
    a: "Synorq tamamen modüler bir yapıya sahiptir. İşletmeniz yalnızca ihtiyaç duyduğu modülle başlayabilir — örneğin sadece proje yönetimi veya sadece CRM. Zamanla diğer modülleri ekleyerek tüm operasyon altyapısını birleştirebilirsiniz.",
  },
  {
    q: "Kurulum ve onboarding süreci nasıl işler?",
    a: "Keşif görüşmesinin ardından ihtiyaç analizi yapılır, uygun konfigürasyon belirlenir. Ekibiniz için özelleştirilmiş onboarding planı oluşturulur. Çoğu implementasyon birkaç iş günü içinde tamamlanır.",
  },
  {
    q: "Mevcut araçlarımla (ERP, Slack, vb.) entegrasyon var mı?",
    a: "Evet. Synorq, yaygın iş araçlarıyla entegrasyon desteği sunar. Sektöre özgü veya kurumsal ERP entegrasyonları için özel yapılandırma imkânı mevcuttur. Keşif görüşmesinde mevcut araç ekosisteminizi değerlendirip size uygun entegrasyon yolunu belirleriz.",
  },
  {
    q: "Fiyatlandırma nasıl belirleniyor?",
    a: "Synorq, modüler abonelik modeliyle çalışır. Fiyatlandırma; seçilen modüllere, kullanıcı sayısına ve özelleştirme ihtiyacına göre şekillenir. Kesin fiyat bilgisi için keşif görüşmesi talep edin — satış baskısı olmadan şeffaf bir değerlendirme yapıyoruz.",
  },
  {
    q: "Özel yazılım geliştirme de yapıyor musunuz?",
    a: "Synorq, modüler SaaS ürünleri ve gerektiğinde özel yapılandırma/entegrasyon desteği sunar. Standart modüllerin dışında sektöre özgü özelleştirme ihtiyaçlarınız varsa bu da değerlendirilebilir.",
  },
  {
    q: "Verilerimiz güvende mi?",
    a: "Tüm veriler şifreli olarak saklanır ve yalnızca ilgili yetkili kullanıcılar erişebilir. Kurumsal güvenlik standartları uygulanır. Veri saklama ve erişim politikaları hakkında detaylı bilgi için bize ulaşabilirsiniz.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Sıkça Sorulan Sorular
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Aklınızdaki
            <br />
            <span className="gradient-text">sorular</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i
                  ? "border-indigo-200 bg-indigo-50/50"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-gray-400 transition-transform mt-0.5 ${
                    open === i ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Sorunuzun cevabını bulamadınız mı?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
          >
            Bize Doğrudan Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
