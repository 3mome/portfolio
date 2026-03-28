const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ borderTop: "1px solid #131b2e", backgroundColor: "#0b1326" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 w-full max-w-7xl mx-auto gap-6">
        <div className="flex flex-col gap-2">
          <div
            className="text-lg font-black tracking-tighter text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            SUPAWIT
          </div>
          <p
            className="text-xs tracking-widest uppercase opacity-60"
            style={{ color: "#c0c1ff", fontFamily: "var(--font-inter)" }}
          >
            © 2024 Supawit Srichompoo. Carved from Digital Obsidian.
          </p>
        </div>

        <div className="flex gap-8">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-widest uppercase transition-colors opacity-60 hover:opacity-100"
              style={{ color: "#908fa0", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#ddb7ff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#908fa0")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
