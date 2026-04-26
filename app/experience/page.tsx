"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import {
  Monitor,
  Code2,
  Smartphone,
  Database,
  Link2,
  Activity,
  ShieldCheck,
  GitBranch,
  Gauge,
  BarChart3,
  Rocket,
  Building2,
  Factory,
} from "lucide-react";

export default function ExperiencePage() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-32 pb-24 px-6 md:px-12"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Hero */}
        <section className="max-w-7xl mx-auto mb-20 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <span
                className="font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
              >
                {e.badge}
              </span>
              <h1
                className="font-extrabold text-5xl md:text-7xl tracking-tighter leading-[0.9]"
                style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
              >
                {e.title1} <br />
                <span className="text-gradient">{e.titleGradient}</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-lg leading-relaxed font-light" style={{ color: "var(--color-on-surface-variant)" }}>
                {e.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="max-w-7xl mx-auto space-y-12">
          {e.roles.map((role) => (
            <article
              key={role.company}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface-container-low)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Card header */}
              <div
                className="px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  borderLeft: `4px solid ${role.accent}`,
                }}
              >
                <div className="flex items-start gap-3">
                  {role.company.includes("CNMI") ? (
                    <Building2
                      className="mt-1 flex-shrink-0"
                      size={20}
                      style={{ color: role.accent }}
                    />
                  ) : role.company.includes("TOYOTA") ? (
                    <Factory
                      className="mt-1 flex-shrink-0"
                      size={20}
                      style={{ color: role.accent }}
                    />
                  ) : null}
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-1 block"
                      style={{ color: role.accent, fontFamily: "var(--font-kanit)" }}
                    >
                      {role.period}
                    </span>
                    <h2
                      className="text-2xl font-extrabold tracking-tight"
                      style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
                    >
                      {role.role}
                    </h2>
                    <p className="font-semibold mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>
                      {role.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: "var(--color-surface-container-highest)",
                        color: "var(--color-on-surface-variant)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <p
                  className="text-base leading-relaxed mb-8 max-w-3xl"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {role.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Section 1 */}
                  <div>
                    <h3
                      className="text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
                      style={{ color: role.accent, fontFamily: "var(--font-kanit)" }}
                    >
                      <span
                        className="w-4 h-px inline-block"
                        style={{ backgroundColor: role.accent }}
                      />
                      {role.section1_title}
                    </h3>
                    <ul className="space-y-2.5">
                      {role.section1_items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: role.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3
                      className="text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
                      style={{ color: role.accent, fontFamily: "var(--font-kanit)" }}
                    >
                      <span
                        className="w-4 h-px inline-block"
                        style={{ backgroundColor: role.accent }}
                      />
                      {role.section2_title}
                    </h3>
                    <ul className="space-y-2.5">
                      {role.section2_items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: role.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Core Expertise Strip */}
        <section className="max-w-7xl mx-auto mt-20">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              backgroundColor: "var(--color-surface-container-low)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
            >
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icons: [<Monitor key="m" size={18} />, <Code2 key="c" size={18} />], label: "Next.js / Node.js / PHP" },
                { icons: [<Smartphone key="s" size={18} />], label: "React Native iOS & Android" },
                { icons: [<Database key="d" size={18} />], label: "MySQL · MSSQL · MongoDB" },
                { icons: [<Link2 key="l" size={18} />, <Activity key="a" size={18} />], label: "SAP · OPC · IoT Integration" },
                { icons: [<ShieldCheck key="s" size={18} />], label: "JWT Authentication & RBAC" },
                { icons: [<GitBranch key="g" size={18} />, <Gauge key="g2" size={18} />], label: "CI/CD & Load Testing" },
                { icons: [<BarChart3 key="b" size={18} />], label: "Real-Time Dashboards" },
                { icons: [<Rocket key="r" size={18} />], label: "Production Infrastructure" },
              ].map(({ icons, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <span className="flex gap-1.5 flex-shrink-0">
                    {icons}
                  </span>
                  <span
                    className="text-xs font-semibold leading-tight"
                    style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-kanit)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-20 text-center">
          <div
            className="rounded-2xl p-12 backdrop-blur-md"
            style={{
              backgroundColor: "var(--glass-bg)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-6 tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
            >
              {e.cta_title}
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: "var(--color-on-surface-variant)" }}>
              {e.cta_desc}
            </p>
            <a
              href="/contact"
              className="font-extrabold uppercase tracking-widest px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 inline-block"
              style={{
                background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-kanit)",
              }}
            >
              {e.cta_btn}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
