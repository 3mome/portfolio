"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import { Mail, Linkedin, Github, Twitter, CheckCircle, Send } from "lucide-react";

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-32 pb-24 px-6 md:px-12"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span
              className="font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
            >
              {c.badge}
            </span>
            <h1
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6"
              style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
            >
              {c.title1} <span className="text-gradient">{c.titleGradient}</span>
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              {c.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              className="p-8 rounded-xl relative overflow-hidden"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "rgba(192,193,255,0.05)", filter: "blur(80px)" }}
              />
              <form className="space-y-6 relative z-10">
                {[
                  { id: "name", label: c.label_name, type: "text", placeholder: c.placeholder_name },
                  { id: "email", label: c.label_email, type: "email", placeholder: c.placeholder_email },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-bold uppercase tracking-widest mb-2"
                      style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-manrope)" }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{
                        backgroundColor: "var(--color-surface-container-lowest)",
                        color: "var(--color-on-surface)",
                        border: "1px solid var(--border-medium)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-manrope)" }}
                  >
                    {c.label_message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={c.placeholder_message}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "var(--color-surface-container-lowest)",
                      color: "var(--color-on-surface)",
                      border: "1px solid var(--border-medium)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-extrabold uppercase tracking-widest transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                    color: "var(--color-on-primary)",
                    fontFamily: "var(--font-manrope)",
                  }}
                >
                  <Send size={18} />
                  {c.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "supawit.srichompoo@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/supawit-srichompoo" },
                { icon: Github, label: "GitHub", value: "github.com/supawitsrichompoo" },
                { icon: Twitter, label: "Twitter", value: "twitter.com/supawitsrichompoo" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-6 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-surface-container-high)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-bold"
                      style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-manrope)" }}
                    >
                      {label}
                    </p>
                    <p className="font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "rgba(192,193,255,0.08)",
                  border: "1px solid rgba(192,193,255,0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle size={18} style={{ color: "var(--color-primary)" }} />
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
                  >
                    {c.available_badge}
                  </span>
                </div>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {c.available_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
