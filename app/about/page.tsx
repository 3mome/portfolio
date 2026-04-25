"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import {
  Boxes,
  PackageCheck,
  GraduationCap,
  Award,
  Languages as LanguagesIcon,
  Hexagon,
  Circle,
  Code2,
  Smartphone,
  Database,
  Link2,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-7">
            <span
              className="font-bold tracking-widest uppercase text-sm mb-4 block"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
            >
              {a.badge}
            </span>
            <h1
              className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.title}{" "}
              <span className="text-gradient">{a.titleGradient}</span>{" "}
              {a.titleEnd}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {a.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { value: a.stat1_value, label: a.stat1_label, color: "var(--color-primary)" },
                { value: a.stat2_value, label: a.stat2_label, color: "var(--color-secondary)" },
                { value: a.stat3_value, label: a.stat3_label, color: "var(--color-primary-fixed)" },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="glass-card px-8 py-6 rounded-xl flex flex-col gap-1 min-w-[160px]"
                >
                  <span
                    className="text-3xl font-extrabold"
                    style={{ color, fontFamily: "var(--font-manrope)" }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="absolute inset-0 rounded-full scale-75"
              style={{ backgroundColor: "rgba(192,193,255,0.15)", filter: "blur(80px)" }}
            />
            <div
              className="relative rounded-xl overflow-hidden border aspect-[4/5] shadow-2xl"
              style={{ borderColor: "var(--border-strong)" }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-9xl"
                style={{ backgroundColor: "var(--color-surface-container-highest)", color: "var(--color-outline-variant)" }}
              >
                👤
              </div>
            </div>
          </div>
        </section>

        {/* Biography Bento */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="md:col-span-2 p-10 md:p-14 rounded-xl relative overflow-hidden"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "rgba(221,183,255,0.04)", filter: "blur(100px)" }}
              />
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
              >
                {a.philosophy_title}
              </h3>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {a.philosophy_p1_pre}{" "}
                <span style={{ color: "var(--color-on-surface)", fontWeight: 600 }}>
                  {a.philosophy_p1_em}
                </span>
                {a.philosophy_p1_post}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                {a.philosophy_p2}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { Icon: Boxes, title: a.card1_title, desc: a.card1_desc, accent: "var(--color-primary)" },
                { Icon: PackageCheck, title: a.card2_title, desc: a.card2_desc, accent: "var(--color-secondary)" },
              ].map(({ Icon, title, desc, accent }) => (
                <div
                  key={title}
                  className="p-8 rounded-xl flex-1 flex flex-col justify-center"
                  style={{
                    backgroundColor: "var(--color-surface-container-high)",
                    borderLeft: `4px solid ${accent}`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4" style={{ color: accent }} />
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                  >
                    {title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8" style={{ color: "var(--color-primary)" }} />
            <h2
              className="text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.education_title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {a.education_items.map(({ degree, institution, year }) => (
              <div
                key={degree}
                className="p-8 rounded-xl"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-surface-container-high)" }}
                  >
                    <GraduationCap className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                    >
                      {degree}
                    </h3>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {institution}
                    </p>
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--color-outline-variant)" }}
                    >
                      {year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-8 h-8" style={{ color: "var(--color-secondary)" }} />
            <h2
              className="text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.certifications_title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {a.certifications_items.map(({ name, issuer }) => (
              <div
                key={name}
                className="p-6 rounded-xl flex items-center gap-4"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-secondary)", opacity: 0.2 }}
                >
                  <Award className="w-5 h-5" style={{ color: "var(--color-secondary)" }} />
                </div>
                <div>
                  <h3
                    className="font-bold"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                    {issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <LanguagesIcon className="w-8 h-8" style={{ color: "var(--color-primary-fixed)" }} />
            <h2
              className="text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.languages_title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {a.languages_items.map(({ language, level }) => (
              <div
                key={language}
                className="px-8 py-4 rounded-full"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-3">
                  <LanguagesIcon
                    className="w-5 h-5"
                    style={{ color: "var(--color-primary-fixed)" }}
                  />
                  <div>
                    <span
                      className="font-bold"
                      style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                    >
                      {language}
                    </span>
                    <span
                      className="text-sm ml-2"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-extrabold mb-4 tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.stack_title}
            </h2>
            <p
              className="uppercase tracking-[0.2em] text-xs"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {a.stack_subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {a.stack_items.map(({ label }) => {
              const iconMap: Record<string, { Icon: React.ElementType; color: string }> = {
                "Next.js": { Icon: Hexagon, color: "var(--color-primary)" },
                "Node.js": { Icon: Circle, color: "#16a34a" },
                "PHP / CodeIgniter": { Icon: Code2, color: "#9333ea" },
                "React Native": { Icon: Smartphone, color: "#06b6d4" },
                "MySQL / MSSQL": { Icon: Database, color: "#3b82f6" },
                "SAP Integration": { Icon: Link2, color: "#3b82f6" },
                "JWT / RBAC": { Icon: ShieldCheck, color: "#16a34a" },
                "CI/CD": { Icon: Link2, color: "#06b6d4" },
              };
              const { Icon, color } = iconMap[label] || { Icon: Circle, color: "var(--color-on-surface-variant)" };
              return (
                <div
                  key={label}
                  className="flex items-center gap-3 px-6 py-4 rounded-full"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-surface-container-highest)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative rounded-xl p-12 md:p-24 overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface-container-lowest)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "rgba(192,193,255,0.08)", filter: "blur(120px)" }}
          />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {a.cta_title}
            </h2>
            <p className="text-lg mb-12" style={{ color: "var(--color-on-surface-variant)" }}>
              {a.cta_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="font-bold py-4 px-10 rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {a.cta_primary}
              </a>
              <a
                href="/experience"
                className="font-bold py-4 px-10 rounded-full transition-colors"
                style={{
                  backgroundColor: "var(--color-surface-container-high)",
                  color: "var(--color-on-surface)",
                  border: "1px solid var(--border-strong)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {a.cta_secondary}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
