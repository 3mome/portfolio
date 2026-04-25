"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import {
  Hexagon,
  CreditCard,
  Container,
  Circle,
  Cloud,
  Mountain,
  Code2,
  Flame,
  Globe,
  FileCode,
  React,
  ArrowRight,
} from "lucide-react";

export default function ProjectsPage() {
  const { t } = useLang();
  const p = t.projects;

  const projects = [
    {
      title: p.p1_title,
      desc: p.p1_desc,
      tags: [
        { icon: Hexagon, label: "Next.js", color: "var(--color-primary)" },
        { icon: CreditCard, label: "Stripe", color: "var(--color-primary)" },
      ],
      link: p.view_details,
      linkColor: "var(--color-primary)",
      span: 1,
    },
    {
      title: p.p2_title,
      desc: p.p2_desc,
      tags: [
        { icon: Container, label: "Docker", color: "var(--color-secondary)" },
        { icon: Circle, label: "Go", color: "var(--color-secondary)" },
      ],
      link: p.view_details,
      linkColor: "var(--color-secondary)",
      span: 1,
    },
    {
      title: p.p3_title,
      desc: p.p3_desc,
      tags: [
        { icon: Cloud, label: "AWS", color: "var(--color-primary)" },
        { icon: Mountain, label: "Terraform", color: "var(--color-primary)" },
      ],
      link: p.view_details,
      linkColor: "var(--color-primary)",
      span: 1,
    },
    {
      title: p.p4_title,
      desc: p.p4_desc,
      tags: [
        { icon: Code2, label: "Python", color: "var(--color-secondary)" },
        { icon: Flame, label: "PyTorch", color: "var(--color-secondary)" },
      ],
      link: p.view_details,
      linkColor: "var(--color-secondary)",
      span: 1,
    },
    {
      title: p.p5_title,
      desc: p.p5_desc,
      tags: [
        { icon: Globe, label: "Web3", color: "var(--color-primary)" },
        { icon: FileCode, label: "Solidity", color: "var(--color-primary)" },
        { icon: React, label: "React", color: "var(--color-primary)" },
      ],
      link: p.explore,
      linkColor: "var(--color-primary)",
      span: 2,
    },
  ];

  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <header className="mb-20 space-y-4">
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tighter"
            style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
          >
            {p.title1} <span className="text-gradient">{p.titleGradient}</span>
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {p.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden glow-hover transition-all duration-500 flex flex-col ${
                project.span === 2 ? "lg:col-span-2" : ""
              }`}
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div
                className="h-64 overflow-hidden relative"
                style={{ backgroundColor: "var(--color-surface-container-high)" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(192,193,255,0.1), transparent 60%), radial-gradient(circle at 70% 70%, rgba(221,183,255,0.08), transparent 60%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, var(--color-surface-container-low) 0%, transparent 60%)",
                    opacity: 0.6,
                  }}
                />
              </div>

              <div
                className="p-8 flex flex-col flex-grow"
                style={{ backgroundColor: "var(--color-surface-container-low)" }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(({ icon: Icon, label, color }) => (
                    <span
                      key={label}
                      className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5"
                      style={{ backgroundColor: "var(--color-surface-container-highest)", color }}
                    >
                      <Icon size={12} strokeWidth={2.5} />
                      {label}
                    </span>
                  ))}
                </div>

                <h3
                  className={`font-bold mb-2 ${project.span === 2 ? "text-3xl" : "text-2xl"}`}
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-6 flex-grow leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {project.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all hover:gap-4 duration-300"
                  style={{ color: project.linkColor, fontFamily: "var(--font-manrope)" }}
                >
                  <ArrowRight size={14} strokeWidth={2.5} />
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-32 p-12 rounded-xl text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--color-surface-container-low), var(--color-surface-container-highest))",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 pointer-events-none"
            style={{ background: "rgba(192,193,255,0.08)", filter: "blur(100px)" }}
          />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
            style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
          >
            {p.cta_title}
          </h2>
          <p
            className="mb-10 max-w-lg mx-auto relative z-10"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {p.cta_desc}
          </p>
          <a
            href="/contact"
            className="px-10 py-4 rounded-full font-extrabold uppercase text-sm tracking-widest transition-all hover:shadow-2xl active:scale-95 relative z-10 inline-block"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-on-primary)",
              fontFamily: "var(--font-manrope)",
            }}
          >
            {p.cta_btn}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
