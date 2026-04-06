const companyInfo = [
  { label: "会社名", value: "株式会社Gratitude" },
  { label: "代表取締役", value: "諸見里 楓摩" },
  { label: "設立", value: "2020年" },
  { label: "所在地", value: "沖縄県那覇市牧志2-18-4 パレットマキシ2-C" },
  { label: "TEL", value: "098-975-5682", href: "tel:0989755682" },
  {
    label: "事業内容",
    value:
      "飲食事業・パーティー会場運営 / グルメサイト運営 / Webマーケティング / 人材採用コンサルティング",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* タイトル */}
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">About Us</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-amber-400">会社</span>概要
      </h1>

      {/* 企業理念 */}
      <div className="border border-amber-400/20 rounded-2xl p-8 bg-white/5 mb-12">
        <h2 className="text-sm tracking-widest text-amber-400 uppercase mb-4">Mission</h2>
        <p className="text-2xl font-semibold leading-relaxed">
          「感謝」を事業の中心に置き、
          <br />
          関わる人すべての価値を高める。
        </p>
        <p className="mt-4 text-white/60 leading-8">
          Gratitude、直訳で感謝。感謝の返し方は人それぞれだが、関わった人たちにここまでこれた事に感謝を忘れない。それが私たちのモットーです。
        </p>
      </div>

      {/* 会社情報テーブル */}
      <h2 className="text-xl font-semibold text-amber-400 mb-6">基本情報</h2>
      <div className="border border-amber-400/20 rounded-2xl overflow-hidden">
        {companyInfo.map(({ label, value, href }, i) => (
          <div
            key={label}
            className={`flex flex-col sm:flex-row ${
              i !== companyInfo.length - 1 ? "border-b border-amber-400/10" : ""
            }`}
          >
            <dt className="sm:w-40 shrink-0 px-6 py-4 text-sm text-white/50 bg-white/5">
              {label}
            </dt>
            <dd className="px-6 py-4 text-sm">
              {href ? (
                <a href={href} className="hover:text-amber-400 transition">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </div>
    </section>
  );
}
