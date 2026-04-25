"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Hexagon,
  Circle,
  Smartphone,
  Code2,
  Link2,
  Activity,
  Leaf,
  Route,
  GitBranch,
  Shield,
  Gauge,
  Radio,
  ExternalLink,
  HeartPulse,
  Building2,
  Warehouse,
  Cpu,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLang();
  const h = t.home;

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
            <div className="flex items-center gap-3">
              <span className="h-px w-12" style={{ backgroundColor: "var(--color-primary)" }} />
              <span
                className="font-bold uppercase tracking-[0.2em] text-xs"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
              >
                {h.badge}
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {h.title1} <br /> {h.title2}
            </h1>

            <p
              className="text-xl md:text-2xl max-w-2xl font-light leading-relaxed"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {h.subtitle}{" "}
              <span style={{ color: "var(--color-on-surface)", fontStyle: "italic" }}>
                {h.subtitleEmphasis}
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/projects"
                className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {h.cta_projects}
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-lg"
                style={{
                  backgroundColor: "var(--color-surface-container-high)",
                  color: "var(--color-on-surface)",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {h.cta_contact}
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative">
            <div
              className="aspect-square rounded-xl overflow-hidden relative"
              style={{ backgroundColor: "var(--color-surface-container-highest)" }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-background) 0%, transparent 60%)" }}
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-2xl backdrop-blur-md"
              style={{
                backgroundColor: "var(--color-surface-container-highest)",
                border: "1px solid var(--border-medium)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(192,193,255,0.15)" }}
                >
                  <span style={{ color: "var(--color-primary)" }}>⚡</span>
                </div>
                <div>
                  <div
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                  >
                    {h.badge_efficiency}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                    {h.badge_efficiency_sub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: h.skills_title_core,
                icon: Monitor,
                color: "var(--color-primary)",
                tags: [
                  { label: "Next.js", icon: Hexagon },
                  { label: "Node.js", icon: Circle },
                  { label: "React Native", icon: Smartphone },
                  { label: "PHP", icon: Code2 },
                ],
              },
              {
                title: h.skills_title_arch,
                icon: Server,
                color: "var(--color-secondary)",
                tags: [
                  { label: "SAP Integration", icon: Link2 },
                  { label: "OPC/Kepware", icon: Activity },
                  { label: "REST API", icon: Route },
                  { label: "Middleware", icon: Server },
                ],
              },
              {
                title: h.skills_title_ui,
                icon: Database,
                color: "var(--color-tertiary)",
                tags: [
                  { label: "MySQL", icon: Database },
                  { label: "MSSQL", icon: Database },
                  { label: "MongoDB", icon: Leaf },
                  { label: "Sequelize", icon: Database },
                ],
              },
              {
                title: h.skills_title_deploy,
                icon: Cloud,
                color: "var(--color-on-surface)",
                tags: [
                  { label: "CI/CD", icon: GitBranch },
                  { label: "JWT/RBAC", icon: Shield },
                  { label: "Load Testing", icon: Gauge },
                  { label: "SLA Support", icon: Shield },
                ],
              },
            ].map(({ title, icon: Icon, color, tags }) => (
              <div key={title} className="space-y-4">
                <h3
                  className="font-bold text-2xl flex items-center gap-2"
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                >
                  <Icon size={24} style={{ color }} />
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(({ label, icon: TagIcon }) => (
                    <span
                      key={label}
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                      style={{
                        backgroundColor: "var(--color-surface-container-highest)",
                        color,
                        border: "1px solid var(--border-subtle)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      <TagIcon size={14} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
              >
                {h.works_title}
              </h2>
              <p style={{ color: "var(--color-on-surface-variant)", maxWidth: "32rem" }}>
                {h.works_subtitle}
              </p>
            </div>
            <a
              href="/projects"
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-80"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
            >
              {h.works_archive}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card */}
            <div
              className="md:col-span-8 relative overflow-hidden rounded-xl"
              style={{
                backgroundColor: "var(--color-surface-container-high)",
                border: "1px solid var(--border-subtle)",
                height: "500px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(192,193,255,0.05) 0%, transparent 60%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-background) 0%, rgba(11,19,38,0.4) 50%, transparent 100%)" }}
              />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="flex gap-2">
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5"
                    style={{ backgroundColor: "rgba(192,193,255,0.15)", color: "var(--color-primary)" }}
                  >
                    <HeartPulse size={12} />
                    {h.badge_healthcare}
                  </span>
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "var(--color-on-surface)" }}
                  >
                    <Building2 size={12} />
                    {h.badge_enterprise}
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                >
                  {h.project1_title}
                </h3>
                <p style={{ color: "var(--color-on-surface-variant)", maxWidth: "28rem" }}>
                  {h.project1_desc}
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--color-outline)" }}>
                  {h.project1_stack}
                </p>
              </div>
            </div>

            {/* Small card */}
            <div
              className="md:col-span-4 relative overflow-hidden rounded-xl"
              style={{
                backgroundColor: "var(--color-surface-container-high)",
                border: "1px solid var(--border-subtle)",
                height: "500px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-background) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <span
                  className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5"
                  style={{ backgroundColor: "rgba(221,183,255,0.15)", color: "var(--color-secondary)" }}
                >
                  <Warehouse size={12} />
                  {h.badge_warehouse}
                </span>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                >
                  {h.project2_title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {h.project2_desc}
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--color-outline)" }}>
                  {h.project2_stack}
                </p>
              </div>
            </div>

            {/* Wide card */}
            <div
              className="md:col-span-12 overflow-hidden rounded-xl"
              style={{
                backgroundColor: "var(--color-surface-container-high)",
                border: "1px solid var(--border-subtle)",
                height: "400px",
              }}
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-12 flex flex-col justify-center space-y-4">
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit flex items-center gap-1.5"
                    style={{ backgroundColor: "rgba(255,183,131,0.15)", color: "var(--color-tertiary)" }}
                  >
                    <Cpu size={12} />
                    {h.badge_iot}
                  </span>
                  <h3
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                  >
                    {h.project3_title}
                  </h3>
                  <p style={{ color: "var(--color-on-surface-variant)" }}>{h.project3_desc}</p>
                  <p className="text-xs font-mono" style={{ color: "var(--color-outline)" }}>
                    {h.project3_stack}
                  </p>
                  <div className="pt-4">
                    <a
                      href="/projects"
                      className="font-bold flex items-center gap-2 transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
                    >
                      {h.project3_link}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{ background: "radial-gradient(circle at center, rgba(221,183,255,0.08), transparent 70%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
