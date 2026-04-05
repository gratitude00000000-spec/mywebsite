import { Link } from "react-router-dom";
import { serviceCards } from "../data/services";

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-xs tracking-[0.4em] text-amber-400/70 mb-6 uppercase">
          Okinawa-based Business Group
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-amber-400">価値</span>を創り、
          <br />事業を加速させる。
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
      </section>

      {/* 会社情報カード */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-amber-400/20 p-8 rounded-2xl bg-white/5">
            <h2 className="text-sm text-amber-400 tracking-widest mb-6 uppercase">Company</h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-white/50">会社名</dt>
                <dd className="mt-1 text-base">株式会社Gratitude</dd>
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

      {/* 事業内容プレビュー */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">事業内容</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceCards.map((s) => (
            <div
              key={s.title}
              className="border border-amber-400/20 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="font-semibold text-base">{s.title}</h3>
              <p className="mt-3 text-sm text-white/60">{s.desc}</p>
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
      </section>
    </>
  );
}
