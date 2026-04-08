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
    tilt:       "-rotate-6",
    animDelay:  "0s",
  },
  {
    img:        vialKlow,
    name:       "KLOW",
    spec:       "80 mg",
    price:      "From $177.99",
    to:         "/product/KLOW",
    tilt:       "rotate-0",
    animDelay:  "-1.4s",
  },
  {
    img:        vialRetatrutide,
    name:       "RETATRUTIDE",
    spec:       "10 mg",
    price:      "From $63.99",
    to:         "/product/RT10",
    tilt:       "rotate-6",
    animDelay:  "-2.8s",
  },
];

export default function FloatingVialsSection({ onBrowse }: { onBrowse?: () => void }) {
  return (
    <section className="bg-white overflow-x-hidden">
      <div className="container mx-auto px-5 py-10 md:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* ── Left: copy ─────────────────────────────────────────────── */}
          <div className="w-full lg:w-[34%] lg:flex-shrink-0 text-center lg:text-left">

            {/* Trusted badge */}
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
              style={{ borderColor: "rgba(0,200,232,0.30)", background: "rgba(0,200,232,0.05)" }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-heading font-bold tracking-[0.15em] uppercase leading-tight"
                style={{ color: "#00A8C8" }}>
                Premium Research Peptides – Canada
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[2.2rem] sm:text-5xl lg:text-[3.4rem] font-black leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "'Inter', sans-serif", color: "#0a1628" }}
            >
              Peptides of the Highest{" "}
              <span style={{
                background: "linear-gradient(120deg, #00C8E8 0%, #0090C8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                Research&#8209;Grade
              </span>{" "}
              Purity
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base mb-7 leading-relaxed max-w-sm mx-auto lg:mx-0"
              style={{ fontFamily: "'Inter', sans-serif", color: "#4a5568", fontWeight: 400 }}>
              Explore our full catalog of research compounds — every batch
              independently verified at <strong style={{ color: "#0a1628" }}>99%+ purity</strong> by
              Janoshik Analytical. Fast Canadian shipping.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {onBrowse ? (
                <button
                  onClick={onBrowse}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "linear-gradient(135deg, #00C8E8 0%, #0090C8 100%)",
                    color: "#001828",
                    boxShadow: "0 4px 20px rgba(0,200,232,0.35)",
                  }}
                >
                  Browse Catalog
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "linear-gradient(135deg, #00C8E8 0%, #0090C8 100%)",
                    color: "#001828",
                    boxShadow: "0 4px 20px rgba(0,200,232,0.35)",
                  }}
                >
                  Browse Catalog
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide border transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "rgba(0,0,0,0.14)",
                  color: "#1a2840",
                  background: "white",
                }}
              >
                Learn More
              </Link>
            </div>

            {/* Metrics */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {[
                { value: "99%+", label: "Peptide Purity"    },
                { value: "75+",  label: "Research Compounds" },
                { value: "Fast", label: "Canadian Shipping"  },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-xl font-black mb-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#00A8C8" }}>
                    {m.value}
                  </p>
                  <p className="text-[10px] font-medium tracking-wide uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#8896a8" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating vials ───────────────────────────────────── */}
          <div className="w-full lg:flex-1">
            <div className="flex items-end justify-center gap-3 sm:gap-6 lg:gap-8 px-2">
              {VIALS.map((v, i) => (
                <Link
                  key={v.name}
                  to={v.to}
                  className={`flex flex-col items-center group select-none flex-1 ${v.tilt}`}
                  style={{ textDecoration: "none", maxWidth: i === 1 ? "36%" : "32%" }}
                >
                  {/* Vial image — float + glow */}
                  <div
                    className="relative w-full flex justify-center"
                    style={{
                      willChange: "transform, filter",
                      animation: `vialFloat 4.2s ease-in-out ${v.animDelay} infinite, vialGlow 4.2s ease-in-out ${v.animDelay} infinite`,
                    }}
                  >
                    {/* Ground shadow */}
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                      style={{
                        width: "60%", height: "10px",
                        background: "radial-gradient(ellipse, rgba(0,160,200,0.22) 0%, transparent 72%)",
                        filter: "blur(5px)",
                      }}
                    />
                    <img
                      src={v.img}
                      alt={v.name}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-4 text-center">
                    <p
                      className="font-black tracking-wider uppercase mb-0.5 transition-colors duration-200 group-hover:text-cyan-500 leading-tight"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#0a1628",
                        fontSize: i === 1 ? "13px" : "11px",
                      }}
                    >
                      {v.name}
                    </p>
                    <p className="text-[10px] mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#8896a8" }}>
                      {v.spec}
                    </p>
                    <p className="text-xs font-bold"
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
