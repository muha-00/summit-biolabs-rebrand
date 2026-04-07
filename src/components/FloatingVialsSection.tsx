import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import vialKlow        from "@/assets/vial-klow.png";
import vialWolverine   from "@/assets/vial-wolverine.png";
import vialRetatrutide from "@/assets/vial-retatrutide.png";

// Negative animation-delay = starts already mid-cycle → instant float on mount
const VIALS = [
  {
    img:        vialWolverine,
    name:       "WOLVERINE",
    spec:       "10 mg",
    price:      "From $74.99",
    to:         "/product/BB10",
    tilt:       "rotate-[-10deg]",
    animDelay:  "0s",           // starts at cycle position 0
  },
  {
    img:        vialKlow,
    name:       "KLOW",
    spec:       "80 mg",
    price:      "From $177.99",
    to:         "/product/KLOW",
    tilt:       "rotate-0",
    animDelay:  "-1.4s",        // starts 1.4s into the cycle → already floating
  },
  {
    img:        vialRetatrutide,
    name:       "RETATRUTIDE",
    spec:       "10 mg",
    price:      "From $63.99",
    to:         "/product/RT10",
    tilt:       "rotate-[10deg]",
    animDelay:  "-2.8s",        // starts 2.8s into the cycle → already floating
  },
];

export default function FloatingVialsSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: copy ─────────────────────────────────────────────── */}
          <div className="flex-1 max-w-xl text-center lg:text-left">

            {/* Trusted badge */}
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-7"
              style={{ borderColor: "rgba(0,200,232,0.30)", background: "rgba(0,200,232,0.05)" }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-heading font-bold tracking-[0.18em] uppercase"
                style={{ color: "#00A8C8" }}>
                Premium Research Peptides – Canada
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "#0a1628" }}
            >
              Peptides of the<br />
              Highest{" "}
              <span style={{
                background: "linear-gradient(120deg, #00C8E8 0%, #0090C8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                Research&#8209;Grade
              </span>
              <br />
              Purity
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#4a5568", fontWeight: 400 }}>
              Explore our full catalog of research compounds — every batch
              independently verified at <strong style={{ color: "#0a1628" }}>99%+ purity</strong> by
              Janoshik Analytical. Fast Canadian shipping.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "linear-gradient(135deg, #00C8E8 0%, #0090C8 100%)",
                  color: "#001828",
                  boxShadow: "0 4px 20px rgba(0,200,232,0.35)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(0,200,232,0.55)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.filter = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,200,232,0.35)";
                }}
              >
                Browse Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide border transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "rgba(0,0,0,0.14)",
                  color: "#1a2840",
                  background: "white",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,232,0.50)";
                  (e.currentTarget as HTMLElement).style.color = "#00A8C8";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.14)";
                  (e.currentTarget as HTMLElement).style.color = "#1a2840";
                }}
              >
                Learn More
              </Link>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: "99%+", label: "Peptide Purity"      },
                { value: "75+",  label: "Research Compounds"   },
                { value: "Fast", label: "Canadian Shipping"    },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-2xl font-black mb-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#00A8C8" }}>
                    {m.value}
                  </p>
                  <p className="text-xs font-medium tracking-wide uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#8896a8" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating vials ───────────────────────────────────── */}
          <div className="flex-1 w-full">
            <div className="flex items-end justify-center gap-4 md:gap-8">
              {VIALS.map((v, i) => (
                <Link
                  key={v.name}
                  to={v.to}
                  className={`flex flex-col items-center group select-none flex-1 ${v.tilt}`}
                  style={{ textDecoration: "none", maxWidth: i === 1 ? "38%" : "31%" }}
                >
                  {/* Vial image — float + glow */}
                  <div
                    className="relative w-full"
                    style={{
                      willChange: "transform, filter",
                      animation: `vialFloat 4.2s ease-in-out ${v.animDelay} infinite, vialGlow 4.2s ease-in-out ${v.animDelay} infinite`,
                    }}
                  >
                    {/* Ground shadow */}
                    <div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full"
                      style={{
                        width: "70%", height: "14px",
                        background: "radial-gradient(ellipse, rgba(0,160,200,0.22) 0%, transparent 72%)",
                        filter: "blur(6px)",
                      }}
                    />
                    <img
                      src={v.img}
                      alt={v.name}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-6 text-center">
                    <p
                      className="font-black tracking-wider uppercase mb-1 transition-colors duration-200 group-hover:text-cyan-500"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#0a1628",
                        fontSize: i === 1 ? "15px" : "13px",
                      }}
                    >
                      {v.name}
                    </p>
                    <p className="text-xs mb-1"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#8896a8" }}>
                      {v.spec}
                    </p>
                    <p className="text-sm font-bold"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#00A8C8" }}>
                      {v.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
