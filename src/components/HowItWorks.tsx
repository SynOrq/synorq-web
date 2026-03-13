import { Search, Puzzle, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "İhtiyacı Birlikte Belirleyin",
    description:
      "30 dakikalık ücretsiz keşif görüşmesinde mevcut operasyon yapınızı, hangi süreçlerin zaman ve enerji tükettiğini birlikte analiz ederiz.",
  },
  {
    icon: Puzzle,
    step: "02",
    title: "Doğru Modülleri Seçin",
    description:
      "İhtiyaçlarınıza göre Synorq ürün ailesi içinden doğru kombinasyonu belirleriz. Tüm paketi almak zorunda değilsiniz — modüler yapı tam da bunun için var.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Operasyonlarınızı Merkezi Yönetin",
    description:
      "Hızlı kurulum, ekip onboarding desteği ve aşamalı geçiş planıyla Synorq'u operasyonunuzun bir parçası haline getirirsiniz.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Nasıl Çalışır?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Synorq ile
            <br />
            <span className="gradient-text">3 adımda başlayın</span>
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-lg">
            Karmaşık kurulum yok, uzun onboarding süreci yok.
            Doğru modülleri seçin, hızla üretime geçin.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-6 text-xs font-black text-gray-300 tracking-widest">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex p-4 bg-indigo-600 rounded-2xl mb-5 shadow-lg shadow-indigo-200">
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6 text-gray-300 text-2xl">↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:-translate-y-0.5"
          >
            1. Adımdan Başla — Ücretsiz
          </a>
        </div>
      </div>
    </section>
  );
}
