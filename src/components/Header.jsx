import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "ホーム" },
  { to: "/about", label: "会社概要" },
  { to: "/services", label: "事業内容" },
  { to: "/blog", label: "ブログ" },
  { to: "/gallery", label: "ギャラリー" },
  { to: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAiMarketing = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('ai-marketing')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-amber-400/20 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ロゴ */}
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setMenuOpen(false)}>
          <span className="text-xl font-bold tracking-[0.25em] text-amber-400" style={{ fontFamily: "'Shippori Mincho', serif" }}>Gratitude</span>
          <span className="text-xs text-white/50" style={{ fontFamily: "'Shippori Mincho', serif" }}>株式会社Gratitude -グラティテュード-</span>
        </Link>

        {/* PCナビ */}
        <nav className="hidden md:flex gap-2 items-center">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm rounded-full transition ${
                  isActive
                    ? "bg-amber-400 text-black font-semibold"
                    : "text-white/70 hover:text-amber-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/#ai-marketing"
            onClick={scrollToAiMarketing}
            className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-full font-semibold text-white transition"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            <img src="/ai-llmo-aio-aeo-webmarketing-.png" alt="" className="h-4 w-auto" />
            AIマーケティング
          </a>
        </nav>

        {/* ハンバーガーメニュー（スマホ） */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニュー"
        >
          <span
            className={`block h-0.5 w-6 bg-amber-400 transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-amber-400 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-amber-400 transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* スマホメニュー */}
      {menuOpen && (
        <nav className="md:hidden border-t border-amber-400/20 bg-black/95 px-6 py-4 flex flex-col gap-2">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm rounded-lg transition ${
                  isActive
                    ? "bg-amber-400/20 text-amber-400 font-semibold"
                    : "text-white/70 hover:text-amber-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/#ai-marketing"
            onClick={scrollToAiMarketing}
            className="flex items-center gap-2 px-4 py-3 text-sm rounded-lg font-semibold text-white transition"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            <img src="/ai-llmo-aio-aeo-webmarketing-.png" alt="" className="h-5 w-auto" />
            AIマーケティング
          </a>
        </nav>
      )}
    </header>
  );
}
