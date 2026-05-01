import { useEffect } from "react";
import { Link } from "react-router-dom";
import { serviceCards } from "../data/services";

export default function Home() {
  useEffect(() => {
    document.title = "沖縄のWebマーケティング・MEO・LLMO対策 | 株式会社Gratitude";
  }, []);

  return (
    <>
      {/* ヒーロー */}
      <section
        className="relative mx-auto max-w-full px-6 py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/strate.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-6">
          <img src="/toumeika-gratitude-logo.PNG" alt="Gratitude logo" className="w-20 md:w-28" />
          <div>
            <p className="text-3xl md:text-4xl tracking-[0.15em] text-amber-400" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Gratitude</p>
            <p className="text-sm text-white/60 mt-1">株式会社Gratitude -グラティテュード-</p>
          </div>
        </div>
        <p className="text-xs tracking-[0.4em] text-amber-400/70 mb-6 uppercase">
          Okinawa-based Business Group
        </p>
        <h1 className="text-5xl md:text-7xl leading-tight" style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 700 }}>
          創造する
        </h1>
        <p className="mt-6 max-w-xl text-white/60 leading-8">
          株式会社Gratitudeは、飲食・集客・マーケティング・採用支援を通じて、
          事業成長を支える企業です。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/services"
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            事業内容を見る
          </Link>
          <Link
            to="/contact"
            className="border border-amber-400 px-6 py-3 rounded-full text-amber-400 hover:bg-amber-400/10 transition"
          >
            お問い合わせ
          </Link>
        </div>
        </div>
      </section>

      {/* 会社情報カード */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-amber-400/20 p-8 rounded-2xl bg-white/5">
            <h2 className="text-sm text-amber-400 tracking-widest mb-6 uppercase">Company</h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-white/50">会社名</dt>
                <dd className="mt-1 text-base">株式会社Gratitude -グラティテュード-</dd>
              </div>
              <div>
                <dt className="text-white/50">代表取締役</dt>
                <dd className="mt-1">諸見里 楓摩</dd>
              </div>
              <div>
                <dt className="text-white/50">所在地</dt>
                <dd className="mt-1">沖縄県那覇市牧志2-18-4 パレットマキシ2-C</dd>
              </div>
              <div>
                <dt className="text-white/50">TEL</dt>
                <dd className="mt-1">
                  <a href="tel:0989755682" className="hover:text-amber-400 transition">
                    098-975-5682
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              to="/about"
              className="inline-block mt-6 text-sm text-amber-400 hover:underline"
            >
              会社概要を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* イベント会場運営部門 */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Venue Management</p>
        <h2 className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>イベント会場運営部門</h2>
        <p className="text-white/60 mb-8 text-sm">直営パーティー会場案内</p>
        <div className="grid md:grid-cols-2 gap-6">

          {/* 那覇 */}
          <div className="border border-amber-400/20 rounded-2xl bg-white/5 hover:bg-white/10 transition overflow-hidden">
            <img src="/naha-wedding-kokusaistreet-.JPG" alt="PARTYSPACE NEXT那覇" className="w-full h-48 object-cover" />
            <div className="p-8">
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              <a
                href="https://www.partyspace-next.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                PARTYSPACE NEXT那覇
              </a>
            </h3>
            <p className="text-white/50 text-sm mb-4">那覇</p>
            <a
              href="https://www.partyspace-next.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-3 text-sm text-amber-400 hover:underline"
            >
              公式サイトを見る →
            </a><br />
            <a
              href="https://www.instagram.com/partyspace_next/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
            </div>
          </div>

          {/* 沖縄市 */}
          <div className="border border-amber-400/20 rounded-2xl bg-white/5 hover:bg-white/10 transition overflow-hidden">
            <img src="/okinawacity-koza-chatan-mihama-wedding-.jpg" alt="PARTYSPACE NEXTⅡ 沖縄市" className="w-full h-48 object-cover" />
            <div className="p-8">
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              <a
                href="https://www.partyspace-next2.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                PARTYSPACE NEXTⅡ 沖縄市
              </a>
            </h3>
            <p className="text-white/50 text-sm mb-4">沖縄市</p>
            <a
              href="https://www.partyspace-next2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-3 text-sm text-amber-400 hover:underline"
            >
              公式サイトを見る →
            </a><br />
            <a
              href="https://www.instagram.com/next.okinawacity/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
            </div>
          </div>

        </div>
      </section>

      {/* 事業内容プレビュー */}
      <section
        className="relative px-6 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gratitude-hp-jigyounaiyou-.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 pt-24">事業内容</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceCards.map((s) => (
            <div
              key={s.title}
              className="border border-amber-400/20 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="font-semibold text-base">{s.title}</h3>
              <p className="mt-3 text-sm text-white/60">{s.desc}</p>
              {s.isHpService && (
                <a
                  href="https://hp.ai-marketing-japan.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-white text-sm px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition"
                  style={{ background: "linear-gradient(135deg, #d97706, #f59e0b)" }}
                >
                  サービス詳細を見る →
                </a>
              )}
              {s.isAiMarketing && (
                <a
                  href="https://ai-marketing-japan.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-white text-sm px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                >
                  <img src="/ai-llmo-aio-aeo-webmarketing-.png" alt="AI集客ドットコム" className="h-5 w-auto" />
                  AI集客ドットコム
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/services"
            className="text-sm text-amber-400 hover:underline"
          >
            すべての事業内容を見る →
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
