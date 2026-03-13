import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";
import SynorqLogo from "@/components/SynorqLogo";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <SynorqLogo variant="full" theme="white" height={34} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              İş operasyonlarını ve AI destekli süreçleri tek merkezden yöneten
              yeni nesil B2B SaaS ve yazılım markası.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://github.com/SynOrq"
                className="p-2 rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Ürünler</h4>
            <ul className="space-y-2.5">
              {["Synorq Projects", "Synorq Ops", "Synorq CRM", "Synorq Risk", "Synorq AI"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-sm hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Şirket</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Hakkımızda", href: "#about" },
                { label: "Çözümler", href: "#solutions" },
                { label: "İletişim", href: "#contact" },
                { label: "Gizlilik Politikası", href: "#" },
                { label: "Kullanım Koşulları", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Synorq. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-gray-600">
            Türkiye&apos;de 🇹🇷 üretildi
          </p>
        </div>
      </div>
    </footer>
  );
}
