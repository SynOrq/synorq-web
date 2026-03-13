"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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

      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-indigo-100/60 via-violet-50/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-cyan-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8">
          <Zap size={14} className="fill-indigo-500 text-indigo-500" />
          Yeni Nesil B2B SaaS Platformu
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
          Operasyonlarınızı
          <br />
          <span className="gradient-text">Tek Merkezden</span>
          <br />
          Yönetin
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
          Synorq, iş süreçlerinizi, projelerinizi ve AI destekli iş akışlarınızı
          merkezi, verimli ve ölçeklenebilir şekilde yönetmenizi sağlar.
          KOBİ&apos;ler ve ajanslar için tasarlandı.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
          >
            Ücretsiz Demo İste
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            Ürünleri Keşfet
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "10x", label: "Daha Hızlı Operasyon" },
            { value: "AI", label: "Destekli İş Akışları" },
            { value: "%100", label: "Merkezi Kontrol" },
            { value: "SaaS", label: "Ölçeklenebilir Yapı" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-gray-900 mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full" />
      </div>
    </section>
  );
}
