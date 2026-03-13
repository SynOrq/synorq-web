"use client";

import { useState } from "react";
import { Mail, Clock, CheckCircle, Send, ArrowRight } from "lucide-react";

const topics = [
  "Proje yönetimi",
  "Operasyon yönetimi",
  "CRM çözümü",
  "AI iş akışları",
  "Özel yapılandırma",
  "Genel bilgi",
];

const processSteps = [
  { icon: Send, text: "Formu doldurun — 2 dakika yeter" },
  { icon: Clock, text: "24 saat içinde size dönüyoruz" },
  { icon: CheckCircle, text: "30 dk ücretsiz keşif görüşmesi planlıyoruz" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              İletişim
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Keşif görüşmesi
              <br />
              <span className="gradient-text">planla — ücretsiz</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              30 dakikalık görüşmede operasyon yapınızı birlikte analiz edelim,
              size en uygun Synorq çözümünü belirleyelim. Satış baskısı yok.
            </p>

            {/* Process steps */}
            <div className="space-y-4 mb-10">
              {processSteps.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 w-fit">
              <div className="p-2.5 bg-indigo-100 rounded-lg">
                <Mail size={16} className="text-indigo-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Doğrudan ulaşın</div>
                <div className="text-sm font-semibold text-gray-800">hello@synorq.com</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mesajınız İletildi!
                </h3>
                <p className="text-gray-500 text-sm">
                  24 saat içinde size geri döneceğiz ve görüşme zamanı belirleyeceğiz. Teşekkürler!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Şirket
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all"
                      placeholder="Şirket adı"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    İş E-postası *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all"
                    placeholder="email@sirket.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Hangi konuda görüşmek istiyorsunuz? *
                  </label>
                  <select
                    required
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Konu seçin...</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-indigo-200 hover:shadow-md group"
                >
                  Keşif Görüşmesi Planla
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-gray-400">
                  Satış baskısı yok. Bilgileriniz gizli tutulur.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
