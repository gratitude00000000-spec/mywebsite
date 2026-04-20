import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serviceCards } from "../data/services";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "沖縄のWebマーケティング・MEO・LLMO対策 | 株式会社Gratitude";
    if (window.location.hash === '#ai-marketing') {
      setTimeout(() => {
        document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
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
          <button
            onClick={() => document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            AIマーケティング詳細
          </button>
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
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-base text-amber-400">{s.title}</h3>
                {s.isAiMarketing && (
                  <button
                    onClick={() => document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2.5 py-1 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    <img src="/ai-llmo-aio-aeo-webmarketing-.png" alt="AI集客ドットコム" className="h-4 w-auto" />
                    AI集客ドットコム
                  </button>
                )}
              </div>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
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

      {/* ── AI集客ドットコム LP セクション ── */}
      <section id="ai-marketing" className="bg-white text-gray-900">

        {/* ファーストビュー */}
        <div
          className="relative overflow-hidden text-white py-24"
          style={{ background: "radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.2), transparent 28%), linear-gradient(135deg, #07111f 0%, #0f172a 50%, #172554 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-6">
                <img
                  src="/ai-llmo-aio-aeo-webmarketing-.png"
                  alt="AI集客ドットコム"
                  className="h-40 w-auto max-w-full"
                />
                <p className="text-xs text-white/50 tracking-widest mt-1">by 株式会社Gratitude</p>
              </div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-wide mb-4">
                全国・全業種対応 / AI時代の集客支援
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Shippori Mincho', serif", color: "#ffffff" }}>
                <span className="text-yellow-400">AI</span>に選ばれる時代の<br />
                集客設計を、<br />
                株式会社Gratitudeが支援します。
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                GoogleのAI検索（AIO）やChatGPT（LLMO）に引用される時代、ただ検索に出るだけでは集客できません。GBPの最適化はもちろん、AIO・LLMO・AEO・MEOまで見据えた情報設計で、店舗・企業の「見つかり方」と「選ばれ方」を根本から整えます。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:gratitude00000000@gmail.com?subject=集客支援について相談したい"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-bold text-white transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 16px 36px rgba(37,99,235,0.3)" }}
                >
                  まずはメールで相談する
                </a>
                <a
                  href="tel:0989755682"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  098-975-5682
                </a>
                <button
                  onClick={() => document.getElementById('ai-marketing-plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition"
                >
                  プランを見る
                </button>
              </div>
            </div>
            <div className="bg-white/8 border border-white/15 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">このような課題に対応</h3>
              <div className="space-y-3">
                {["Googleマップや検索での露出を強化したい", "GBPを更新しているが成果につながっていない", "AI検索時代に合わせた集客導線へ変えたい", "多言語化や画像SEOまで含めて整えたい", "社内だけで最新動向を追い続けるのが難しい"].map((item) => (
                  <div key={item} className="px-4 py-3 rounded-xl bg-white/[0.07] text-white/90 text-sm">{item}</div>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/70">最新AIを活用し、変化の激しい時代に合わせて継続的に改善します。</p>
            </div>
          </div>
        </div>

        {/* 課題提示 */}
        <div className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide mb-4">よくある課題</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              こんな状態になっていませんか？
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mt-6">
              {[
                { title: "更新しているのに反応が弱い", body: "ただ投稿するだけでは、検索にもAIにも十分伝わらないケースがあります。" },
                { title: "口コミ返信や編集が後回しになる", body: "日々の業務が忙しく、GBP全体の整備まで手が回らない事業者は少なくありません。" },
                { title: "多言語や画像最適化までできていない", body: "インバウンドやAI検索も意識するなら、テキスト以外の整備も重要です。" },
                { title: "最新情報を追い続けるのが難しい", body: "AIO、LLMO、AEOなど、新しい概念を常に追うのは現実的に負担が大きい領域です。" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* サービス内容 */}
        <div className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide mb-4">サービス内容</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              投稿代行だけではなく、<br />集客全体のシナジーまで設計します。
            </h2>
            <p className="text-gray-600 text-base max-w-2xl">
              GBP運用代行、口コミ返信、メニューやプロフィールなどの編集、画像SEO、多言語化、さらに他プラットフォームとの連携やコンサルティングまで一括で支援します。
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {[
                { title: "最新AIを活用した集客支援", body: "AIに選ばれる時代を見据え、AIO・LLMO・AEO・MEOまで考慮した集客導線を設計します。", checks: ["最新トレンドを踏まえた改善提案", "AI検索時代に合わせた情報設計", "継続的なコンサルティング対応"] },
                { title: "Googleビジネスプロフィール運用", body: "投稿、口コミ返信、メニューやページ全体の編集など、日常運用をまとめてサポートします。", checks: ["定期投稿による鮮度維持", "口コミ返信による信頼感向上", "GBP全体の整備と最適化"] },
                { title: "シナジー創出と多言語対応", body: "GBP単体ではなく、他プラットフォームとの連携や多言語化で、より広い接点づくりを支援します。", checks: ["各媒体との連携による相乗効果", "多言語化による対応範囲の拡張", "投稿時の画像SEOも考慮"] },
              ].map((s) => (
                <div key={s.title} className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.body}</p>
                  <div className="space-y-2">
                    {s.checks.map((c) => (
                      <div key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mt-0.5">✓</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 料金プラン */}
        <div id="ai-marketing-plans" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide mb-4">料金プラン</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "'Shippori Mincho', serif" }}>
              事業フェーズに合わせて選べる3プラン
            </h2>
            <p className="text-gray-500 mb-2">まずは運用を整えたい方から、AI時代を見据えて全体最適を進めたい方まで対応します。</p>
            <div className="mt-3 px-4 py-3 bg-blue-50 border-l-4 border-blue-600 rounded-lg text-sm text-blue-800">
              ※「月〇回投稿」とは、Googleビジネスプロフィールの最新情報・イベント更新など、日々の集客最適化のための更新回数です。
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8 items-start">
              {[
                {
                  name: "お試しプラン",
                  price: "¥14,980",
                  tax: "税込 ¥16,478",
                  desc: "まずは基本運用を整えたい方向けのスタートプラン。",
                  checks: ["月3回投稿", "月1回まで編集可能", "メニュー・GBP全体の編集対応", "口コミ返信"],
                  featured: false,
                },
                {
                  name: "スタンダードプラン",
                  price: "¥19,800",
                  tax: "税込 ¥21,780",
                  desc: "運用だけでなく、全体的なシナジー創出まで見据えた主力プラン。",
                  checks: ["月4回投稿", "月3回まで編集可能", "口コミ返信", "GBPと他プラットフォームによる全体シナジー創出", "コンサルティング対応", "多言語化", "投稿時の画像SEO"],
                  featured: true,
                },
                {
                  name: "グロースプラン",
                  price: "¥29,800",
                  tax: "税込 ¥32,780",
                  desc: "Web集客の基盤ごとまとめて整えたい事業者向けのプラン。",
                  checks: ["月5回投稿", "月5回まで修正あり", "HP制作", "HP管理・保守", "SEO対策（内部＋簡易コンテンツ）", "GBPとの連携設計"],
                  featured: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-7 shadow-md ${plan.featured ? "border-2 border-blue-600 md:-translate-y-2 shadow-lg" : "border border-blue-200"}`}
                >
                  {plan.featured && (
                    <span className="absolute -top-4 right-5 text-xs font-bold text-white px-3 py-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
                      おすすめ
                    </span>
                  )}
                  <div className="text-xs font-extrabold tracking-widest text-blue-600 mb-2">{plan.name}</div>
                  <div className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">
                    {plan.price} <span className="text-sm font-semibold text-gray-500">/ 月</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">{plan.tax}</div>
                  <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
                  <div className="space-y-2">
                    {plan.checks.map((c) => (
                      <div key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mt-0.5 shrink-0">✓</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl p-10 text-white" style={{ background: "linear-gradient(135deg, #111827 0%, #1e3a8a 100%)", boxShadow: "0 24px 56px rgba(15,23,42,0.26)" }}>
              <span className="inline-block px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-blue-200 text-xs font-bold tracking-wide mb-4">お問い合わせ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Shippori Mincho', serif" }}>
                AIに選ばれる時代の集客を、<br />今のうちに整えませんか？
              </h2>
              <p className="text-white/80 max-w-2xl">
                現在AIに選ばれる時代に突入しています。目まぐるしく変わるこの時代を追い続けるのは簡単ではありません。
                だからこそ、株式会社Gratitudeにお任せください。まずはお気軽にメールでご相談ください。
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <a
                  href="mailto:gratitude00000000@gmail.com?subject=集客支援について相談したい"
                  className="inline-flex items-center bg-white text-gray-900 rounded-xl px-5 py-4 font-extrabold text-sm hover:bg-gray-100 transition break-all"
                >
                  gratitude00000000@gmail.com
                </a>
                <a
                  href="tel:0989755682"
                  className="inline-flex items-center gap-2 text-white rounded-xl px-6 py-4 font-extrabold text-lg transition hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  098-975-5682
                </a>
              </div>
              <p className="mt-4 text-sm text-white/60">お気軽にご連絡ください。通常2営業日以内にご返信いたします。</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
