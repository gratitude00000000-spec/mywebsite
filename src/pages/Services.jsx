import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serviceCards } from "../data/services";

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "事業内容 | Webマーケティング・MEO・飲食・採用支援 | 株式会社Gratitude";
  }, []);

  const goToAiMarketing = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

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
            className="border border-amber-400/20 rounded-2xl bg-white/5 hover:bg-white/10 transition group overflow-hidden"
          >
            {s.image && (
              <img src={s.image} alt={s.title} className={`w-full ${s.imageHeight || "h-52"} ${s.imageClass || "object-cover"}`} />
            )}
            <div className="p-8">
            <div className="text-3xl mb-4">{s.icon}</div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="text-xl font-semibold text-amber-400">
                {s.title}
              </h2>
              {s.isAiMarketing && (
                <button
                  onClick={goToAiMarketing}
                  className="flex items-center gap-1.5 text-white text-xs px-3 py-1.5 rounded-full font-bold hover:opacity-90 transition"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                >
                  <img src="/ai-llmo-aio-aeo-webmarketing-.png" alt="AI集客ドットコム" className="h-4 w-auto" />
                  AI集客ドットコム
                </button>
              )}
            </div>
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
