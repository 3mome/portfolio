"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl shadow-2xl shadow-black/40"
      style={{ backgroundColor: "rgba(11,19,38,0.6)" }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter"
          style={{ color: "#c0c1ff", fontFamily: "var(--font-manrope)" }}
        >
          SUPAWIT
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="font-bold uppercase text-sm tracking-tighter transition-colors"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: active ? "#c0c1ff" : "#464554",
                  borderBottom: active ? "2px solid #c0c1ff" : "none",
                  paddingBottom: active ? "4px" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "#dae2fd";
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "#464554";
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          className="px-6 py-2 rounded-full font-bold text-sm tracking-wide uppercase transition-opacity hover:opacity-80"
          style={{
            background: "linear-gradient(to right, #c0c1ff, #ddb7ff)",
            color: "#07006c",
            fontFamily: "var(--font-manrope)",
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
