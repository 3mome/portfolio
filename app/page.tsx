import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{ backgroundColor: "#0b1326" }}
      >
        {/* Light leaks */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none"
          style={{ background: "rgba(192,193,255,0.08)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none"
          style={{ background: "rgba(221,183,255,0.08)", filter: "blur(120px)" }}
        />

        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12" style={{ backgroundColor: "#c0c1ff" }} />
              <span
                className="font-bold uppercase tracking-[0.2em] text-xs"
                style={{ color: "#c0c1ff", fontFamily: "var(--font-manrope)" }}
              >
                Fullstack Developer
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]"
              style={{ color: "#dae2fd", fontFamily: "var(--font-manrope)" }}
            >
              Supawit <br /> Srichompoo
            </h1>

            <p
              className="text-xl md:text-2xl max-w-2xl font-light leading-relaxed"
              style={{ color: "#c7c4d7" }}
            >
              Crafting high-performance digital solutions with{" "}
              <span style={{ color: "#dae2fd", fontStyle: "italic" }}>
                editorial precision
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/projects"
                className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, #c0c1ff, #ddb7ff)",
                  color: "#07006c",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                View Projects →
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-lg"
                style={{
                  backgroundColor: "#222a3d",
                  color: "#dae2fd",
                  border: "1px solid rgba(70,69,84,0.2)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Avatar placeholder */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div
              className="aspect-square rounded-xl overflow-hidden relative"
              style={{ backgroundColor: "#2d3449" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center text-8xl"
                style={{ color: "#464554" }}
              >
                👤
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #0b1326 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-2xl backdrop-blur-md"
              style={{
                backgroundColor: "#2d3449",
                border: "1px solid rgba(70,69,84,0.2)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(192,193,255,0.15)" }}
                >
                  <span style={{ color: "#c0c1ff" }}>⚡</span>
                </div>
                <div>
                  <div
                    className="text-sm font-bold text-white uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Efficiency
                  </div>
                  <div className="text-xs" style={{ color: "#c7c4d7" }}>
                    Optimized Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24" style={{ backgroundColor: "#131b2e" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: "Core Tech", color: "#c0c1ff", tags: ["TypeScript", "React", "Node.js"] },
              { title: "Architecture", color: "#ddb7ff", tags: ["Microservices", "GraphQL", "Serverless"] },
              { title: "UI/UX Design", color: "#ffb783", tags: ["Figma", "Motion Design", "Design Systems"] },
              { title: "Deployment", color: "#dae2fd", tags: ["AWS", "Docker", "CI/CD"] },
            ].map(({ title, color, tags }) => (
              <div key={title} className="space-y-4">
                <h3
                  className="font-bold text-2xl"
                  style={{ color: "#dae2fd", fontFamily: "var(--font-manrope)" }}
                >
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: "#2d3449",
                        color,
                        border: "1px solid rgba(70,69,84,0.1)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative" style={{ backgroundColor: "#0b1326" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                style={{ color: "#dae2fd", fontFamily: "var(--font-manrope)" }}
              >
                Selected Works
              </h2>
              <p style={{ color: "#c7c4d7", maxWidth: "32rem" }}>
                A showcase of high-performance applications designed with attention to detail and scalability.
              </p>
            </div>
            <a
              href="/projects"
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-80"
              style={{ color: "#c0c1ff", fontFamily: "var(--font-manrope)" }}
            >
              View Archive →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card */}
            <div
              className="md:col-span-8 relative overflow-hidden rounded-xl"
              style={{
                backgroundColor: "#222a3d",
                border: "1px solid rgba(70,69,84,0.1)",
                height: "500px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(192,193,255,0.05) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #0b1326 0%, rgba(11,19,38,0.4) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="flex gap-2">
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(192,193,255,0.15)", color: "#c0c1ff" }}
                  >
                    Finance
                  </span>
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
                  >
                    Enterprise
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Digital Obsidian Analytics
                </h3>
                <p style={{ color: "#c7c4d7", maxWidth: "28rem" }}>
                  Real-time data visualization platform for high-frequency trading firms.
                </p>
                <p className="text-xs font-mono" style={{ color: "rgba(218,226,253,0.5)" }}>
                  React / D3.js / WebSockets
                </p>
              </div>
            </div>

            {/* Small card */}
            <div
              className="md:col-span-4 relative overflow-hidden rounded-xl"
              style={{
                backgroundColor: "#222a3d",
                border: "1px solid rgba(70,69,84,0.1)",
                height: "500px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0b1326 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <span
                  className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(221,183,255,0.15)", color: "#ddb7ff" }}
                >
                  Boutique
                </span>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Silk &amp; Stone
                </h3>
                <p className="text-sm" style={{ color: "#c7c4d7" }}>
                  Headless commerce experience for a premium apparel brand.
                </p>
                <p className="text-xs font-mono" style={{ color: "rgba(218,226,253,0.5)" }}>
                  Next.js / Shopify API
                </p>
              </div>
            </div>

            {/* Wide card */}
            <div
              className="md:col-span-12 overflow-hidden rounded-xl"
              style={{
                backgroundColor: "#222a3d",
                border: "1px solid rgba(70,69,84,0.1)",
                height: "400px",
              }}
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-12 flex flex-col justify-center space-y-4">
                  <span
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit"
                    style={{ backgroundColor: "rgba(255,183,131,0.15)", color: "#ffb783" }}
                  >
                    Web3
                  </span>
                  <h3
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Aura NFT Gallery
                  </h3>
                  <p style={{ color: "#c7c4d7" }}>
                    A decentralized platform for digital artists to showcase high-fidelity assets.
                  </p>
                  <p className="text-xs font-mono" style={{ color: "rgba(218,226,253,0.5)" }}>
                    Solidity / Three.js / Hardhat
                  </p>
                  <div className="pt-4">
                    <a
                      href="/projects"
                      className="font-bold flex items-center gap-2 transition-opacity hover:opacity-80"
                      style={{ color: "#c0c1ff", fontFamily: "var(--font-manrope)" }}
                    >
                      Case Study →
                    </a>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: "radial-gradient(circle at center, rgba(221,183,255,0.08), transparent 70%)",
                  }}
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
