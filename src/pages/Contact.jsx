import { useState, useEffect } from "react";

const INITIAL = { name: "", company: "", email: "", tel: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.title = "お問い合わせ | 株式会社Gratitude";
  }, []); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Netlify Forms: data-netlify="true" で自動処理される
      // 別サービス（Formspree等）を使う場合はfetch先URLを変更
      const body = new URLSearchParams({ "form-name": "contact", ...form });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-black border border-amber-400/30 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition";

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-amber-400">お問い合わせ</span>
      </h1>
      <p className="text-white/60 mb-10 leading-7">
        ご質問・ご相談はお気軽にお問い合わせください。
        通常2営業日以内にご返信いたします。
      </p>

      {status === "success" ? (
        <div className="border border-amber-400/30 rounded-2xl p-10 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h2 className="text-xl font-semibold text-amber-400 mb-2">送信が完了しました</h2>
          <p className="text-white/60">お問い合わせありがとうございます。担当者よりご連絡いたします。</p>
        </div>
      ) : (
        // data-netlify は Netlify Forms のための属性
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Netlify Forms 用の隠しフィールド */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/60 mb-1">
                お名前 <span className="text-amber-400">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="山田 太郎"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">会社名</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="株式会社〇〇"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/60 mb-1">
                メールアドレス <span className="text-amber-400">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">電話番号</label>
              <input
                name="tel"
                type="tel"
                value={form.tel}
                onChange={handleChange}
                placeholder="098-000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-1">
              お問い合わせ種別 <span className="text-amber-400">*</span>
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">選択してください</option>
              <option>飲食事業・パーティー会場について</option>
              <option>グルメサイト掲載について</option>
              <option>Webマーケティングについて</option>
              <option>人材採用コンサルティングについて</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-1">
              お問い合わせ内容 <span className="text-amber-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="お問い合わせ内容をご記入ください。"
              className={inputClass}
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-4 rounded-full hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>
        </form>
      )}
    </section>
  );
}
