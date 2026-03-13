"use client";

import { ArrowRight, Layers, Cpu, BarChart2, Users2 } from "lucide-react";

const capabilities = [
  { icon: Layers, label: "Modüler ürün mimarisi" },
  { icon: Cpu, label: "AI destekli iş akışları" },
  { icon: BarChart2, label: "Merkezi kontrol yapısı" },
  { icon: Users2, label: "Ölçeklenebilir SaaS altyapısı" },
];

const useCases = [
  "KOBİ Operasyon Yönetimi",
  "Ajans Müşteri Süreçleri",
  "İç Süreç Standardizasyonu",
  "AI Destekli Workflow Yönetimi",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.04) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          KOBİ&apos;ler ve ajanslar için operasyon platformu
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
          Dağınık operasyonları
          <br />
          <span className="gradient-text">tek kontrol katmanında</span>
          <br />
          birleştirin
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Synorq; proje yönetimi, operasyon takibi, CRM ve AI destekli iş akışlarını
          tek platformda birleştirerek ekiplerin daha hızlı, daha kontrollü ve
          daha ölçeklenebilir çalışmasını sağlar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
          >
            Keşif Görüşmesi Planla
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            Ürünleri İncele
          </a>
        </div>

        {/* Use case badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {useCases.map((uc) => (
            <span
              key={uc}
              className="px-3.5 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full"
            >
              {uc}
            </span>
          ))}
        </div>

        {/* Capabilities strip */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6">
            Platform Yetenekleri
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {capabilities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="inline-flex p-2.5 bg-indigo-50 rounded-xl">
                  <Icon size={18} className="text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full" />
      </div>
    </section>
  );
}
