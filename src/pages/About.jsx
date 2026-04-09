import { useEffect } from "react";

const companyInfo = [
  { label: "会社名", value: "株式会社Gratitude -グラティテュード-" },
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
  useEffect(() => {
    document.title = "会社概要 | 株式会社Gratitude -グラティテュード-";
  }, []);

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

      {/* 代表プロフィール */}
      <div className="mt-16">
        <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Profile</p>
        <h2 className="text-2xl font-bold mb-8">代表<span className="text-amber-400">プロフィール</span></h2>
        <div className="border border-amber-400/20 rounded-2xl p-8 bg-white/5">
          <div className="mb-6">
            <p className="text-lg font-semibold">諸見里 楓摩</p>
            <p className="text-sm text-amber-400/80 mt-1">株式会社Gratitude 代表取締役</p>
          </div>
          <div className="space-y-5 text-sm text-white/70 leading-8">
            <p>沖縄県南城市玉城に生まれ、幼少期より糸満市で育つ。父親のいない環境の中で生活し、決して裕福とは言えない環境で幼少期を過ごす。</p>
            <p>10代までは自由奔放な生活を送るが、「このままではいけない」と考えを改め、19歳で一度県外へ。その後、経営者を志し沖縄へ戻り、飲食業界にて実務経験を積む。</p>
            <p>資金を貯め、24歳で銀行融資を受け、約30名収容のバーを開業。現場での運営・集客・売上管理を実践ベースで学びながら事業を拡大。</p>
            <p>28歳の時、1店舗目の経験をもとに、以前から構想していた「属人性に依存しないパーティー会場」という業態で、約120名収容の大型店舗を開業。団体利用や二次会ニーズに特化した空間設計と運営モデルを構築する。</p>
            <p>しかし、同時期に新型コロナウイルスの影響を受け、経営環境は大きく変化。その状況の中で、店舗運営だけに依存しない事業構築の必要性を感じる。</p>
            <p>29歳で法人「株式会社Gratitude」を設立。飲食・パーティー会場運営に加え、Googleビジネスプロフィール運用やSEO・MEO対策を軸としたWebマーケティング事業を開始。</p>
            <p>さらに、貸切パーティーに特化したマッチングサービス「ぱーてぃー野朗」を立ち上げ、店舗とユーザーを繋ぐ新たな集客導線の構築に取り組んでいる。</p>
            <p className="text-white/90 font-medium border-l-2 border-amber-400 pl-4">
              これまでの経験をもとに、リアル店舗とWebマーケティングを掛け合わせた実践型の事業展開を強みとしている。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
