"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import { useReveal } from "@/hooks/useReveal";

export default function ProjectsPage() {
  const { t } = useLang();
  const p = t.projects;
  const header = useReveal();
  const grid = useReveal(0.05);

  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Header */}
        <header
          ref={header.ref}
          className={`mb-20 space-y-4 reveal ${header.visible ? "visible" : ""}`}
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tighter"
            style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
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

        {/* System cards grid */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {p.systems.map((sys, i) => (
            <div
              key={sys.title}
              className={`group rounded-2xl overflow-hidden flex flex-col card-hover reveal ${
                grid.visible ? "visible" : ""
              }`}
              style={{
                backgroundColor: "var(--color-surface-container-low)",
                border: "1px solid var(--border-subtle)",
                transitionDelay: `${(i % 3) * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={sys.image}
                  alt={sys.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-surface-container-low) 0%, rgba(11,19,38,0.35) 60%, transparent 100%)",
                  }}
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
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
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold mb-2 leading-tight"
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
                >
                  {sys.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5 flex-grow"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {sys.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {sys.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-24 p-12 rounded-2xl text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface-container-low), var(--color-surface-container-highest))",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 -mr-36 -mt-36 pointer-events-none"
            style={{ background: "rgba(192,193,255,0.06)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 -ml-36 -mb-36 pointer-events-none"
            style={{ background: "rgba(221,183,255,0.05)", filter: "blur(80px)" }}
          />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-kanit)" }}
          >
            {p.cta_title}
          </h2>
          <p
            className="mb-8 max-w-lg mx-auto relative z-10"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {p.cta_desc}
          </p>
          <a
            href="/contact"
            className="px-10 py-4 rounded-full font-extrabold uppercase text-sm tracking-widest transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95 relative z-10 inline-block"
            style={{
              background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              color: "var(--color-on-primary)",
              fontFamily: "var(--font-kanit)",
              boxShadow: "0 4px 24px rgba(192,193,255,0.15)",
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
