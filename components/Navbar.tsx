"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useLang } from "@/components/LangProvider";
import { Download } from "lucide-react";

const linkKeys = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/experience", key: "experience" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const { locale, t, toggle: toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-lg shadow-black/30" : "backdrop-blur-md"
      }`}
      style={{ backgroundColor: scrolled ? undefined : "var(--nav-bg)" }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
        >
          SUPAWIT
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {linkKeys.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="font-bold uppercase text-sm tracking-tighter transition-colors"
                style={{
                  fontFamily: "var(--font-kanit)",
                  color: active ? "var(--color-primary)" : "var(--color-outline-variant)",
                  borderBottom: active ? "2px solid var(--color-primary)" : "none",
                  paddingBottom: active ? "4px" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "var(--color-on-surface)";
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "var(--color-outline-variant)";
                }}
              >
                {t.nav[key]}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-3 h-9 rounded-full flex items-center justify-center font-bold text-xs tracking-wider transition-colors"
            style={{
              background: "var(--color-surface-container)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-kanit)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {locale === "en" ? "TH" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: "var(--color-surface-container)",
              color: "var(--color-on-surface-variant)",
            }}
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-bold text-sm tracking-wide uppercase transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            style={{
              background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              color: "var(--color-on-primary)",
              fontFamily: "var(--font-kanit)",
            }}
          >
            <Download size={16} />
            {t.nav.resume}
          </a>
        </div>
      </div>
    </nav>
  );
}
