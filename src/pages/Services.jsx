import { Link } from "react-router-dom";
import { serviceCards } from "../data/services";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Our Services</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-amber-400">事業</span>内容
      </h1>
      <p className="text-white/60 max-w-xl leading-8 mb-16">
        飲食から集客・マーケティング・採用まで、事業成長のあらゆるフェーズを支援します。
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {serviceCards.map((s) => (
          <div
            key={s.title}
            className="border border-amber-400/20 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition group"
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <h2 className="text-xl font-semibold group-hover:text-amber-400 transition">
              {s.title}
            </h2>
            <p className="mt-3 text-white/60 leading-7">{s.desc}</p>
            {s.details && (
              <ul className="mt-4 space-y-1">
                {s.details.map((d) => (
                  <li key={d} className="text-sm text-white/50 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">▸</span>
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 border border-amber-400/20 rounded-2xl p-8 bg-white/5 text-center">
        <h2 className="text-xl font-semibold mb-3">お気軽にご相談ください</h2>
        <p className="text-white/60 mb-6">
          各事業についての詳細や、お見積もりはお問い合わせフォームよりご連絡ください。
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
