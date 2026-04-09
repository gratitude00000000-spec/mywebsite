import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "ホーム" },
  { to: "/about", label: "会社概要" },
  { to: "/services", label: "事業内容" },
  { to: "/blog", label: "ブログ" },
  { to: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-amber-400/20 mt-20 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* ブランド */}
          <div>
            <div className="text-xl font-bold tracking-[0.25em] text-amber-400">GRATITUDE</div>
            <div className="text-sm text-white/50 mt-1">株式会社Gratitude -グラティテュード-</div>
            <p className="mt-3 text-sm text-white/40 max-w-xs">
              価値を創り、事業を加速させる。
            </p>
          </div>

          {/* ナビゲーション */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-white/50 hover:text-amber-400 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-amber-400/10 text-center text-white/30 text-sm">
          © {new Date().getFullYear()} 株式会社Gratitude -グラティテュード-. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
