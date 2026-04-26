"use client";
import { useLang } from "@/components/LangProvider";
import { Globe, Mail, MessageCircle, Link2 } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/supawit-srichompoo-75aa2b405", Icon: Globe },
  { label: "GitHub", href: "https://github.com/3mome", Icon: Link2 },
  { label: "Phone", href: "tel:098-265-7214", Icon: MessageCircle },
  { label: "Email", href: "mailto:3mome.dev@gmail.com", Icon: Mail },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer
      className="w-full"
      style={{ borderTop: "1px solid var(--border-subtle)", backgroundColor: "var(--color-background)" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 w-full max-w-7xl mx-auto gap-6">
        <div className="flex flex-col gap-2">
          <div
            className="text-lg font-black tracking-tighter"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
          >
            SUPAWIT
          </div>
          <p
            className="text-xs tracking-widest uppercase opacity-60"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
          >
            {t.footer.copyright}
          </p>
        </div>

        <div className="flex gap-8">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="transition-colors duration-300 opacity-60 hover:opacity-100"
              style={{ color: "var(--color-outline)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-outline)")
              }
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
