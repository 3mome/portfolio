"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Route,
  Shield,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLang();
  const h = t.home;

  const skills = useReveal();
  const works = useReveal();
  const cards = useReveal();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none"
          style={{ background: "rgba(192,193,255,0.08)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none"
          style={{ background: "rgba(221,183,255,0.08)", filter: "blur(120px)" }}
        />

        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-3 hero-line hero-line-1">
              <span className="h-px w-12" style={{ backgroundColor: "var(--color-primary)" }} />
              <span
                className="badge-shimmer font-bold uppercase tracking-[0.2em] text-xs"
                style={{ fontFamily: "var(--font-kanit)" }}
              >
                {h.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] hero-line hero-line-2"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
            >
              {h.title1} <br />
              <span className="text-gradient">{h.title2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl max-w-2xl font-light leading-relaxed hero-line hero-line-3"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {h.subtitle}{" "}
              <span style={{ color: "var(--color-on-surface)", fontStyle: "italic" }}>
                {h.subtitleEmphasis}
              </span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 hero-line hero-line-4">
              <a
                href="/projects"
                className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]"
                style={{
                  background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-kanit)",
                  boxShadow: "0 4px 24px rgba(192,193,255,0.18)",
                }}
              >
                {h.cta_projects}
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:border-opacity-80 hover:bg-opacity-80 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  backgroundColor: "var(--color-surface-container-high)",
                  color: "var(--color-on-surface)",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-kanit)",
                }}
              >
                {h.cta_contact}
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="hidden lg:block lg:col-span-4 relative hero-line hero-line-3">
            <div
              className="aspect-square rounded-2xl overflow-hidden relative profile-ring"
              style={{ backgroundColor: "var(--color-surface-container-highest)" }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-background) 0%, transparent 55%)" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skills.ref}
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-container-low)" }}
      >
        {/* Subtle bg blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(192,193,255,0.04)", filter: "blur(100px)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(221,183,255,0.04)", filter: "blur(100px)" }} />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section header */}
          <div className={`mb-14 reveal ${skills.visible ? "visible" : ""}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10" style={{ backgroundColor: "var(--color-primary)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}>
                Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-2"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}>
              {h.skills_section_title}
            </h2>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              {h.skills_section_sub}
            </p>
          </div>

          {/* 6-category grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: h.skills_title_core,
                icon: Monitor,
                accentColor: "var(--color-primary)",
                bgAccent: "rgba(192,193,255,0.06)",
                tags: ["Next.js", "Vue.js", "React Native", "TypeScript", "Tailwind CSS", "Ant Design", "Ext JS"],
                colDelay: 0,
              },
              {
                title: h.skills_title_backend,
                icon: Server,
                accentColor: "var(--color-secondary)",
                bgAccent: "rgba(221,183,255,0.06)",
                tags: ["Node.js", "NestJS", "CodeIgniter", "Sequelize", "Prisma", "REST API"],
                colDelay: 1,
              },
              {
                title: h.skills_title_arch,
                icon: Route,
                accentColor: "var(--color-primary)",
                bgAccent: "rgba(192,193,255,0.06)",
                tags: ["SAP Integration", "Kong API Gateway", "Middleware", "n8n", "Jasper Reports", "Line OA"],
                colDelay: 2,
              },
              {
                title: h.skills_title_ui,
                icon: Database,
                accentColor: "var(--color-tertiary)",
                bgAccent: "rgba(255,183,131,0.06)",
                tags: ["MySQL", "PostgreSQL", "MSSQL", "Supabase"],
                colDelay: 3,
              },
              {
                title: h.skills_title_deploy,
                icon: Cloud,
                accentColor: "var(--color-secondary)",
                bgAccent: "rgba(221,183,255,0.06)",
                tags: ["Docker", "AWS (EC2/S3)", "Nginx", "Linux", "Jenkins CI/CD", "Cloudflare", "Prometheus", "Grafana"],
                colDelay: 4,
              },
              {
                title: h.skills_title_security,
                icon: Shield,
                accentColor: "var(--color-tertiary)",
                bgAccent: "rgba(255,183,131,0.06)",
                tags: ["JWT / RBAC", "SonarQube", "OWASP", "Burp Suite", "Jest", "Playwright", "JMeter"],
                colDelay: 5,
              },
              {
                title: h.skills_title_ai,
                icon: Sparkles,
                accentColor: "var(--color-primary)",
                bgAccent: "rgba(192,193,255,0.06)",
                tags: ["Claude", "Codex", "Gemini", "n8n", "Openclaw"],
                colDelay: 6,
              },
            ].map(({ title, icon: Icon, accentColor, bgAccent, tags, colDelay }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 reveal ${skills.visible ? "visible" : ""} ${colDelay === 6 ? "lg:col-span-3" : ""}`}
                style={{
                  backgroundColor: "var(--color-surface-container-high)",
                  border: "1px solid var(--border-subtle)",
                  background: `linear-gradient(135deg, ${bgAccent} 0%, var(--color-surface-container-high) 60%)`,
                  transitionDelay: `${colDelay * 80}ms`,
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: bgAccent, border: `1px solid ${accentColor}22` }}>
                    <Icon size={18} style={{ color: accentColor }} />
                  </div>
                  <h3 className="font-bold text-base"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}>
                    {title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((label, i) => (
                    <span
                      key={label}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide cursor-default transition-all duration-200 hover:scale-105 ${
                        skills.visible ? "tag-pop" : "opacity-0"
                      }`}
                      style={{
                        backgroundColor: "var(--color-surface-container-highest)",
                        color: accentColor,
                        border: "1px solid var(--border-subtle)",
                        fontFamily: "var(--font-kanit)",
                        animationDelay: skills.visible ? `${colDelay * 60 + i * 45 + 80}ms` : "0ms",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliveries */}
      <section
        ref={works.ref}
        className="py-32 relative"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Section header */}
          <div className={`flex justify-between items-end mb-12 reveal ${works.visible ? "visible" : ""}`}>
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-3"
                style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
              >
                {h.works_title}
              </h2>
              <p style={{ color: "var(--color-on-surface-variant)", maxWidth: "32rem" }}>
                {h.works_subtitle}
              </p>
            </div>
            <a
              href="/projects"
              className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:gap-4 shrink-0"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
            >
              {h.works_archive}
            </a>
          </div>

          {/* 11-system grid */}
          <div
            ref={cards.ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {t.projects.systems.map((sys, i) => (
              <a
                key={sys.title}
                href="/projects"
                className={`group rounded-2xl overflow-hidden flex flex-col card-hover reveal ${
                  cards.visible ? "visible" : ""
                }`}
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  border: "1px solid var(--border-subtle)",
                  transitionDelay: `${(i % 4) * 70}ms`,
                  textDecoration: "none",
                }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={sys.image}
                    alt={sys.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, var(--color-surface-container-low) 0%, rgba(11,19,38,0.2) 70%, transparent 100%)",
                    }}
                  />
                  <span
                    className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(11,19,38,0.65)",
                      color: "var(--color-primary)",
                      border: "1px solid rgba(192,193,255,0.2)",
                    }}
                  >
                    {sys.category}
                  </span>
                </div>

                {/* Content */}
                <div className="px-5 py-4 flex flex-col flex-grow">
                  <h3
                    className="text-base font-bold mb-2 leading-snug"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
                  >
                    {sys.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-auto pt-3">
                    {sys.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--color-surface-container-highest)",
                          color: "var(--color-primary)",
                          border: "1px solid var(--border-subtle)",
                          fontFamily: "var(--font-kanit)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex md:hidden justify-center">
            <a
              href="/projects"
              className="font-bold uppercase tracking-widest text-sm"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-kanit)" }}
            >
              {h.works_archive}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
